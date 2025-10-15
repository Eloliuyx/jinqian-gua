import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCcw, Shuffle } from "lucide-react";
import type { InfoBlock, Locale } from "@/lib/types";
import HexagramPanel from "./HexagramPanel";
import HexTextPanel from "./HexTextPanel";
import AssistPanel from "./AssistPanel";

export default function ResultCard({
  question, info, yaos, onRecast, onBack, getHexImg, locale
}: {
  question: string;
  info: InfoBlock;
  yaos: number[];
  onRecast: () => void;
  onBack: () => void;
  getHexImg: (no?: number) => string | undefined;
  locale: Locale;
}) {
  return (
    <Card className="shadow-lg rounded-2xl">
      <CardHeader className="pb-2"><CardTitle>结果</CardTitle></CardHeader>
      <CardContent>
        <div className="space-y-4">
          {question && (
            <div className="p-3 rounded-xl bg-white border text-sm">
              <span className="text-slate-500">{locale==="en"?"Question: ":"所问："}</span>{question}
            </div>
          )}

          <div className="grid md:grid-cols-2 gap-4 items-start">
            {/* 左：本卦图示 */}
            <HexagramPanel
              title={locale==="en"?"Primary":"本卦"}
              block={info.base}
              getHexImg={getHexImg}
              moving={info.moving}
              locale={locale}
              yaos={yaos}
            />
            {/* 右：卦辞与爻辞 */}
            <HexTextPanel main={info.base} locale={locale} />

            {/* 底部：提示与之卦（跨两列） */}
            <div className="md:col-span-2">
              <AssistPanel
                locale={locale}
                moving={info.moving}
                main={info.base}
                relate={info.relate}
                getHexImg={getHexImg}
              />
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
