import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

export default function IntroCard({
  question, onChange, onCast,
}: { question: string; onChange: (v: string) => void; onCast: () => void }) {
  return (
    <Card className="shadow-lg rounded-2xl">
      <CardHeader className="pb-2"><CardTitle>起卦 · 说明与输入</CardTitle></CardHeader>
      <CardContent className="space-y-4">
        <div className="prose max-w-none text-sm text-slate-600">
          <p><strong>金钱卦</strong>：三枚钱币，一次掷三枚，六次自下而上记爻。6=老阴(×)，7=少阳(——)，8=少阴(— —)，9=老阳(○)；6/9 为动爻，可推演之卦。</p>
          <p>先静心，清晰念出所问，再点击「起卦」。</p>
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-500">你想问/所求：</label>
          <textarea
            className="w-full min-h-[88px] rounded-xl border border-border bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring"
            placeholder="例如：我是否应该在今年冬天换工作？"
            value={question}
            onChange={(e) => onChange(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3">
          <Button onClick={onCast} className="rounded-2xl"><Shuffle className="w-4 h-4 mr-2" /> 起卦</Button>
          <div className="text-xs text-slate-500">点击后自动掷六次并显示结果。</div>
        </div>
      </CardContent>
    </Card>
  );
}
