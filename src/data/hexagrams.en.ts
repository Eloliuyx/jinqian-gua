// Keep the same trigram indexing as your app:
// 0=Kun,1=Zhen,2=Kan,3=Gen,4=Xun,5=Li,6=Dui,7=Qian

export type HexDatum = {
    no: number;        // King Wen sequence 1..64
    name: string;      // Hexagram name in EN (or keep Chinese if you prefer)
    guaci: string;     // Judgment text (short)
    upper: number;     // 0..7
    lower: number;     // 0..7
  };

  const LIST: HexDatum[] = [
    { no: 1,  name: "Qian (Creative)",         guaci: "Initiating. Supreme success; favorable to be steadfast.", upper: 7, lower: 7 },
    { no: 2,  name: "Kun (Receptive)",         guaci: "Receptive. Supreme success; favorable to the mare’s perseverance.", upper: 0, lower: 0 },
    { no: 3,  name: "Zhun (Sprouting)",        guaci: "Sprouting. Prosperous and correct; do not advance lightly; favorable to establish feudal lords.", upper: 2, lower: 1 },
    { no: 4,  name: "Meng (Youthful Folly)",   guaci: "Youth seeks instruction; first divination tells; repeated importunity is improper; favorable to be correct.", upper: 3, lower: 2 },
    { no: 5,  name: "Xu (Waiting)",            guaci: "Waiting with sincerity brings brilliance; favorable to cross the great river.", upper: 2, lower: 7 },
    { no: 6,  name: "Song (Conflict)",         guaci: "Sincere yet blocked; cautious in the middle brings good end; not favorable to go to battle.", upper: 7, lower: 2 },
    { no: 7,  name: "Shi (The Army)",          guaci: "The army. Perseverance brings good fortune; a great leader receives mandate.", upper: 0, lower: 2 },
    { no: 8,  name: "Bi (Holding Together)",   guaci: "Union. Good fortune; inquire again—constancy brings auspiciousness.", upper: 2, lower: 0 },
    { no: 9,  name: "Xiaoxu (Small Taming)",   guaci: "Small accumulation of restraint; dense clouds, no rain from the western region.", upper: 4, lower: 7 },
    { no:10,  name: "Lu (Treading)",           guaci: "Treading the tiger’s tail; it does not bite; success through correctness.", upper: 7, lower: 6 },
    { no:11,  name: "Tai (Peace)",             guaci: "Peace. Small goes, great comes; good fortune.", upper: 0, lower: 7 },
    { no:12,  name: "Pi (Stagnation)",         guaci: "Standstill. Great goes, small comes; unfavorable to the steadfast of the noble.", upper: 7, lower: 0 },
    { no:13,  name: "Tongren (Fellowship)",    guaci: "Fellowship in the open. Success; favorable to cross the great river.", upper: 7, lower: 5 },
    { no:14,  name: "Dayou (Great Possession)",guaci: "Great possession. Supreme success.", upper: 5, lower: 7 },
    { no:15,  name: "Qian (Modesty)",          guaci: "Modesty; the noble carries things to completion. Good fortune.", upper: 0, lower: 3 },
    { no:16,  name: "Yu (Enthusiasm)",         guaci: "Delightful movement; advantageous to establish leaders and mobilize armies.", upper: 1, lower: 0 },
    { no:17,  name: "Sui (Following)",         guaci: "Following; perseverance brings good fortune; no blame.", upper: 6, lower: 1 },
    { no:18,  name: "Gu (Work on the Decayed)",guaci: "Decay. Greatly fruitful to cross the great river; before beginning, three days; after, three days.", upper: 3, lower: 4 },
    { no:19,  name: "Lin (Approach)",          guaci: "Approach. Prosperous and smooth; favorable to be steadfast; at the eighth month there is misfortune.", upper: 0, lower: 6 },
    { no:20,  name: "Guan (Contemplation)",    guaci: "Viewing. The noble examines himself; offerings at the king’s temple.", upper: 4, lower: 0 },
    { no:21,  name: "Shike (Biting Through)",  guaci: "Biting through. Favorable to administer justice.", upper: 5, lower: 1 },
    { no:22,  name: "Bi (Grace)",              guaci: "Adornment. Small matters favorable; great matters unfavorable.", upper: 3, lower: 5 },
    { no:23,  name: "Bo (Splitting Apart)",    guaci: "Peeling away. The bed is split; misfortune; perseverance is unfavorable.", upper: 3, lower: 0 },
    { no:24,  name: "Fu (Return)",             guaci: "Return. Success. Going and coming without harm; friends come; seven days return.", upper: 0, lower: 1 },
    { no:25,  name: "Wuwang (Innocence)",      guaci: "Innocence. Great success; favorable to be steadfast; not to act wrongly.", upper: 7, lower: 1 },
    { no:26,  name: "Daxu (Great Taming)",     guaci: "Great accumulation and restraint. Not eating at home—good fortune; favorable to cross the great river.", upper: 3, lower: 7 },
    { no:27,  name: "Yi (Nourishment)",        guaci: "Nourishing. Watching the jaws; being correct brings good fortune.", upper: 3, lower: 1 },
    { no:28,  name: "Daguo (Great Exceeding)", guaci: "Excess on the great beam. Favorable to have somewhere to go; success.", upper: 6, lower: 4 },
    { no:29,  name: "Kan (Gorge)",             guaci: "The repeated pit. Sincerity in the heart brings success; action is honored.", upper: 2, lower: 2 },
    { no:30,  name: "Li (Radiance)",           guaci: "Radiance. Favorable to be correct; raising a cow—good fortune.", upper: 5, lower: 5 },
    { no:31,  name: "Xian (Influence)",        guaci: "Mutual influence. Taking a spouse—good fortune; perseverance brings success.", upper: 6, lower: 3 },
    { no:32,  name: "Heng (Duration)",         guaci: "Constancy. No blame; advantageous to be steadfast.", upper: 1, lower: 4 },
    { no:33,  name: "Dun (Retreat)",           guaci: "Retreat. Success in small things; perseverance brings good fortune.", upper: 7, lower: 3 },
    { no:34,  name: "Dazhuang (Great Power)",  guaci: "Great vigor. Advantageous to be correct.", upper: 1, lower: 7 },
    { no:35,  name: "Jin (Progress)",          guaci: "Advancing. The noble presents gifts to the sovereign; success.", upper: 5, lower: 0 },
    { no:36,  name: "Mingyi (Darkening Light)",guaci: "The light is wounded. Advantageous to be correct in adversity.", upper: 0, lower: 5 },
    { no:37,  name: "Jiaren (Family)",         guaci: "The family. The woman’s correct place brings good fortune.", upper: 4, lower: 5 },
    { no:38,  name: "Kui (Opposition)",        guaci: "Divergence. Small matters favorable; great matters unfavorable.", upper: 5, lower: 6 },
    { no:39,  name: "Jian (Hardship)",         guaci: "Obstruction. West and south—favorable; east and north—unfavorable; see the great person.", upper: 2, lower: 3 },
    { no:40,  name: "Jie (Release)",           guaci: "Release. Success; after rain comes clarity; favorable to cross the great river.", upper: 1, lower: 2 },
    { no:41,  name: "Sun (Decrease)",          guaci: "Decrease. Sincere and correct—great good fortune; no blame.", upper: 3, lower: 6 },
    { no:42,  name: "Yi (Increase)",           guaci: "Increase. Favorable to have where to go; favorable to see the great person.", upper: 4, lower: 1 },
    { no:43,  name: "Guai (Breakthrough)",     guaci: "Proclamation in the king’s court; danger in the announcement; not favorable to take up arms; favorable to have a place to go.", upper: 6, lower: 7 },
    { no:44,  name: "Gou (Encountering)",      guaci: "Encountering. The woman is strong; do not take such a woman in marriage.", upper: 7, lower: 4 },
    { no:45,  name: "Cui (Gathering)",         guaci: "Gathering together. The king approaches the temple; success; perseverance brings good fortune.", upper: 6, lower: 0 },
    { no:46,  name: "Sheng (Ascending)",       guaci: "Ascending. Great person sees the sovereign; do not worry; success.", upper: 0, lower: 4 },
    { no:47,  name: "Kun (Oppression)",        guaci: "Oppression/exhaustion. Perseverance brings good fortune; speaking has hardship.", upper: 6, lower: 2 },
    { no:48,  name: "Jing (Well)",             guaci: "The well. May be changed, never exhausted; coming and going draws from it.", upper: 2, lower: 4 },
    { no:49,  name: "Ge (Revolution)",         guaci: "Revolution. Day of Geng: great success; perseverance is favorable; regret disappears.", upper: 6, lower: 5 },
    { no:50,  name: "Ding (Cauldron)",         guaci: "The cauldron. Great auspiciousness.", upper: 5, lower: 4 },
    { no:51,  name: "Zhen (Arousing)",         guaci: "Shock brings fright and laughter; shock reaches a hundred li; do not lose the sacrificial spoon and ladle.", upper: 1, lower: 1 },
    { no:52,  name: "Gen (Keeping Still)",     guaci: "Keeping still at the back; not grasping the body. Walking in the courtyard, not seeing the people. No blame.", upper: 3, lower: 3 },
    { no:53,  name: "Jian (Gradual)",          guaci: "Gradual progress. The maiden is given in marriage—good fortune.", upper: 4, lower: 3 },
    { no:54,  name: "Guimei (Marrying Maiden)",guaci: "The marrying maiden. Undertakings are unfavorable.", upper: 1, lower: 6 },
    { no:55,  name: "Feng (Abundance)",        guaci: "Abundance. Success; the king reaches it; do not be sad—like the sun at midday.", upper: 1, lower: 5 },
    { no:56,  name: "Lü (Traveller)",          guaci: "The wanderer. Small success; perseverance brings good fortune.", upper: 5, lower: 3 },
    { no:57,  name: "Xun (Gentle Wind)",       guaci: "Subtle penetration. Small success; favorable to go somewhere; favorable to see the great person.", upper: 4, lower: 4 },
    { no:58,  name: "Dui (Joyous Lake)",       guaci: "Joy. Prosperous; favorable to be correct.", upper: 6, lower: 6 },
    { no:59,  name: "Huan (Dispersion)",       guaci: "Dispersion. The king approaches the temple; favorable to cross the great river; perseverance brings good fortune.", upper: 4, lower: 2 },
    { no:60,  name: "Jie (Limitation)",        guaci: "Limitation. Bitter limitation should not be pursued; perseverance brings good fortune.", upper: 2, lower: 6 },
    { no:61,  name: "Zhongfu (Inner Truth)",   guaci: "Inner truth. Pigs and fishes—good fortune; favorable to cross the great river; perseverance brings success.", upper: 4, lower: 6 },
    { no:62,  name: "Xiaoguo (Small Exceeding)",guaci: "Small excess. Success; small matters are suitable; great affairs are imprudent.", upper: 1, lower: 3 },
    { no:63,  name: "Jiji (Already Fording)",  guaci: "Already across. Small prosperity; favorable to be correct; good at first, disorder at last.", upper: 2, lower: 5 },
    { no:64,  name: "Weiji (Not Yet Fording)", guaci: "Not yet across. The little fox nearly fords, wets its tail; nothing is favorable.", upper: 5, lower: 2 },
  ];


  const MAP: Record<string, HexDatum> = Object.fromEntries(
    LIST.map(h => [`${h.upper}-${h.lower}`, h]),
  );

  /** ===================== Fool-proof mapping correction (EN version) ===================== */

