// src/dev/DevHexValidator.tsx
import React, { useEffect, useMemo, useState } from "react";

export type Locale = "zh" | "en";
type HexDatum = { no: number; name: string; guaci: string; upper: number; lower: number };
type LookupFn = (upper: number, lower: number) => HexDatum | undefined;

/** ========== 与 App.tsx 保持一致的八卦索引与工具（按你的要求） ========== */
/**
 * 索引与自下而上 bits：
 * 0 坤 000, 1 震 100, 2 坎 010, 3 艮 001, 4 巽 011, 5 离 101, 6 兑 110, 7 乾 111
 */
const TRIGRAMS = [
  { idx: 0, bits: [0,0,0] as [0,0,0], glyph:"☷", zh:{name:"坤",attr:"地"}, en:{name:"Kun",  attr:"Earth"} },
  { idx: 1, bits: [1,0,0] as [1,0,0], glyph:"☳", zh:{name:"震",attr:"雷"}, en:{name:"Zhen", attr:"Thunder"} },
  { idx: 2, bits: [0,1,0] as [0,1,0], glyph:"☵", zh:{name:"坎",attr:"水"}, en:{name:"Kan",  attr:"Water"} },
  { idx: 3, bits: [0,0,1] as [0,0,1], glyph:"☶", zh:{name:"艮",attr:"山"}, en:{name:"Gen",  attr:"Mountain"} },
  { idx: 4, bits: [0,1,1] as [0,1,1], glyph:"☴", zh:{name:"巽",attr:"风"}, en:{name:"Xun",  attr:"Wind"} },
  { idx: 5, bits: [1,0,1] as [1,0,1], glyph:"☲", zh:{name:"离",attr:"火"}, en:{name:"Li",   attr:"Fire"} },
  { idx: 6, bits: [1,1,0] as [1,1,0], glyph:"☱", zh:{name:"兑",attr:"泽"}, en:{name:"Dui",  attr:"Lake"} },
  { idx: 7, bits: [1,1,1] as [1,1,1], glyph:"☰", zh:{name:"乾",attr:"天"}, en:{name:"Qian", attr:"Heaven"} },
];
const INDEX_TO_META = TRIGRAMS.reduce<Record<number, (typeof TRIGRAMS)[number]>>((m,t)=>(m[t.idx]=t,m),{});
const BITS_TO_INDEX = new Map<string, number>(TRIGRAMS.map(t=>[t.bits.join(""),t.idx]));

function trigramIndexFromBits(bits: number[]): number {
  const key = `${bits[0]??0}${bits[1]??0}${bits[2]??0}`;
  return BITS_TO_INDEX.get(key) ?? 0;
}
function trigramName(bits: number[], locale: Locale){
  const meta = INDEX_TO_META[trigramIndexFromBits(bits)];
  return locale==="en" ? `${meta.en.attr} · ${meta.en.name}` : `${meta.zh.attr}${meta.zh.name}`;
}

// “自上而下”六爻（0=阴 1=阳），用于 UI/图片核对
function linesTopDownFromUpperLower(upperIdx: number, lowerIdx: number): number[] {
  const upTop  = [...INDEX_TO_META[upperIdx].bits].reverse();
  const lowTop = [...INDEX_TO_META[lowerIdx].bits].reverse();
  return [...upTop, ...lowTop];
}
function lineGlyphTop(v:number){ return v===1 ? "— — —" : "—   —"; }

function HexLine({ yang }: { yang: boolean }) {
    return (
      <div className="h-3 flex items-center">
        {yang ? (
          // 阳爻：整条实线
          <div className="h-[2px] w-full bg-slate-800 rounded" />
        ) : (
          // 阴爻：左右各半，中间留白
          <div className="flex w-full items-center">
            <div className="h-[2px] w-[44%] bg-slate-800 rounded" />
            <div className="w-[12%]" />
            <div className="h-[2px] w-[44%] bg-slate-800 rounded" />
          </div>
        )}
      </div>
    );
  }


/** ========== 图片加载（与 App.tsx 相同的扫描规则） ========== */
function useHexImages() {
  const modules = import.meta.glob("/src/assets/hex/*", { eager:true, import:"default" }) as Record<string, string>;
  return useMemo(()=>{
    const m = new Map<number,string>();
    Object.entries(modules).forEach(([path,url])=>{
      const m2 = path.match(/\/(\d{2})\.[a-zA-Z]+$/);
      if (m2) m.set(Number(m2[1]), url);
    });
    return m;
  },[]);
}

