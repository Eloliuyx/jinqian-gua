// src/lib/types.ts
export type Locale = "zh" | "en";

export type TrigramMeta = {
  idx: number;
  bits: [0 | 1, 0 | 1, 0 | 1];   // 自下而上
  glyph: string;
  zh: { name: string; attr: string };
  en: { name: string; attr: string };
};

export type HexDatum = {
  no: number;       // 文王序 1..64
  name: string;     // 卦名（或英文名）
  guaci: string;    // 卦辞
  upper: number;    // 上卦索引 0..7
  lower: number;    // 下卦索引 0..7
  yaoci?: string[]; // 可选：六爻爻辞，自上而下 [上、五、四、三、二、初]
  guaciPlain?: string;       // 新增：卦辞白话
  yaociPlain?: string[];     // 新增：自上而下 6 条白话
};

/** 由 6 爻（自下而上）计算出来的上下卦信息 */
export type UpperLowerBits = {
  bin: number[];       // 6 位二进制，自下而上
  lowerBits: number[]; // 下三爻，自下而上
  upperBits: number[]; // 上三爻，自下而上
  lowerIdx: number;    // 0..7
  upperIdx: number;    // 0..7
};

// 一个“本卦/之卦”卡片需要的最小数据
export type HexBlock = {
  upperIdx: number;
  lowerIdx: number;
  upperName: string;
  lowerName: string;
  hex: HexDatum;
};

// App 里 useMemo 产出的整体信息块
export type InfoBlock = {
  base: HexBlock;                     // 本卦
  relate: HexBlock | null;            // 之卦（可能为 null）
  moving: number[];                   // 动爻（自下而上 1..6）
  raw: { yaos: number[]; main: UpperLowerBits }; // 原始爻与计算细节
};
