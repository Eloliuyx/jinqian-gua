// 约定与 App.tsx 保持一致：
// TRIGRAM 索引：0坤 1震 2坎 3艮 4巽 5离 6兑 7乾
export interface HexDatum {
    no: number;
    name: string;
    guaci: string;
    upper: number;
    lower: number;
  }

  export const HEX_LIST: HexDatum[] = [
    { no: 1,  name: "乾", guaci: "元亨，利贞。", upper: 7, lower: 7 },
    { no: 2,  name: "坤", guaci: "元亨，利牝马之贞。", upper: 0, lower: 0 },
    { no: 3,  name: "屯", guaci: "元亨，利贞；勿用有攸往，利建侯。", upper: 2, lower: 1 },
    { no: 4,  name: "蒙", guaci: "亨。匪我求童蒙，童蒙求我。利贞。", upper: 3, lower: 2 },
    { no: 5,  name: "需", guaci: "有孚，光亨，贞吉；利涉大川。", upper: 7, lower: 2 },
    { no: 6,  name: "讼", guaci: "有孚，窒惕，中吉；终凶。利见大人，不利涉大川。", upper: 2, lower: 7 },
    { no: 7,  name: "师", guaci: "贞，丈人吉，无咎。", upper: 0, lower: 2 },
    { no: 8,  name: "比", guaci: "吉。原筮，元永贞，无咎。不宁方来，后夫凶。", upper: 2, lower: 0 },
    { no: 9,  name: "小畜", guaci: "亨。密云不雨，自我西郊。", upper: 4, lower: 7 },
    { no:10,  name: "履", guaci: "履虎尾，不咥人；亨。", upper: 7, lower: 6 },
    { no:11,  name: "泰", guaci: "小往大来，吉亨。", upper: 7, lower: 0 },
    { no:12,  name: "否", guaci: "否之匪人；不利君子贞。大往小来。", upper: 0, lower: 7 },
    { no:13,  name: "同人", guaci: "同人于野，亨；利涉大川；利君子贞。", upper: 7, lower: 5 },
    { no:14,  name: "大有", guaci: "元亨。", upper: 5, lower: 7 },
    { no:15,  name: "谦", guaci: "亨。君子有终。", upper: 0, lower: 3 },
    { no:16,  name: "豫", guaci: "利建侯，行师。", upper: 1, lower: 0 },
    { no:17,  name: "随", guaci: "元亨，利贞；无咎。", upper: 1, lower: 6 },
    { no:18,  name: "蛊", guaci: "元亨，利涉大川；先甲三日，后甲三日。", upper: 3, lower: 4 },
    { no:19,  name: "临", guaci: "元，亨，利贞；至于八月有凶。", upper: 0, lower: 1 },
    { no:20,  name: "观", guaci: "盥而不荐，有孚顒若。", upper: 1, lower: 0 },
    { no:21,  name: "噬嗑", guaci: "亨；利用狱。", upper: 5, lower: 1 },
    { no:22,  name: "贲", guaci: "亨；小利有攸往。", upper: 3, lower: 5 },
    { no:23,  name: "剥", guaci: "不利有攸往。", upper: 0, lower: 3 },
    { no:24,  name: "复", guaci: "亨；出入无疾；朋来无咎；反复其道；七日来复；利有攸往。", upper: 3, lower: 0 },
    { no:25,  name: "无妄", guaci: "元亨，利贞。其匪正有眚，不利有攸往。", upper: 7, lower: 1 },
    { no:26,  name: "大畜", guaci: "利贞；不家食吉；利涉大川。", upper: 3, lower: 7 },
    { no:27,  name: "颐", guaci: "贞吉。观颐，自求口实。", upper: 3, lower: 1 },
    { no:28,  name: "大过", guaci: "栋桡，利有攸往，亨。", upper: 4, lower: 6 },
    { no:29,  name: "坎", guaci: "习坎，有孚维心亨，行有尚。", upper: 2, lower: 2 },
    { no:30,  name: "离", guaci: "利贞，亨；畜牝牛吉。", upper: 5, lower: 5 },
    { no:31,  name: "咸", guaci: "亨；利贞。取女吉。", upper: 6, lower: 3 },
    { no:32,  name: "恒", guaci: "亨，无咎，利贞，利有攸往。", upper: 4, lower: 1 },
    { no:33,  name: "遁", guaci: "亨，小利贞。", upper: 7, lower: 3 },
    { no:34,  name: "大壮", guaci: "利贞。", upper: 1, lower: 7 },
    { no:35,  name: "晋", guaci: "康侯用锡马蕃庶，昼日三接。", upper: 5, lower: 0 },
    { no:36,  name: "明夷", guaci: "利艰贞。", upper: 0, lower: 5 },
    { no:37,  name: "家人", guaci: "利女贞。", upper: 5, lower: 4 },
    { no:38,  name: "睽", guaci: "小事吉。", upper: 4, lower: 5 },
    { no:39,  name: "蹇", guaci: "利西南，不利东北；利见大人，贞吉。", upper: 3, lower: 2 },
    { no:40,  name: "解", guaci: "利西南；无所往，其来复吉；有攸往，夙吉。", upper: 2, lower: 1 },
    { no:41,  name: "损", guaci: "有孚元吉，无咎，可贞，利有攸往，曷之用？二簋可用享。", upper: 4, lower: 0 },
    { no:42,  name: "益", guaci: "利有攸往，利涉大川。", upper: 0, lower: 4 },
    { no:43,  name: "夬", guaci: "扬于王庭；孚号有厉；告自邑；不利即戎；利有攸往。", upper: 6, lower: 7 },
    { no:44,  name: "姤", guaci: "女壮，勿用取女。", upper: 7, lower: 6 },
    { no:45,  name: "萃", guaci: "亨。王假有庙，利见大人，亨，利贞，用大牲吉，利有攸往。", upper: 6, lower: 0 },
    { no:46,  name: "升", guaci: "元亨。用见大人，勿恤，南征吉。", upper: 0, lower: 4 },
    { no:47,  name: "困", guaci: "亨，贞，大人吉，无咎，有言不信。", upper: 6, lower: 2 },
    { no:48,  name: "井", guaci: "改邑不改井，无丧无得，往来井井。汔至，亦未繘井，羸其瓶，凶。", upper: 2, lower: 4 },
    { no:49,  name: "革", guaci: "己日乃孚，元亨利贞，悔亡。", upper: 5, lower: 4 },
    { no:50,  name: "鼎", guaci: "元吉，亨。", upper: 4, lower: 5 },
    { no:51,  name: "震", guaci: "震来虩虩，笑言哑哑。震惊百里，不丧匕鬯。", upper: 1, lower: 1 },
    { no:52,  name: "艮", guaci: "艮其背，不获其身。行其庭，不见其人，无咎。", upper: 3, lower: 3 },
    { no:53,  name: "渐", guaci: "女归吉，利贞。", upper: 4, lower: 5 },
    { no:54,  name: "归妹", guaci: "征凶，无攸利。", upper: 5, lower: 4 },
    { no:55,  name: "丰", guaci: "亨，王假之，勿忧，宜日中。", upper: 5, lower: 1 },
    { no:56,  name: "旅", guaci: "小亨，旅贞吉。", upper: 3, lower: 5 },
    { no:57,  name: "巽", guaci: "小亨；利有攸往；利见大人。", upper: 4, lower: 4 },
    { no:58,  name: "兑", guaci: "亨，利贞。", upper: 6, lower: 6 },
    { no:59,  name: "涣", guaci: "亨；王假有庙；利涉大川；利贞。", upper: 4, lower: 2 },
    { no:60,  name: "节", guaci: "亨，苦节不可贞。", upper: 6, lower: 2 },
    { no:61,  name: "中孚", guaci: "豚鱼吉，利涉大川，利贞。", upper: 4, lower: 6 },
    { no:62,  name: "小过", guaci: "亨，利贞，可小事，不可大事。飞鸟遗之音，不宜上，宜下，大吉。", upper: 1, lower: 3 },
    { no:63,  name: "既济", guaci: "亨小，利贞；初吉终乱。", upper: 5, lower: 2 },
    { no:64,  name: "未济", guaci: "亨；小狐汔济，濡其尾，无攸利。", upper: 2, lower: 5 },
  ];

  // 以 "upper-lower" 为键的映射，供 O(1) 查询
  export const HEX_BY_UPLOW: Record<string, HexDatum> = Object.fromEntries(
    HEX_LIST.map(h => [`${h.upper}-${h.lower}`, h])
  );

  // 工具函数

  export function getHexByNo(no: number): HexDatum | undefined {
    return HEX_LIST.find(h => h.no === no);
  }

  /** ===================== 修正映射逻辑（fool-proof 版本） ===================== */

