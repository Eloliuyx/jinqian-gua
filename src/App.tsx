import React, { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { History, Sparkles, Trash2 } from "lucide-react";
import IntroCard from "@/components/IntroCard";
import ResultCard from "@/components/ResultCard";
import RitualOverlay from "@/components/RitualOverlay";

import type { UpperLowerBits, HexDatum, Locale, InfoBlock } from "@/lib/types";
import { trigramIndexFromBits, trigramName } from "@/lib/constants";
import {
  calcUpperLowerFromYaos,
  movingLinePositions,
  toRelatingYaosStrict,
  castLine,
  linesTopDownFromUpperLower,   // 如果用到了“自上而下”渲染
} from "@/lib/divination";

import { useHexData, useHexImages, useHistory } from "@/lib/hooks";
type Info = {
  base: { /* ... */ };
  relate: any;
  moving: number[];
  raw: { yaos: number[]; main: UpperLowerBits };
};

export default function App() {
  type Phase = "intro" | "result";
  const [phase, setPhase] = useState<Phase>("intro");
  const [question, setQuestion] = useState("");
  const [ritual, setRitual] = useState(true);
  const [casting, setCasting] = useState(false);
  const [yaos, setYaos] = useState<number[]>([]); // 自下而上 6/7/8/9
  const [locale, setLocale] = useState<Locale>("zh");

  const { lookup, loading } = useHexData(locale);
  const STORAGE_KEY = useMemo(() => `jinqian-gua-history-v6-${locale}`, [locale]);
  const history = useHistory(STORAGE_KEY);
  const { getHexImg } = useHexImages();

  const info = useMemo<InfoBlock | null>(() => {
    if (yaos.length !== 6) return null;

    const main = calcUpperLowerFromYaos(yaos);
    const moving = movingLinePositions(yaos);

    let relateBlock: InfoBlock["relate"] = null;
    const fallback: HexDatum = {
      no: 0,
      name: locale === "en" ? "(unlisted)" : "(未收录)",
      guaci: locale === "en" ? "(to be added)" : "(卦辞待补)",
      upper: -1, lower: -1,
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
      relate: relateBlock,
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

    // 写入历史
    const now = new Date().toISOString();
    const main = calcUpperLowerFromYaos(ys);
    history.push({ t: now, q: question, yaos: ys, upper: main.upperBits, lower: main.lowerBits });
  }
  function wait(ms: number) { return new Promise(res => setTimeout(res, ms)); }

  function handleResetAll() { setQuestion(""); setYaos([]); setPhase("intro"); }
  function handleRecast() { setYaos([]); handleCastAll(); }
  function loadFromHistory(item: { q?: string; yaos: number[] }) {
    setQuestion(item.q ?? "");
    setYaos(item.yaos);
    setPhase("result");
    setCasting(false);
  }


  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      <div className="mx-auto max-w-4xl grid gap-6">
        <header className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">金钱卦 · 六爻占</h1>

          <div className="flex items-center gap-4">
            <label className="text-sm text-slate-500 inline-flex items-center gap-2 select-none">
              <span>语言</span>
              <select
                className="text-sm border border-border bg-background rounded-xl px-2 py-1 outline-none focus:ring-2 focus:ring-ring"
                value={locale}
                onChange={(e) => setLocale(e.target.value as Locale)}
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
        ) : info ? (
          <ResultCard
            question={question}
            info={info}
            yaos={yaos}
            onRecast={handleRecast}
            onBack={handleResetAll}
            getHexImg={getHexImg}
            locale={locale}
          />
        ) : null}

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
                        <div className="mt-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="rounded-2xl"
                            onClick={() => loadFromHistory(h)}
                          >
                            {locale==="en" ? "Replay" : "回放"}
                          </Button>
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
