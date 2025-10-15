// src/components/AssistPanel.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { HexDatum, Locale } from "@/lib/types";

/** 小卡片（之卦预览） */
function HexagramMini({
  title, block, getHexImg
}: {
  title: string;
  block: { upperIdx: number; lowerIdx: number; upperName: string; lowerName: string; hex: HexDatum };
  getHexImg: (no?: number) => string | undefined;
}) {
  const { hex } = block;
  const img = getHexImg(hex.no);
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
        {img && (
          <img
            src={img}
            alt={`${hex.no ? `#${hex.no} ` : ""}${hex.name}`}
            className="h-16 md:h-20 w-auto object-contain"
            loading="lazy"
          />
        )}
        <div className="text-xs text-slate-500 mt-2">卦辞：{hex.guaci}</div>
      </CardContent>
    </Card>
  );
}

export default function AssistPanel({
  locale, moving, main, relate, getHexImg,
}: {
  locale: Locale;
  moving: number[]; // 自下而上 1..6
  main: { hex: HexDatum; upperIdx: number; lowerIdx: number; upperName: string; lowerName: string; };
  relate: null | { hex: HexDatum; upperIdx: number; lowerIdx: number; upperName: string; lowerName: string; };
  getHexImg: (no?: number) => string | undefined;
}) {
  const n = moving.length;

  // —— 提示：保持原有文案逻辑 ——
  const hint = (() => {
    if (locale === "en") {
      switch (n) {
        case 0: return "Read the Judgment of the primary hexagram only.";
        case 1: return "Focus on the moving line’s text; use the Judgment as context.";
        case 2: return "Read both moving lines’ texts and consult the Judgment.";
        case 3: return "Many changes; turning point—take the Judgment as the main guide.";
        case 4: return "Tending to transformation—read the Relating hexagram’s Judgment.";
        case 5: return "Almost full change—moving lines first; also consult the Relating Judgment.";
        case 6: return "Complete transformation—take the Relating Judgment as main (Qian–Kun reversal).";
        default: return "";
      }
    } else {
      switch (n) {
        case 0: return "只需看本卦卦辞。";
        case 1: return "以动爻爻辞为主，参本卦卦辞。";
        case 2: return "取两动爻爻辞，并参本卦卦辞。";
        case 3: return "动多而乱，变机将成；取本卦卦辞为主。";
        case 4: return "趋变；以之卦卦辞为主。";
        case 5: return "几成全变；动爻爻辞为主，并参之卦卦辞。";
        case 6: return "全变卦成新局；取之卦卦辞为主（乾坤反复之象）。";
        default: return "";
      }
    }
  })();

  // —— 工具与标签 ——
  const topDownIdxs = moving.slice().sort((a,b)=>a-b).map(pos => 6 - pos); // 自上而下索引
  const labelsZh = ["上爻","五爻","四爻","三爻","二爻","初爻"];
  const labelsEn = ["Top","5th","4th","3rd","2nd","1st"];
  const t = (zh: string, en: string) => (locale === "en" ? en : zh);

  const getGuaciPlain = (hex: HexDatum) =>
    (hex.guaciPlain?.trim() ? hex.guaciPlain : (locale==="en" ? "(to be added)" : "（待补白话）"));

  const getLinePlain = (hex: HexDatum, i: number) =>
    (hex.yaociPlain?.[i]?.trim() ? hex.yaociPlain![i]! : (locale==="en" ? "(to be added)" : "（待补白话）"));

  const mkBlock = (label: string, content: string, accent = false) => (
    <div key={label+content} className={`rounded-xl border px-3 py-2 ${accent ? "bg-amber-50 border-amber-200" : "bg-white"}`}>
      <div className="text-xs text-slate-500 mb-1">{label}</div>
      <div className="text-sm">{content}</div>
    </div>
  );

  // —— 新增：补充信息（白话）内容构建 ——
  function buildSupplementBlocks() {
    const blocks: React.ReactNode[] = [];
    const mainLabel   = t("本卦卦辞 · 白话", "Primary Judgment · plain");
    const relateLabel = t("之卦卦辞 · 白话", "Relating Judgment · plain");

    switch (n) {
      case 0: {
        blocks.push(mkBlock(mainLabel, getGuaciPlain(main.hex)));
        break;
      }
      case 1: {
        const i = topDownIdxs[0];
        const label = t(`${labelsZh[i]} · 白话`, `${labelsEn[i]} · plain`);
        blocks.push(mkBlock(label, getLinePlain(main.hex, i), true));
        blocks.push(mkBlock(mainLabel, getGuaciPlain(main.hex)));
        break;
      }
      case 2: {
        // 两条动爻白话 + 本卦卦辞白话（你新的要求）
        topDownIdxs.forEach((i) => {
          const label = t(`${labelsZh[i]} · 白话`, `${labelsEn[i]} · plain`);
          blocks.push(mkBlock(label, getLinePlain(main.hex, i), true));
        });
        blocks.push(mkBlock(mainLabel, getGuaciPlain(main.hex)));
        break;
      }
      case 3: {
        blocks.push(mkBlock(mainLabel, getGuaciPlain(main.hex)));
        break;
      }
      case 4: {
        if (relate) {
          const title = `${t("之卦","Relating")}：${relate.hex.name}${relate.hex.no ? `（#${relate.hex.no}）` : ""}`;
          blocks.push(mkBlock(title, relate.hex.guaci));
          blocks.push(mkBlock(relateLabel, getGuaciPlain(relate.hex)));
        }
        break;
      }
      case 5: {
        if (relate) {
          const title = `${t("之卦","Relating")}：${relate.hex.name}${relate.hex.no ? `（#${relate.hex.no}）` : ""}`;
          blocks.push(mkBlock(title, relate.hex.guaci));
          blocks.push(mkBlock(relateLabel, getGuaciPlain(relate.hex)));
        }
        topDownIdxs.forEach((i) => {
          const label = t(`${labelsZh[i]} · 白话`, `${labelsEn[i]} · plain`);
          blocks.push(mkBlock(label, getLinePlain(main.hex, i), true));
        });
        break;
      }
      case 6: {
        if (relate) {
          const note  = t("（乾坤反复之象）", "(Qian–Kun reversal)");
          const title = `${t("之卦","Relating")}：${relate.hex.name}${relate.hex.no ? `（#${relate.hex.no}）` : ""} ${note}`;
          blocks.push(mkBlock(title, relate.hex.guaci));
          blocks.push(mkBlock(relateLabel, getGuaciPlain(relate.hex)));
        }
        break;
      }
    }
    return blocks;
  }

  const supplementBlocks = buildSupplementBlocks();

  return (
    <Card className="border rounded-2xl">
      <CardHeader className="pb-2"><CardTitle>{locale==="en"?"Guidance & Relating":"提示与之卦"}</CardTitle></CardHeader>
      <CardContent className="space-y-4 text-sm">
        {/* 提示（保留） */}
        <div className="rounded-xl bg-white border p-3">{hint}</div>

        {/* N>=4 时显示之卦预览（保留） */}
        {(n >= 4) && relate && (
          <HexagramMini
            title={locale==="en"?"Relating":"之卦"}
            block={relate}
            getHexImg={getHexImg}
          />
        )}

        {/* 新增：补充信息（白话） */}
        <div className="rounded-2xl border p-3 space-y-2">
          <div className="text-slate-500 mb-1">{locale==="en" ? "Supplement (plain language)" : "补充信息（白话）"}</div>
          <div className="space-y-2">{supplementBlocks}</div>
        </div>
      </CardContent>
    </Card>
  );
}