// App trigram index order → King Wen matrix order
const APP_TO_WIKI = [7, 3, 5, 6, 4, 2, 1, 0];

// King Wen matrix (columns = upper, rows = lower; order: Qian, Dui, Li, Zhen, Xun, Kan, Gen, Kun)
const KING_WEN_MATRIX: number[][] = [
  [ 1, 43, 14, 34,  9,  5, 26, 11],
  [10, 58, 38, 54, 61, 60, 41, 19],
  [13, 49, 30, 55, 37, 63, 22, 36],
  [25, 17, 21, 51, 42,  3, 27, 24],
  [44, 28, 50, 32, 57, 48, 18, 46],
  [ 6, 47, 64, 40, 59, 29,  4,  7],
  [33, 31, 56, 62, 53, 39, 52, 15],
  [12, 45, 35, 16, 20,  8, 23,  2],
];

// Build corrected mapping: each (upper, lower) in your app's index → correct hexagram no.
const HEX_BY_UPLOW_CORRECTED: Record<string, HexDatum> = {};

for (let up = 0; up < 8; up++) {
  for (let low = 0; low < 8; low++) {
    const col = APP_TO_WIKI[up];
    const row = APP_TO_WIKI[low];
    const no  = KING_WEN_MATRIX[row][col];
    const data = LIST.find(h => h.no === no);
    if (data) {
      HEX_BY_UPLOW_CORRECTED[`${up}-${low}`] = {
        ...data,
        upper: up,
        lower: low,
      };
    }
  }
}

// Override the previous export with the corrected lookup
export function getHexByUpperLower(upper: number, lower: number): HexDatum | undefined {
  return HEX_BY_UPLOW_CORRECTED[`${upper}-${lower}`];
}

/** ========== Optional Dev Sanity Check (runs only in dev) ========== */
if (typeof window !== "undefined" && import.meta?.env?.DEV) {
  console.log("[check 上坤下震 → #24 Return]", getHexByUpperLower(0, 1)); // should be Fu (#24)
  console.log("[check 上坤下艮 → #15 Modesty]", getHexByUpperLower(0, 3)); // should be Qian (#15)
  console.log("[check 上坤下离 → #36 Darkening Light]", getHexByUpperLower(0, 5)); // should be Mingyi (#36)
}
