// src/components/RitualOverlay.tsx
export default function RitualOverlay() {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm grid place-items-center z-50">
      <div className="bg-white rounded-2xl p-6 shadow-xl">
        <div className="text-center text-sm text-slate-600">摇卦中…</div>
        <div className="mt-4 flex items-center justify-center gap-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-12 h-12 rounded-full border grid place-items-center animate-[spin_0.8s_linear_infinite]"
            >
              🪙
            </div>
          ))}
        </div>
        <div className="text-center text-xs text-slate-400 mt-3">三枚钱币翻转后落桌</div>
      </div>
    </div>
  );
}