/** ========== 主组件：跑 64 卦自检并可视化 ========== */
export default function DevHexValidator({ locale="zh" as Locale }: { locale?: Locale }) {
  const [lookup, setLookup] = useState<LookupFn>(()=>()=>undefined);
  const [ready, setReady] = useState(false);
  const imgMap = useHexImages();

  useEffect(()=>{
    (async ()=>{
      const mod = locale==="zh" ? await import("@/data/hexagrams.zh") : await import("@/data/hexagrams.en");
      setLookup(()=> (mod as any).getHexByUpperLower as LookupFn);
      setReady(true);
    })();
  },[locale]);

  const rows = useMemo(()=>{
    if(!ready) return [];
    const list: {
        upper:number; lower:number; key:string;
        name?:string; no?:number;
        upperName:string; lowerName:string;
        linesTopDown:number[];          // ← 原来是 string
        linesGlyph:string;              // ← 新增：控制台好看点
        img:boolean; warn:string[];
      }[] = [];

    for(let up=0; up<8; up++){
      for(let low=0; low<8; low++){
        const hex = lookup(up, low);
        const warn:string[] = [];
        if(!hex){ warn.push("未收录"); }
        if(hex){
          if(hex.upper!==undefined && hex.upper!==up) warn.push(`upper字段(${hex.upper})≠索引(${up})`);
          if(hex.lower!==undefined && hex.lower!==low) warn.push(`lower字段(${hex.lower})≠索引(${low})`);
          if(!hex.no) warn.push("无 no");
          if(!hex.name) warn.push("无 name");
        }
        const lines = linesTopDownFromUpperLower(up, low);   // [0/1, ...]
        const linesGlyph = lines.map(lineGlyphTop).join("  "); // "— — —  —   — ..."
        const imgOk = !!(hex && imgMap.get(hex.no));
        if(hex && !imgOk) warn.push("缺图");

        list.push({
            upper: up, lower: low, key: `${up}-${low}`,
            name: hex?.name, no: hex?.no,
            upperName: trigramName(INDEX_TO_META[up].bits, locale),
            lowerName: trigramName(INDEX_TO_META[low].bits, locale),
            linesTopDown: lines,          // ← 数组
            linesGlyph,                   // ← 控制台字符串
            img: imgOk,
            warn,
          });
      }
    }
    return list;
  },[ready, lookup, locale, imgMap]);

  useEffect(()=>{
    if(!ready) return;
    // 控制台详细报告
    // 按文王序排序输出（若无 no 则靠后）
    const sorted = [...rows].sort((a,b)=> (a.no??999)-(b.no??999));
    console.group(`[DevHexValidator] ${locale.toUpperCase()} 64卦校验`);
    let bad = 0;
    for(const r of sorted){
      const tag = r.warn.length? "⚠️" : "✅";
      if(r.warn.length) bad++;
      console.log(`${tag} #${r.no??"??"}  (${r.upper}-${r.lower})  ${r.upperName}/${r.lowerName}  ${r.name??"(未收录)"}  ${r.img?"📷":"(无图)"}  ${r.linesGlyph}  ${r.warn.join(" | ")}`);
    }
    console.log(`— — — 完成：共64，异常 ${bad} 条`);
    console.groupEnd();
  },[rows, ready, locale]);

  if(!ready) return (
    <div className="rounded-xl border bg-white p-3 text-sm text-slate-500">Loading hex data…</div>
  );

  try {
    const guessOrder: number[] = Array(8).fill(-1);
    for (let i = 0; i < 8; i++) {
      // 取同上同下（i,i），看看数据返回的 hex.upper/hex.lower 是多少
      const h = lookup(i, i);
      if (h && typeof h.upper === "number") {
        guessOrder[i] = h.upper; // 数据侧眼中的“上卦索引”
      }
    }
    console.log("[推断] 数据模块的八卦索引（对应 App 索引 0..7）：", guessOrder);
    // 如果你看到的不是 [0,1,2,3,4,5,6,7]，那就说明数据模块用的是另一套排序。
  } catch {}

  // 页面简表（只展示必要字段；红色表示有警告）
  return (
    <div className="rounded-xl border bg-white p-3">
      <div className="text-sm mb-2 font-medium">Dev 校验 · {locale.toUpperCase()}</div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead className="text-slate-500">
            <tr>
              <th className="text-left p-2">上-下</th>
              <th className="text-left p-2">上/下卦</th>
              <th className="text-left p-2">#</th>
              <th className="text-left p-2">卦名</th>
              <th className="text-left p-2">自上而下六爻</th>
              <th className="text-left p-2">图</th>
              <th className="text-left p-2">警告</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r)=>(
              <tr key={r.key} className={r.warn.length? "text-red-600" : ""}>
                <td className="p-2">{r.upper}-{r.lower}</td>
                <td className="p-2">{r.upperName} / {r.lowerName}</td>
                <td className="p-2">{r.no ?? "—"}</td>
                <td className="p-2">{r.name ?? "—"}</td>
                <td className="p-2">
                    <div className="flex flex-col gap-1 py-1">
                     {r.linesTopDown.map((v, i) => (
                         <HexLine key={i} yang={v === 1} />
                     ))}
                     </div>
                </td>
                <td className="p-2">{r.img? "✅" : "—"}</td>
                <td className="p-2">{r.warn.join("；") || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="text-xs text-slate-500 mt-2">提示：红色行表示数据或图片缺失/不一致；详细信息见控制台。</div>
    </div>
  );
}
