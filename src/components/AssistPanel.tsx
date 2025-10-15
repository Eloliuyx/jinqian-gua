import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { HexDatum, Locale } from "@/lib/types";

export default function AssistPanel({
  locale, moving, main, relate, getHexImg,
}: {
  locale: Locale;
  moving: number[];
  main: { hex: HexDatum; upperIdx: number; lowerIdx: number; upperName: string; lowerName: string; };
  relate: null | { hex: HexDatum; upperIdx: number; lowerIdx: number; upperName: string; lowerName: string; };
  getHexImg: (no?: number) => string | undefined;
}) {
  const n = moving.length;

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

  const shouldRepeatYaoci = n === 1 || n === 2 || n === 5;
  const topDownIdxs = moving.slice().sort((a,b)=>a-b).map(pos => 6 - pos);

  return (
    <Card className="border rounded-2xl">
      <CardHeader className="pb-2"><CardTitle>{locale==="en"?"Guidance & Relating":"提示与之卦"}</CardTitle></CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="rounded-xl bg-white border p-3">{hint}</div>

        {shouldRepeatYaoci && (
          <div className="rounded-xl bg-white border p-3">
            <div className="text-slate-500 mb-1">{locale==="en" ? "Moving line(s)" : "动爻爻辞复述"}</div>
            <div className="space-y-2">
              {topDownIdxs.map((i, k) => {
                const text = main.hex.yaoci?.[i] ?? (locale==="en" ? "(to be added)" : "（待补）");
                const labelZh = ["上爻","五爻","四爻","三爻","二爻","初爻"][i];
                const labelEn = ["Top","5th","4th","3rd","2nd","1st"][i];
                return (
                  <div key={k} className="rounded bg-amber-50 border border-amber-200 px-2 py-1">
                    <span className="text-slate-500 mr-2">{locale==="en"?labelEn:labelZh}</span>
                    <span className="font-medium">{text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {(n >= 4) && relate && (
          <HexagramMini
            title={locale==="en"?"Relating":"之卦"}
            block={relate}
            getHexImg={getHexImg}
          />
        )}
      </CardContent>
    </Card>
  );
}

/** 小卡片（之卦预览） */
function HexagramMini({
  title, block, getHexImg
}: {
  title: string;
  block: { upperIdx: number; lowerIdx: number; upperName: string; lowerName: string; hex: HexDatum };
  getHexImg: (no?: number) => string | undefined;
}) {
  const { upperIdx, lowerIdx, hex } = block;
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
