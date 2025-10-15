import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { HexDatum, Locale } from "@/lib/types";

export default function HexTextPanel({
  main, locale, moving,
}: { main: { hex: HexDatum }; locale: Locale; moving: number[] }) {
  const { hex } = main;
  return (
    <Card className="border rounded-2xl">
      <CardHeader className="pb-2"><CardTitle>{locale==="en"?"Texts":"卦辞与爻辞"}</CardTitle></CardHeader>
      <CardContent className="space-y-4 text-sm">
        <div className="text-slate-600 bg-white border rounded-xl p-3">
          <div className="text-slate-500 mb-1">{locale==="en"?"Judgment":"卦辞"}</div>
          <div>{hex.guaci}</div>
        </div>
        <YaociList yaoci={hex.yaoci} moving={moving} locale={locale} />
      </CardContent>
    </Card>
  );
}

/** yaoci: 自上而下（上、五、四、三、二、初），moving: 自下而上 1..6 */
function YaociList({ yaoci, moving, locale }: { yaoci?: string[]; moving: number[]; locale: Locale }) {
  const topDownMovingIdx = new Set(moving.map(pos => 6 - pos));
  const labelsZh = ["上爻","五爻","四爻","三爻","二爻","初爻"];
  const labelsEn = ["Top","5th","4th","3rd","2nd","1st"];

  return (
    <div className="text-sm text-slate-700 bg-white border rounded-xl p-3">
      <div className="text-slate-500 mb-1">{locale==="en"?"Line texts":"爻辞（自上而下）"}</div>
      <div className="space-y-1">
        {Array.from({ length: 6 }).map((_, i) => {
          const isMoving = topDownMovingIdx.has(i);
          const text = yaoci?.[i] ?? (locale==="en" ? "(to be added)" : "（待补）");
          return (
            <div key={i} className={`flex gap-2 items-start ${isMoving ? "bg-amber-50 rounded px-2 py-1" : ""}`}>
              <span className="shrink-0 w-10 text-slate-500">{locale==="en"?labelsEn[i]:labelsZh[i]}</span>
              <span className={`${isMoving ? "font-medium" : ""}`}>{text}</span>
              {isMoving && <span className="ml-auto text-xs text-amber-700">{locale==="en"?"(moving)":"（动）"}</span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
