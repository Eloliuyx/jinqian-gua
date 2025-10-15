// src/lib/divination.ts
import { INDEX_TO_META, trigramIndexFromBits } from "./constants";
import type { UpperLowerBits } from "./types";

/** 金钱卦：2/3 → 6/7/8/9 */
export function castCoin(): 2 | 3 { return Math.random() < 0.5 ? 2 : 3; }
export function castLine(): 6 | 7 | 8 | 9 {
  const sum = castCoin() + castCoin() + castCoin();
  if (sum === 6) return 6;
  if (sum === 7) return 7;
  if (sum === 8) return 8;
  return 9;
}

/** 自下而上 6/7/8/9 → 二进制（阳=1 阴=0） */
export function toBinaryFromYaos(yaos: number[]): number[] {
  return yaos.map(v => (v === 7 || v === 9 ? 1 : 0));
}

/** 之卦：只翻转 6/9 */
export function toRelatingYaosStrict(yaos: number[]) {
  return yaos.map(v => (v === 6 ? 7 : v === 9 ? 8 : v));
}

/** 动爻位置（自下而上 1..6） */
export function movingLinePositions(yaos: number[]) {
  const res: number[] = [];
  yaos.forEach((v, i) => { if (v === 6 || v === 9) res.push(i + 1); });
  return res;
}

/** 由 6 爻（自下而上）计算上下卦信息 */
export function calcUpperLowerFromYaos(yaos: number[]): UpperLowerBits {
  const bin = toBinaryFromYaos(yaos);
  const lowerBits = bin.slice(0, 3);
  const upperBits = bin.slice(3, 6);
  return {
    bin,
    lowerBits, upperBits,
    lowerIdx: trigramIndexFromBits(lowerBits),
    upperIdx: trigramIndexFromBits(upperBits),
  };
}

/** “自上而下”六爻（0=阴，1=阳），用于渲染 */
export function linesTopDownFromUpperLower(upperIdx: number, lowerIdx: number): number[] {
  const upTop  = [...INDEX_TO_META[upperIdx].bits].reverse();
  const lowTop = [...INDEX_TO_META[lowerIdx].bits].reverse();
  return [...upTop, ...lowTop];
}
