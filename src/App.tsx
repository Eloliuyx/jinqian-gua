// src/App.tsx
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, History, RefreshCcw, Shuffle, Sparkles, Trash2 } from "lucide-react";
//import DevHexValidator from "@/dev/DevHexValidator";


/** ===================== 基础易理工具 ===================== */
// 金钱卦（硬币法）：2/3 → 6/7/8/9
function castCoin(): 2 | 3 { return Math.random() < 0.5 ? 2 : 3; }
function castLine(): 6 | 7 | 8 | 9 {
  const sum = castCoin() + castCoin() + castCoin();
  if (sum === 6) return 6; // 老阴 × (动)
  if (sum === 7) return 7; // 少阳 ——
  if (sum === 8) return 8; // 少阴 — —
  return 9; // 老阳 ○ (动)
}
// 自下而上爻 → 二进制（阳=1 阴=0）
function toBinaryFromYaos(yaos: number[]): number[] { return yaos.map((v) => (v === 7 || v === 9 ? 1 : 0)); }
// 之卦：只翻转 6/9
function toRelatingYaosStrict(yaos: number[]) { return yaos.map((v) => (v === 6 ? 7 : v === 9 ? 8 : v)); }

function movingLinePositions(yaos: number[]) {
  const res: number[] = [];
  yaos.forEach((v, i) => { if (v === 6 || v === 9) res.push(i + 1); });
  return res;
}

/** ===================== 八卦索引 & 元数据（按你的表） ===================== */
/**
 * 映射规则（bits 为自下而上；bits[0] 是初爻）：
 * 0 坤 000, 1 震 100, 2 坎 010, 3 艮 001, 4 巽 011, 5 离 101, 6 兑 110, 7 乾 111
 */
type TrigramMeta = {
  idx: number;
  bits: [0|1,0|1,0|1]; // 自下而上
  glyph: string;
  zh: { name: string; attr: string };
  en: { name: string; attr: string };
};

const TRIGRAMS: TrigramMeta[] = [
  { idx: 0, bits: [0,0,0], glyph:"☷", zh:{name:"坤",attr:"地"}, en:{name:"Kun",  attr:"Earth"} },
  { idx: 1, bits: [1,0,0], glyph:"☳", zh:{name:"震",attr:"雷"}, en:{name:"Zhen", attr:"Thunder"} },
  { idx: 2, bits: [0,1,0], glyph:"☵", zh:{name:"坎",attr:"水"}, en:{name:"Kan",  attr:"Water"} },
  { idx: 3, bits: [0,0,1], glyph:"☶", zh:{name:"艮",attr:"山"}, en:{name:"Gen",  attr:"Mountain"} },
  { idx: 4, bits: [0,1,1], glyph:"☴", zh:{name:"巽",attr:"风"}, en:{name:"Xun",  attr:"Wind"} },
  { idx: 5, bits: [1,0,1], glyph:"☲", zh:{name:"离",attr:"火"}, en:{name:"Li",   attr:"Fire"} },
  { idx: 6, bits: [1,1,0], glyph:"☱", zh:{name:"兑",attr:"泽"}, en:{name:"Dui",  attr:"Lake"} },
  { idx: 7, bits: [1,1,1], glyph:"☰", zh:{name:"乾",attr:"天"}, en:{name:"Qian", attr:"Heaven"} },
];

// bits(自下而上) -> 索引（使用映射表，而非位运算）
const BITS_TO_INDEX = new Map<string, number>(TRIGRAMS.map(t => [t.bits.join(""), t.idx]));
// 索引 -> meta
const INDEX_TO_META = TRIGRAMS.reduce<Record<number, TrigramMeta>>((m, t) => (m[t.idx] = t, m), {});

// 安全的 bits → idx
function trigramIndexFromBits(bits: number[]): number {
  const key = `${bits[0] ?? 0}${bits[1] ?? 0}${bits[2] ?? 0}`;
  const idx = BITS_TO_INDEX.get(key);
  return idx ?? 0;
}

export type Locale = "zh" | "en";
function trigramName(bits: number[], locale: Locale): string {
  const idx = trigramIndexFromBits(bits);
  const meta = INDEX_TO_META[idx];
  return locale === "en" ? `${meta.en.attr} · ${meta.en.name}` : `${meta.zh.attr}${meta.zh.name}`;
}

