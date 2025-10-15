// src/lib/constants.ts
import type { Locale, TrigramMeta } from "./types";

export const TRIGRAMS: TrigramMeta[] = [
  { idx: 0, bits: [0,0,0], glyph:"☷", zh:{name:"坤",attr:"地"}, en:{name:"Kun",  attr:"Earth"} },
  { idx: 1, bits: [1,0,0], glyph:"☳", zh:{name:"震",attr:"雷"}, en:{name:"Zhen", attr:"Thunder"} },
  { idx: 2, bits: [0,1,0], glyph:"☵", zh:{name:"坎",attr:"水"}, en:{name:"Kan",  attr:"Water"} },
  { idx: 3, bits: [0,0,1], glyph:"☶", zh:{name:"艮",attr:"山"}, en:{name:"Gen",  attr:"Mountain"} },
  { idx: 4, bits: [0,1,1], glyph:"☴", zh:{name:"巽",attr:"风"}, en:{name:"Xun",  attr:"Wind"} },
  { idx: 5, bits: [1,0,1], glyph:"☲", zh:{name:"离",attr:"火"}, en:{name:"Li",   attr:"Fire"} },
  { idx: 6, bits: [1,1,0], glyph:"☱", zh:{name:"兑",attr:"泽"}, en:{name:"Dui",  attr:"Lake"} },
  { idx: 7, bits: [1,1,1], glyph:"☰", zh:{name:"乾",attr:"天"}, en:{name:"Qian", attr:"Heaven"} },
];

export const BITS_TO_INDEX = new Map<string, number>(TRIGRAMS.map(t => [t.bits.join(""), t.idx]));

export const INDEX_TO_META = TRIGRAMS.reduce<Record<number, TrigramMeta>>(
  (m, t) => { m[t.idx] = t; return m; }, {}
);

export function trigramIndexFromBits(bits: number[]): number {
  const key = `${bits[0] ?? 0}${bits[1] ?? 0}${bits[2] ?? 0}`;
  const idx = BITS_TO_INDEX.get(key);
  return idx ?? 0;
}

export function trigramName(bits: number[], locale: Locale): string {
  const idx = trigramIndexFromBits(bits);
  const meta = INDEX_TO_META[idx];
  return locale === "en" ? `${meta.en.attr} · ${meta.en.name}` : `${meta.zh.attr}${meta.zh.name}`;
}
