// src/components/HexagramPanel.tsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Locale, HexBlock } from "@/lib/types";
import { linesTopDownFromUpperLower } from "@/lib/divination";

/** ===== 工具：格式化动爻一句话 ===== */
function formatMovingLabel(moving: number[], locale: Locale) {
  if (!moving || moving.length === 0) return locale === "en" ? "None" : "无";
  const namesZh = ["初", "二", "三", "四", "五", "上"];
  const namesEn = ["1st", "2nd", "3rd", "4th", "5th", "Top"];
  const sorted = [...moving].sort((a, b) => a - b);
  if (locale === "en") return sorted.map((pos) => namesEn[pos - 1]).join(", ");
  return sorted.map((pos) => `${namesZh[pos - 1]}爻`).join("、");
}

/** ===== 工具：基于 bit 渲染（0=阴，1=阳），仅显示少阴/少阳文本 ===== */
function lineTextFromBit(bit: number): string {
  return bit === 1 ? "———    少阳" : "—  —   少阴";
}

/** ===== 可选：基于原始 6/7/8/9 渲染，包含动静标识（若传入 yaos）===== */
function lineTextFromRaw(v: number): string {
  switch (v) {
    case 6: return "× 老阴（动）";
    case 7: return "—— 少阳";
    case 8: return "—  — 少阴";
    case 9: return "○ 老阳（动）";
    default: return "";
  }
}

type Props = {
  /** 标题可自定义，默认按 locale 显示“本卦 / Primary” */
  title?: string;
  block: HexBlock;
  /** 从 no -> 图片 URL 的函数（useHexImages 提供） */
  getHexImg: (no?: number) => string | undefined;
  /** 动爻位置（自下而上 1..6） */
  moving: number[];
  locale: Locale;
  /** 可选：原始六爻（自下而上 6/7/8/9）。传了就按原始渲染，没传用 bit 渲染 */
  yaos?: number[];
};

export default function HexagramPanel({
  title,
  block,
  getHexImg,
  moving,
  locale,
  yaos,
}: Props) {
  const { upperIdx, lowerIdx, upperName, lowerName, hex } = block;
  const img = getHexImg(hex.no);

  // “自上而下”六爻（fallback 用）
  const topDownBits = linesTopDownFromUpperLower(upperIdx, lowerIdx);

  // 动爻一句话（如：初、五）
  const movingLabel = formatMovingLabel(moving, locale);

  // 如果传入 yaos（自下而上 6/7/8/9），这里转换成“自上而下”顺序显示
  const yaosTopDown = yaos ? [...yaos].reverse() : undefined;

  return (
    <Card className="border rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{title ?? (locale === "en" ? "Primary" : "本卦")}</span>
          <span className="text-sm font-normal text-slate-500">
            {locale === "en" ? "Hex: " : "卦："}
            {hex.name}
            {hex.no ? (locale === "en" ? ` (#${hex.no})` : `（#${hex.no}）`) : ""}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 items-start">
          {/* 上下卦名称 */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-500">{locale === "en" ? "Upper" : "上卦"}</div>
              <div className="text-lg">{upperName}</div>
            </div>
            <div>
              <div className="text-sm text-slate-500">{locale === "en" ? "Lower" : "下卦"}</div>
              <div className="text-lg">{lowerName}</div>
            </div>
          </div>

          {/* 动爻一句话 */}
          <div className="text-sm rounded-xl bg-white border p-3">
            <span className="text-slate-500">{locale === "en" ? "Moving lines: " : "动爻："}</span>
            {movingLabel}
          </div>

          {/* 爻象（左） + 卦图（右） */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="rounded-xl bg-slate-50 p-3">
              <div className="font-mono text-sm leading-7 min-w-[140px] md:min-w-[180px]">
                {/* 优先按原始 6/7/8/9 渲染；否则按 bit 渲染 */}
                {yaosTopDown
                  ? yaosTopDown.map((v, i) => <div key={i}>{lineTextFromRaw(v)}</div>)
                  : topDownBits.map((b, i) => <div key={i}>{lineTextFromBit(b)}</div>)}
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
        </div>
      </CardContent>
    </Card>
  );
}