/** ======= 按 self-consistent 规则：从 6 爻（自下而上）计算上下卦 idx ======= */
function calcUpperLowerFromYaos(yaos: number[]) {
  const bin = toBinaryFromYaos(yaos);      // 自下而上 6 位；bin[0] 初爻
  const lowerBits = bin.slice(0, 3);       // 下三爻（自下而上）
  const upperBits = bin.slice(3, 6);       // 上三爻（自下而上）
  return {
    bin,
    lowerBits, upperBits,
    lowerIdx: trigramIndexFromBits(lowerBits),
    upperIdx: trigramIndexFromBits(upperBits),
  };
}

/** ===================== 卦图加载（Vite import.meta.glob） ===================== */
function useHexImages() {
  const modules = import.meta.glob("/src/assets/hex/*", {
    eager: true,
    import: "default",
  }) as Record<string, string>;

  const map = useMemo(() => {
    const m = new Map<number, string>();
    Object.entries(modules).forEach(([path, url]) => {
      const m2 = path.match(/\/(\d{2})\.[a-zA-Z]+$/); // 01..64.*
      if (m2) m.set(Number(m2[1]), url);
    });
    return m;
  }, []);

  const getHexImg = useCallback((no?: number) => (no ? map.get(no) : undefined), [map]);
  return { getHexImg };
}

/** ===================== 数据模块（动态加载） ===================== */
// 与 data 文件保持一致的类型
export type HexDatum = {
  no: number;     // 文王序 1..64
  name: string;   // 卦名
  guaci: string;  // 卦辞（Judgment）
  upper: number;  // 上卦索引 0..7
  lower: number;  // 下卦索引 0..7
};
type LookupFn = (upper: number, lower: number) => HexDatum | undefined;

function useHexData(locale: Locale) {
  const [lookup, setLookup] = useState<LookupFn>(() => () => undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    (async () => {
      const mod = locale === "zh"
        ? await import("@/data/hexagrams.zh")
        : await import("@/data/hexagrams.en");
      if (!alive) return;
      setLookup(() => (mod as any).getHexByUpperLower as LookupFn);
      setLoading(false);
    })();
    return () => { alive = false; };
  }, [locale]);

  return { lookup, loading };
}

/** ===================== 历史存储（多标签同步） ===================== */
function useHistory(storageKey: string) {
  const [items, setItems] = useState<any[]>([]);

  const read = useCallback(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setItems(raw ? JSON.parse(raw) : []);
    } catch { setItems([]); }
  }, [storageKey]);

  useEffect(() => { read(); }, [read]);

  useEffect(() => {
    function onStorage(e: StorageEvent) { if (e.key === storageKey) read(); }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [storageKey, read]);

  const push = useCallback((item: any) => {
    setItems(prev => {
      const arr = [item, ...prev].slice(0, 100);
      localStorage.setItem(storageKey, JSON.stringify(arr));
      return arr;
    });
  }, [storageKey]);

  const clear = useCallback(() => {
    localStorage.removeItem(storageKey);
    setItems([]);
  }, [storageKey]);

  return { items, push, clear };
}

/** ===================== “自上而下” 六爻（仅用于展示，与图片一致） ===================== */
function linesTopDownFromUpperLower(upperIdx: number, lowerIdx: number): number[] {
  const upTop  = [...INDEX_TO_META[upperIdx].bits].reverse(); // 上卦：自上而下
  const lowTop = [...INDEX_TO_META[lowerIdx].bits].reverse(); // 下卦：自上而下
  return [...upTop, ...lowTop]; // 六爻：自上而下（0=阴，1=阳）
}
function lineText(v: number): string {
  return v === 1 ? "———    少阳" : "—   —  少阴";
}

