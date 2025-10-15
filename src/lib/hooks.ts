// src/lib/hooks.ts
import { useCallback, useEffect, useMemo, useState } from "react";
import type { HexDatum, Locale } from "./types";

/** 卦图加载（Vite import.meta.glob） */
export function useHexImages() {
  const modules = import.meta.glob("/src/assets/hex/*", {
    eager: true,
    import: "default",
  }) as Record<string, string>;

  const map = useMemo(() => {
    const m = new Map<number, string>();
    Object.entries(modules).forEach(([path, url]) => {
      const m2 = path.match(/\/(\d{2})\.[a-zA-Z]+$/); // 01..64.*
      if (m2) m.set(Number(m2[1]), url);
    });
    return m;
  }, []);

  const getHexImg = useCallback((no?: number) => (no ? map.get(no) : undefined), [map]);
  return { getHexImg };
}

/** 动态载入中/英 卦数据 */
type LookupFn = (upper: number, lower: number) => HexDatum | undefined;

export function useHexData(locale: Locale) {
  const [lookup, setLookup] = useState<LookupFn>(() => () => undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    (async () => {
      const mod = locale === "zh"
        ? await import("@/data/hexagrams.zh")
        : await import("@/data/hexagrams.en");
      if (!alive) return;
      setLookup(() => (mod as any).getHexByUpperLower as LookupFn);
      setLoading(false);
    })();
    return () => { alive = false; };
  }, [locale]);

  return { lookup, loading };
}

/** 历史（多标签同步） */
export function useHistory(storageKey: string) {
  const [items, setItems] = useState<any[]>([]);

  const read = useCallback(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setItems(raw ? JSON.parse(raw) : []);
    } catch { setItems([]); }
  }, [storageKey]);

  useEffect(() => { read(); }, [read]);

  useEffect(() => {
    function onStorage(e: StorageEvent) { if (e.key === storageKey) read(); }
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [storageKey, read]);

  const push = useCallback((item: any) => {
    setItems(prev => {
      const arr = [item, ...prev].slice(0, 100);
      localStorage.setItem(storageKey, JSON.stringify(arr));
      return arr;
    });
  }, [storageKey]);

  const clear = useCallback(() => {
    localStorage.removeItem(storageKey);
    setItems([]);
  }, [storageKey]);

  return { items, push, clear };
}