// 你的 App 八卦索引顺序 → 文王矩阵顺序
const APP_TO_WIKI = [7, 3, 5, 6, 4, 2, 1, 0];

// 文王矩阵（上列、下行顺序：乾、兑、离、震、巽、坎、艮、坤）
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

// 生成正确的 upper-lower -> 卦编号映射
const MAPPED_HEX: Record<string, number> = {};
for (let up = 0; up < 8; up++) {
  for (let low = 0; low < 8; low++) {
    const col = APP_TO_WIKI[up];
    const row = APP_TO_WIKI[low];
    const no = KING_WEN_MATRIX[row][col];
    MAPPED_HEX[`${up}-${low}`] = no;
  }
}

// 重建 fool-proof 版本的 HEX_BY_UPLOW
export const HEX_BY_UPLOW_CORRECTED: Record<string, HexDatum> = {};
for (let up = 0; up < 8; up++) {
  for (let low = 0; low < 8; low++) {
    const col = APP_TO_WIKI[up];
    const row = APP_TO_WIKI[low];
    const no  = KING_WEN_MATRIX[row][col];

    const data = HEX_LIST.find(h => h.no === no);
    if (data) {
      // 关键：克隆 + 覆盖 upper/lower 为当前索引体系（你的 App 用的）
      HEX_BY_UPLOW_CORRECTED[`${up}-${low}`] = {
        ...data,
        upper: up,
        lower: low,
      };
    }
  }
}
// 新接口（供 App.tsx 使用）
export function getHexByUpperLower(upper: number, lower: number): HexDatum | undefined {
  return HEX_BY_UPLOW_CORRECTED[`${upper}-${lower}`];
}

/** ===================== 开发自检 ===================== */
if (typeof window !== "undefined" && import.meta?.env?.DEV) {
  const test = getHexByUpperLower(0, 1); // 上坤下震
  console.debug("[验证 地雷复]", test); // 应输出 #24 复
}
if (typeof window !== "undefined" && import.meta?.env?.DEV) {
  const test1 = getHexByUpperLower(0, 1);
  const test2 = getHexByUpperLower(0, 3);
  const test3 = getHexByUpperLower(0, 5);
  console.log("[验证 上坤下震 应为24复]", test1);
  console.log("[验证 上坤下艮 应为15谦]", test2);
  console.log("[验证 上坤下离 应为36明夷]", test3);
}