/** ===================== App ===================== */
export default function App() {
  type Phase = "intro" | "result";
  const [phase, setPhase] = useState<Phase>("intro");
  const [question, setQuestion] = useState("");
  const [ritual, setRitual] = useState(true);
  const [casting, setCasting] = useState(false);
  const [yaos, setYaos] = useState<number[]>([]); // 自下而上 6/7/8/9
  const [locale, setLocale] = useState<Locale>("zh");

  const { lookup, loading } = useHexData(locale);
  const STORAGE_KEY = useMemo(() => `jinqian-gua-history-v5-${locale}`, [locale]);
  const history = useHistory(STORAGE_KEY);
  const { getHexImg } = useHexImages();

  // DEV 自检（可留可删）
  useEffect(() => {
    if (!import.meta.env.DEV) return;
    // 小过：上=震(1:100) 下=艮(3:001)
    const sample = [7,7,8,7,8,6]; // 自下而上：阳阳阴阳阴阴
    const main = calcUpperLowerFromYaos(sample);
    console.debug("[ASSERT 小过?]", { upperIdx: main.upperIdx, lowerIdx: main.lowerIdx }); // 期望 1,3
  }, []);

  const info = useMemo(() => {
    if (yaos.length !== 6) return null;

    const main = calcUpperLowerFromYaos(yaos);
    const moving = movingLinePositions(yaos);

    let relateBlock: any = null;
    const fallback: HexDatum = {
      no: 0,
      name: locale === "en" ? "(unlisted)" : "(未收录)",
      guaci: locale === "en" ? "(to be added)" : "(卦辞待补)",
      upper: -1, lower: -1
    };

    const mainHex = lookup(main.upperIdx, main.lowerIdx) ?? fallback;

    if (moving.length > 0) {
      const relateYaos = toRelatingYaosStrict(yaos);
      const relate = calcUpperLowerFromYaos(relateYaos);
      const relateHex = lookup(relate.upperIdx, relate.lowerIdx) ?? fallback;

      relateBlock = {
        upperIdx: relate.upperIdx,
        lowerIdx: relate.lowerIdx,
        upperName: trigramName(relate.upperBits, locale),
        lowerName: trigramName(relate.lowerBits, locale),
        hex: relateHex,
      };
    }

    return {
      base: {
        upperIdx: main.upperIdx,
        lowerIdx: main.lowerIdx,
        upperName: trigramName(main.upperBits, locale),
        lowerName: trigramName(main.lowerBits, locale),
        hex: mainHex,
      },
      relate: relateBlock, // 可能为 null
      moving,
      raw: { yaos, main },
    };
  }, [yaos, lookup, locale]);

  async function handleCastAll() {
    if (ritual) { setCasting(true); await wait(300); }
    const ys: number[] = [];
    for (let i = 0; i < 6; i++) {
      if (ritual) await wait(180 + i * 40);
      ys.push(castLine());
    }
    setYaos(ys);
    setCasting(false);
    setPhase("result");

    // 写入历史：保存 bits（下三爻/上三爻），显示时统一用 trigramIndexFromBits
    const now = new Date().toISOString();
    const main = calcUpperLowerFromYaos(ys);
    history.push({ t: now, q: question, yaos: ys, upper: main.upperBits, lower: main.lowerBits });
  }
  function wait(ms: number) { return new Promise(res => setTimeout(res, ms)); }

  function handleResetAll() { setQuestion(""); setYaos([]); setPhase("intro"); }
  function handleRecast() { setYaos([]); handleCastAll(); }

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <div className="mx-auto max-w-4xl grid gap-6">
      {import.meta.env.DEV}
        <header className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">金钱卦 · 六爻占</h1>

          <div className="flex items-center gap-4">
            {/* 语言切换 */}
            <label className="text-sm text-slate-500 inline-flex items-center gap-2 select-none">
              <span>语言</span>
              <select
                className="text-sm border border-border bg-background rounded-xl px-2 py-1 outline-none focus:ring-2 focus:ring-ring"
                value={locale}
                onChange={(e) => { setLocale(e.target.value as Locale); }}
              >
                <option value="zh">中文</option>
                <option value="en">English</option>
              </select>
            </label>

            <label className="text-sm text-slate-500 inline-flex items-center gap-2 select-none cursor-pointer">
              <input type="checkbox" className="accent-slate-700" checked={ritual} onChange={e => setRitual(e.target.checked)} />
              仪式模式 <Sparkles className="w-4 h-4" />
            </label>
          </div>
        </header>

        {loading ? (
          <Card className="rounded-2xl">
            <CardHeader className="pb-2"><CardTitle>加载数据中…</CardTitle></CardHeader>
            <CardContent className="text-sm text-slate-500">正在载入卦象数据表（{locale.toUpperCase()}）。</CardContent>
          </Card>
        ) : phase === "intro" ? (
          <IntroCard question={question} onChange={setQuestion} onCast={handleCastAll} />
        ) : (
          <ResultCard
            question={question}
            info={info}
            onRecast={handleRecast}
            onBack={handleResetAll}
            getHexImg={getHexImg}
            locale={locale}
          />
        )}

        {/* 历史 */}
        <Card className="shadow rounded-2xl">
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2"><History className="w-4 h-4" />起卦历史</CardTitle>
          </CardHeader>
          <CardContent>
            {history.items.length === 0 ? (
              <div className="text-sm text-slate-500">暂无记录。</div>
            ) : (
              <div className="space-y-3">
                <div className="flex justify-end">
                  <Button variant="ghost" size="sm" onClick={history.clear} className="rounded-2xl text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4 mr-1" /> 清空
                  </Button>
                </div>
                <ul className="space-y-3">
                  {history.items.map((h: any, i: number) => {
                    const upIdx = trigramIndexFromBits(h.upper);
                    const lowIdx = trigramIndexFromBits(h.lower);
                    const hx = lookup(upIdx, lowIdx);
                    return (
                      <li key={i} className="p-3 bg-white rounded-xl border">
                        <div className="text-xs text-slate-500">{new Date(h.t).toLocaleString()}</div>
                        {h.q && <div className="mt-1 text-sm"><span className="text-slate-500">{locale==="en"?"Question: ":"所问："}</span>{h.q}</div>}
                        <div className="mt-1 text-sm">
                          {locale==="en" ? "Upper" : "上"}：{trigramName(h.upper, locale)} ｜ {locale==="en" ? "Lower" : "下"}：{trigramName(h.lower, locale)} ｜ {locale==="en" ? "Hex" : "卦"}：{hx?.name}{hx?.no ? (locale==="en" ? ` (#${hx.no})` : `（#${hx.no}）`) : ""}
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {casting && ritual && <RitualOverlay />}
    </div>
  );
}

/** ===================== 子组件 ===================== */
function IntroCard({ question, onChange, onCast }: { question: string; onChange: (v: string) => void; onCast: () => void; }) {
  return (
    <Card className="shadow-lg rounded-2xl">
      <CardHeader className="pb-2"><CardTitle>起卦 · 说明与输入</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="prose max-w-none text-sm text-slate-600">
          <p><strong>金钱卦</strong>：以三枚钱币，一次掷三枚，六次自下而上记爻。传统法：6=老阴(×)，7=少阳(——)，8=少阴(— —)，9=老阳(○)；6与9为动爻，可推演之卦。</p>
          <p>建议先静心一息，心中清晰念出所问之事，再点击下方「起卦」。</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-500">你想问/所求：</label>
          <textarea
            className="w-full min-h-[88px] rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="例如：我是否应该在今年冬天换工作？本周与A客户的谈判可否成？"
            value={question}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={onCast} className="rounded-2xl"><Shuffle className="w-4 h-4 mr-2" /> 起卦</Button>
          <div className="text-xs text-slate-500">点击后将自动一键掷六次，并显示结果。</div>
        </div>
      </CardContent>
    </Card>
  );
}

function ResultCard({
  question, info, onRecast, onBack, getHexImg, locale
}: {
  question: string;
  info: any;
  onRecast: () => void;
  onBack: () => void;
  getHexImg: (no?: number) => string | undefined;
  locale: Locale;
}) {
  if (!info) {
    return (
      <Card className="shadow-lg rounded-2xl">
        <CardHeader className="pb-2"><CardTitle>结果</CardTitle></CardHeader>
        <CardContent><div className="text-sm text-slate-500">尚未成卦。</div></CardContent>
      </Card>
    );
  }

  const hasMoving = info.moving.length > 0;

  return (
    <Card className="shadow-lg rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle>结果</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {question && (
            <div className="p-3 rounded-xl bg-white border text-sm">
              <span className="text-slate-500">{locale==="en"?"Question: ":"所问："}</span>{question}
            </div>
          )}

          {/* 固定两列：左 本卦；右 动爻 + （可选）之卦 */}
          <div className="grid md:grid-cols-2 gap-4 items-start">
            <HexagramPanel title={locale==="en"?"Primary":"本卦"} block={info.base} getHexImg={getHexImg} />

            <div className="space-y-4 self-start">
              <MetaPanel moving={info.moving} kind="base" raw={JSON.stringify(info.raw)} />
              {hasMoving && info.relate && (
                <HexagramMini title={locale==="en"?"Relating":"之卦"} block={info.relate} getHexImg={getHexImg} />
              )}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button variant="secondary" onClick={onBack} className="rounded-2xl">
              <RefreshCcw className="w-4 h-4 mr-2" /> {locale==="en"?"Back":"返回首页"}
            </Button>
            <Button onClick={onRecast} className="rounded-2xl">
              <Shuffle className="w-4 h-4 mr-2" /> {locale==="en"?"Recast":"重新起卦"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function RitualOverlay() {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm grid place-items-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <div className="text-center text-sm text-slate-600">摇卦中…</div>
        <div className="mt-4 flex items-center justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <div key={i} className="w-12 h-12 rounded-full border grid place-items-center animate-[spin_0.8s_linear_infinite]">
              🪙
            </div>
          ))}
        </div>
        <div className="text-center text-xs text-slate-400 mt-3">三枚钱币翻转后落桌</div>
      </div>
    </div>
  );
}

function HexagramPanel({
  title, block, getHexImg
}: {
  title: string;
  block: { upperIdx: number; lowerIdx: number; upperName: string; lowerName: string; hex: HexDatum };
  getHexImg: (no?: number) => string | undefined;
}) {
  const { upperIdx, lowerIdx, upperName, lowerName, hex } = block;
  const img = getHexImg(hex.no);
  const topDown = linesTopDownFromUpperLower(upperIdx, lowerIdx); // 自上而下

  return (
    <Card className="border rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-sm font-normal text-slate-500">
            卦：{hex.name}{hex.no ? `（#${hex.no}）` : ""}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 items-start">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-500">上卦</div>
              <div className="text-lg">{upperName}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">下卦</div>
              <div className="text-lg">{lowerName}</div>
            </div>
          </div>

          {/* 爻象（左侧有底色） + 卦图（右侧透明） */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="font-mono text-sm leading-7 min-w-[140px] md:min-w-[180px]">
                {topDown.map((b, i) => (<div key={i}>{lineText(b)}</div>))}
              </div>
            </div>
            {img && (
              <img
                src={img}
                alt={`${hex.no ? `#${hex.no} ` : ""}${hex.name}`}
                className="h-20 md:h-24 w-auto object-contain ml-auto md:ml-0"
                loading="lazy"
                decoding="async"
              />
            )}
          </div>

          {/* 卦辞 */}
          <div className="text-sm text-slate-600 bg-white border rounded-xl p-3">
            <div className="text-slate-500 mb-1">卦辞</div>
            <div>{hex.guaci}</div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function HexagramMini({
  title, block, getHexImg
}: {
  title: string;
  block: { upperIdx: number; lowerIdx: number; upperName: string; lowerName: string; hex: HexDatum };
  getHexImg: (no?: number) => string | undefined;
}) {
  const { upperIdx, lowerIdx, hex } = block;
  const img = getHexImg(hex.no);
  const topDown = linesTopDownFromUpperLower(upperIdx, lowerIdx); // 自上而下

  return (
    <Card className="border rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{title}</span>
          <span className="text-sm font-normal text-slate-500">
            {hex.name}{hex.no ? `（#${hex.no}）` : ""}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <div className="rounded-xl bg-slate-50 p-3">
            <div className="font-mono text-sm leading-7 min-w-[140px] md:min-w-[180px]">
              {topDown.map((b, i) => (<div key={i}>{lineText(b)}</div>))}
            </div>
          </div>
          {img && (
            <img
              src={img}
              alt={`${hex.no ? `#${hex.no} ` : ""}${hex.name}`}
              className="h-16 md:h-20 w-auto object-contain ml-auto md:ml-0"
              loading="lazy"
            />
          )}
        </div>
        <div className="text-xs text-slate-500 mt-2">卦辞：{hex.guaci}</div>
      </CardContent>
    </Card>
  );
}

function MetaPanel({ moving, kind, raw }: { moving: number[]; kind: "base" | "relate"; raw: string; }) {
  function copyText(t: string) { navigator.clipboard?.writeText(t); }
  return (
    <Card className="border rounded-2xl">
      <CardHeader className="pb-2"><CardTitle>动爻 & 说明</CardTitle></CardHeader>
      <CardContent className="space-y-3 text-sm">
        <div>动爻：{moving.length === 0 ? "无" : moving.join("、")}（自下而上）</div>
        <div className="text-slate-500">{kind === "base" ? "本卦示整体之势" : "之卦由动爻变位，示事态之变"}</div>
        <Button variant="outline" size="sm" onClick={() => copyText(raw)} className="rounded-2xl">
          <Copy className="w-4 h-4 mr-2" /> 复制原始数据
        </Button>
      </CardContent>
    </Card>
  );
}
