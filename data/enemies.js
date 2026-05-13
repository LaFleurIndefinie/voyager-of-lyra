// Helper function to scale enemy stats based on stage
function scaleEnemy(base, stage = 1) {
  const multiplier = 1 + (stage - 1) * 0.12
  return {
    atk: Math.round(base.atk * multiplier),
    def: Math.round(base.def * multiplier),
    hp: Math.round(base.hp * multiplier),
    spd: Math.max(1, Math.round(base.spd * (1 + (stage - 1) * 0.05))),
    critChance: base.critChance || 0.05,
    defReduce: base.defReduce || Math.round(base.def * 0.1)
  }
}

// Unique enemy types - each enemy has a unique name (numeric IDs)
// Stage 1-10: Pre-War Astesia
export const ENEMY_TYPES = {
  1: { id: 1, name: "Village Youth", nameZh: "村民少年", base: {atk: 8, def: 4, hp: 50, spd: 4, critChance: 0.05}, skillIds: [] },
  2: { id: 2, name: "Church Initiate", nameZh: "教会实习生", base: {atk: 10, def: 5, hp: 55, spd: 3, critChance: 0.08}, skillIds: [] },
  3: { id: 3, name: "Port Worker", nameZh: "港口工人", base: {atk: 12, def: 6, hp: 60, spd: 3, critChance: 0.05}, skillIds: [] },
  4: { id: 4, name: "Merchants Guard", nameZh: "商人护卫", base: {atk: 14, def: 8, hp: 70, spd: 4, critChance: 0.1}, skillIds: [] },
  5: { id: 5, name: "Temple Guardian", nameZh: "神殿守卫", base: {atk: 18, def: 12, hp: 100, spd: 3, critChance: 0.1}, skillIds: ["fortify"] },
  6: { id: 6, name: "Refugee Child", nameZh: "难民儿童", base: {atk: 10, def: 5, hp: 60, spd: 5, critChance: 0.05}, skillIds: [] },
  7: { id: 7, name: "Fleeing Merchant", nameZh: "逃亡商人", base: {atk: 12, def: 6, hp: 70, spd: 4, critChance: 0.08}, skillIds: [] },
  8: { id: 8, name: "Wounded Soldier", nameZh: "受伤士兵", base: {atk: 14, def: 8, hp: 80, spd: 3, critChance: 0.1}, skillIds: [] },
  9: { id: 9, name: "Deserter", nameZh: "逃兵", base: {atk: 16, def: 10, hp: 90, spd: 4, critChance: 0.12}, skillIds: [] },
  10: { id: 10, name: "War Orphan", nameZh: "战争孤儿", base: {atk: 18, def: 8, hp: 85, spd: 5, critChance: 0.1}, skillIds: [] },
  11: { id: 11, name: "Confused Traveler", nameZh: "迷茫的旅人", base: {atk: 15, def: 8, hp: 90, spd: 4, critChance: 0.1}, skillIds: [] },
  12: { id: 12, name: "Displaced Priest", nameZh: "流离的神父", base: {atk: 18, def: 10, hp: 100, spd: 3, critChance: 0.08}, skillIds: [] },
  13: { id: 13, name: "Rogue Soldier", nameZh: "散兵游勇", base: {atk: 20, def: 12, hp: 110, spd: 4, critChance: 0.12}, skillIds: [] },
  14: { id: 14, name: "Plundering Bandit", nameZh: "掠夺者", base: {atk: 22, def: 10, hp: 100, spd: 5, critChance: 0.15}, skillIds: [] },
  15: { id: 15, name: "Desperate Survivor", nameZh: "绝望的幸存者", base: {atk: 25, def: 14, hp: 130, spd: 3, critChance: 0.12}, skillIds: [] },
  16: { id: 16, name: "Wandering Ghost", nameZh: "游荡的幽灵", base: {atk: 20, def: 10, hp: 100, spd: 5, critChance: 0.1}, skillIds: ["slow"] },
  17: { id: 17, name: "Echo of the Fallen", nameZh: "倒下者的回响", base: {atk: 22, def: 12, hp: 120, spd: 4, critChance: 0.12}, skillIds: [] },
  18: { id: 18, name: "Memorial Shade", nameZh: "纪念的阴影", base: {atk: 25, def: 14, hp: 130, spd: 4, critChance: 0.1}, skillIds: [] },
  19: { id: 19, name: "Spectral Refugee", nameZh: "幽灵难民", base: {atk: 28, def: 12, hp: 120, spd: 5, critChance: 0.12}, skillIds: ["slow"] },
  20: { id: 20, name: "Grief Wraith", nameZh: "悲痛的幽灵", base: {atk: 30, def: 16, hp: 150, spd: 4, critChance: 0.15}, skillIds: [] },
  21: { id: 21, name: "War Remnant", nameZh: "战争残骸", base: {atk: 28, def: 15, hp: 140, spd: 4, critChance: 0.12}, skillIds: [] },
  22: { id: 22, name: "Destruction Echo", nameZh: "毁灭的回声", base: {atk: 30, def: 16, hp: 150, spd: 4, critChance: 0.12}, skillIds: [] },
  23: { id: 23, name: "Burning Memory", nameZh: "燃烧的记忆", base: {atk: 32, def: 18, hp: 160, spd: 5, critChance: 0.15}, skillIds: [] },
  24: { id: 24, name: "Fallen Kingdom Fragment", nameZh: "陨落王国的碎片", base: {atk: 35, def: 20, hp: 180, spd: 3, critChance: 0.15}, skillIds: [] },
  25: { id: 25, name: "Ash Guardian", nameZh: "灰烬守护者", base: {atk: 40, def: 25, hp: 220, spd: 3, critChance: 0.18}, skillIds: [] },
  26: { id: 26, name: "Temporal Rift Echo", nameZh: "时空裂隙的回响", base: {atk: 35, def: 18, hp: 180, spd: 5, critChance: 0.12}, skillIds: ["slow"] },
  27: { id: 27, name: "Displaced Soul", nameZh: "错位的灵魂", base: {atk: 38, def: 20, hp: 190, spd: 4, critChance: 0.15}, skillIds: [] },
  28: { id: 28, name: "Lost Traveler", nameZh: "迷失的旅人", base: {atk: 40, def: 22, hp: 200, spd: 4, critChance: 0.15}, skillIds: [] },
  29: { id: 29, name: "Worldline Fragment", nameZh: "世界线的碎片", base: {atk: 42, def: 24, hp: 220, spd: 3, critChance: 0.15}, skillIds: [] },
  30: { id: 30, name: "Rift Warden", nameZh: "裂隙守卫", base: {atk: 48, def: 28, hp: 260, spd: 3, critChance: 0.18}, skillIds: [] },
  31: { id: 31, name: "Future Echo", nameZh: "未来的回声", base: {atk: 42, def: 22, hp: 220, spd: 5, critChance: 0.15}, skillIds: [] },
  32: { id: 32, name: "Possibility Shade", nameZh: "可能性的阴影", base: {atk: 45, def: 24, hp: 240, spd: 4, critChance: 0.15}, skillIds: [] },
  33: { id: 33, name: "Timeline Remnant", nameZh: "时间线的残骸", base: {atk: 48, def: 26, hp: 250, spd: 4, critChance: 0.18}, skillIds: [] },
  34: { id: 34, name: "Convergence Entity", nameZh: "汇聚实体", base: {atk: 50, def: 28, hp: 280, spd: 3, critChance: 0.18}, skillIds: [] },
  35: { id: 35, name: "Worldline Walker", nameZh: "世界线行者", base: {atk: 55, def: 32, hp: 320, spd: 4, critChance: 0.2}, skillIds: [] },
  36: { id: 36, name: "Merged Memory", nameZh: "融合的记忆", base: {atk: 48, def: 26, hp: 260, spd: 5, critChance: 0.15}, skillIds: [] },
  37: { id: 37, name: "Calibration Echo", nameZh: "校准的回声", base: {atk: 50, def: 28, hp: 280, spd: 4, critChance: 0.18}, skillIds: [] },
  38: { id: 38, name: "Synthetic Spirit", nameZh: "合成精神体", base: {atk: 52, def: 30, hp: 300, spd: 4, critChance: 0.18}, skillIds: [] },
  39: { id: 39, name: "Three Worlds Shade", nameZh: "三界的阴影", base: {atk: 55, def: 32, hp: 320, spd: 3, critChance: 0.2}, skillIds: [] },
  40: { id: 40, name: "Convergence Guardian", nameZh: "汇聚守护者", base: {atk: 60, def: 36, hp: 360, spd: 3, critChance: 0.22}, skillIds: [] },
  41: { id: 41, name: "Star Fragment", nameZh: "星之碎片", base: {atk: 55, def: 30, hp: 300, spd: 5, critChance: 0.18}, skillIds: [] },
  42: { id: 42, name: "Constellation Echo", nameZh: "星座的回声", base: {atk: 58, def: 32, hp: 320, spd: 4, critChance: 0.18}, skillIds: [] },
  43: { id: 43, name: "Faith Remnant", nameZh: "信仰的残骸", base: {atk: 60, def: 35, hp: 340, spd: 4, critChance: 0.2}, skillIds: [] },
  44: { id: 44, name: "Symphony Shade", nameZh: "乐章的阴影", base: {atk: 62, def: 38, hp: 360, spd: 3, critChance: 0.2}, skillIds: [] },
  45: { id: 45, name: "Star God Whisper", nameZh: "星神的低语", base: {atk: 68, def: 42, hp: 400, spd: 4, critChance: 0.22}, skillIds: [] },
  46: { id: 46, name: "Faith Echo", nameZh: "信仰的回声", base: {atk: 60, def: 35, hp: 350, spd: 5, critChance: 0.18}, skillIds: [] },
  47: { id: 47, name: "Memory Keeper", nameZh: "记忆守护者", base: {atk: 65, def: 38, hp: 380, spd: 4, critChance: 0.2}, skillIds: [] },
  48: { id: 48, name: "Starstring Guardian", nameZh: "星链守护者", base: {atk: 68, def: 42, hp: 400, spd: 4, critChance: 0.2}, skillIds: [] },
  49: { id: 49, name: "Harmony Fragment", nameZh: "和谐的碎片", base: {atk: 72, def: 45, hp: 440, spd: 3, critChance: 0.22}, skillIds: [] },
  50: { id: 50, name: "Origin Compass Spirit", nameZh: "起源罗盘之灵", base: {atk: 80, def: 50, hp: 500, spd: 4, critChance: 0.25}, skillIds: [] },

  // Stage 11-20: Rigel Island
  51: { id: 51, name: "Refugee Ghost", nameZh: "难民幽灵", base: {atk: 35, def: 18, hp: 200, spd: 5, critChance: 0.12}, skillIds: [] },
  52: { id: 52, name: "Island Shade", nameZh: "岛屿的阴影", base: {atk: 38, def: 20, hp: 220, spd: 4, critChance: 0.12}, skillIds: [] },
  53: { id: 53, name: "Drowned Memory", nameZh: "溺亡的记忆", base: {atk: 40, def: 22, hp: 240, spd: 4, critChance: 0.15}, skillIds: [] },
  54: { id: 54, name: "Sea Remnant", nameZh: "海的残骸", base: {atk: 42, def: 25, hp: 260, spd: 3, critChance: 0.15}, skillIds: [] },
  55: { id: 55, name: "Hope Keeper", nameZh: "希望的守护者", base: {atk: 48, def: 30, hp: 320, spd: 4, critChance: 0.18}, skillIds: [] },
  56: { id: 56, name: "Fisher Ghost", nameZh: "渔夫幽灵", base: {atk: 38, def: 20, hp: 220, spd: 5, critChance: 0.12}, skillIds: [] },
  57: { id: 57, name: "Village Elder Spirit", nameZh: "村中长者之灵", base: {atk: 42, def: 24, hp: 260, spd: 4, critChance: 0.15}, skillIds: [] },
  58: { id: 58, name: "Island Child Shade", nameZh: "岛民孩童的阴影", base: {atk: 40, def: 22, hp: 240, spd: 5, critChance: 0.12}, skillIds: [] },
  59: { id: 59, name: "Healing Herb Spirit", nameZh: "药草精灵", base: {atk: 35, def: 28, hp: 280, spd: 3, critChance: 0.1}, skillIds: [] },
  60: { id: 60, name: "Rigel Guardian", nameZh: "里格尔守护者", base: {atk: 50, def: 32, hp: 350, spd: 4, critChance: 0.18}, skillIds: [] },
  61: { id: 61, name: "Star Flower Spirit", nameZh: "星花精灵", base: {atk: 42, def: 24, hp: 260, spd: 5, critChance: 0.15}, skillIds: [] },
  62: { id: 62, name: "Mushroom Grove Shade", nameZh: "蘑菇林的阴影", base: {atk: 44, def: 26, hp: 280, spd: 4, critChance: 0.15}, skillIds: [] },
  63: { id: 63, name: "Island Beast Echo", nameZh: "岛上野兽的回响", base: {atk: 46, def: 28, hp: 300, spd: 4, critChance: 0.15}, skillIds: [] },
  64: { id: 64, name: "Forest Keeper Spirit", nameZh: "森林守护者的灵魂", base: {atk: 48, def: 30, hp: 320, spd: 3, critChance: 0.18}, skillIds: [] },
  65: { id: 65, name: "Rigel Forest Guardian", nameZh: "里格尔森林守护者", base: {atk: 55, def: 35, hp: 380, spd: 4, critChance: 0.2}, skillIds: [] },
  66: { id: 66, name: "Mountain Path Shade", nameZh: "山路的阴影", base: {atk: 45, def: 26, hp: 280, spd: 5, critChance: 0.15}, skillIds: [] },
  67: { id: 67, name: "Cliff Memory", nameZh: "悬崖的记忆", base: {atk: 48, def: 28, hp: 300, spd: 4, critChance: 0.15}, skillIds: [] },
  68: { id: 68, name: "Temple Ruin Spirit", nameZh: "神殿废墟之灵", base: {atk: 50, def: 30, hp: 320, spd: 4, critChance: 0.18}, skillIds: [] },
  69: { id: 69, name: "Ancient Prayer Echo", nameZh: "古老祈祷的回声", base: {atk: 52, def: 32, hp: 340, spd: 3, critChance: 0.18}, skillIds: [] },
  70: { id: 70, name: "Mountain Shrine Guardian", nameZh: "山间神社守护者", base: {atk: 58, def: 38, hp: 400, spd: 4, critChance: 0.2}, skillIds: [] },
  71: { id: 71, name: "Temple Guardian Shade", nameZh: "神殿守卫的阴影", base: {atk: 48, def: 28, hp: 300, spd: 5, critChance: 0.15}, skillIds: [] },
  72: { id: 72, name: "Sacred Artifact Spirit", nameZh: "神圣遗物的灵魂", base: {atk: 50, def: 32, hp: 340, spd: 4, critChance: 0.18}, skillIds: [] },
  73: { id: 73, name: "Starlight Fragment", nameZh: "星光的碎片", base: {atk: 52, def: 34, hp: 360, spd: 4, critChance: 0.18}, skillIds: [] },
  74: { id: 74, name: "Prayer Echo", nameZh: "祈祷的回声", base: {atk: 55, def: 36, hp: 380, spd: 3, critChance: 0.2}, skillIds: [] },
  75: { id: 75, name: "Star Condensation Remnant", nameZh: "星凝教的残影", base: {atk: 62, def: 42, hp: 440, spd: 4, critChance: 0.22}, skillIds: [] },
  76: { id: 76, name: "Refugee Memory", nameZh: "难民的记忆", base: {atk: 50, def: 30, hp: 320, spd: 5, critChance: 0.15}, skillIds: [] },
  77: { id: 77, name: "Separated Soul", nameZh: "分离的灵魂", base: {atk: 52, def: 32, hp: 340, spd: 4, critChance: 0.18}, skillIds: [] },
  78: { id: 78, name: "Journey Echo", nameZh: "旅途的回声", base: {atk: 55, def: 35, hp: 360, spd: 4, critChance: 0.18}, skillIds: [] },
  79: { id: 79, name: "Separation Shade", nameZh: "分离的阴影", base: {atk: 58, def: 38, hp: 400, spd: 3, critChance: 0.2}, skillIds: [] },
  80: { id: 80, name: "Temporal Rift Phantom", nameZh: "时空裂隙的幻影", base: {atk: 65, def: 45, hp: 480, spd: 4, critChance: 0.22}, skillIds: [] },
  81: { id: 81, name: "Future Memory", nameZh: "未来的记忆", base: {atk: 52, def: 32, hp: 340, spd: 5, critChance: 0.18}, skillIds: [] },
  82: { id: 82, name: "Linnaria Echo", nameZh: "琳娜利亚的回声", base: {atk: 55, def: 35, hp: 370, spd: 4, critChance: 0.18}, skillIds: [] },
  83: { id: 83, name: "Future City Shade", nameZh: "未来城市的阴影", base: {atk: 60, def: 40, hp: 420, spd: 3, critChance: 0.2}, skillIds: [] },
  84: { id: 84, name: "Time Displaced Spirit", nameZh: "时间错位的灵魂", base: {atk: 68, def: 48, hp: 500, spd: 4, critChance: 0.22}, skillIds: [] },
  85: { id: 85, name: "Star Compass Fragment", nameZh: "星之指南针的碎片", base: {atk: 55, def: 35, hp: 370, spd: 5, critChance: 0.18}, skillIds: [] },
  86: { id: 86, name: "Burned Journal Echo", nameZh: "烧毁日记的回声", base: {atk: 58, def: 38, hp: 400, spd: 4, critChance: 0.2}, skillIds: [] },
  87: { id: 87, name: "Memory Fragment", nameZh: "记忆的碎片", base: {atk: 60, def: 40, hp: 420, spd: 4, critChance: 0.2}, skillIds: [] },
  88: { id: 88, name: "Hope Shade", nameZh: "希望的阴影", base: {atk: 62, def: 42, hp: 440, spd: 3, critChance: 0.22}, skillIds: [] },
  89: { id: 89, name: "Lost Memory Guardian", nameZh: "遗失记忆的守护者", base: {atk: 70, def: 50, hp: 520, spd: 4, critChance: 0.25}, skillIds: [] },
  90: { id: 90, name: "Rigel Temple Guardian", nameZh: "里格尔神殿守护者", base: {atk: 75, def: 55, hp: 580, spd: 4, critChance: 0.25}, skillIds: [] },
  91: { id: 91, name: "Convergence Echo", nameZh: "汇聚的回声", base: {atk: 65, def: 45, hp: 480, spd: 4, critChance: 0.2}, skillIds: [] },
  92: { id: 92, name: "Symphony Fragment", nameZh: "乐章的碎片", base: {atk: 70, def: 50, hp: 540, spd: 3, critChance: 0.22}, skillIds: [] },
  93: { id: 93, name: "Rigel Temple Master", nameZh: "里格尔神殿之主", base: {atk: 80, def: 60, hp: 650, spd: 4, critChance: 0.28}, skillIds: [] },

  // Stage 21-30: Linnaria
  94: { id: 94, name: "Future Refugee", nameZh: "未来的难民", base: {atk: 40, def: 22, hp: 250, spd: 5, critChance: 0.12}, skillIds: [] },
  95: { id: 95, name: "Calibration Drone", nameZh: "校准无人机", base: {atk: 42, def: 20, hp: 220, spd: 7, critChance: 0.1}, skillIds: ["slow"] },
  96: { id: 96, name: "Time Displaced Soul", nameZh: "时间错位的灵魂", base: {atk: 45, def: 24, hp: 270, spd: 4, critChance: 0.15}, skillIds: [] },
  97: { id: 97, name: "Worldline Echo", nameZh: "世界线的回声", base: {atk: 48, def: 26, hp: 290, spd: 4, critChance: 0.15}, skillIds: [] },
  98: { id: 98, name: "Linnaria Shade", nameZh: "琳娜利亚的阴影", base: {atk: 52, def: 30, hp: 340, spd: 3, critChance: 0.18}, skillIds: [] },
  99: { id: 99, name: "Institute Guard", nameZh: "学院守卫", base: {atk: 45, def: 25, hp: 280, spd: 4, critChance: 0.15}, skillIds: ["fortify"] },
  100: { id: 100, name: "Research Clone", nameZh: "研究克隆体", base: {atk: 48, def: 22, hp: 260, spd: 5, critChance: 0.18}, skillIds: [] },
  101: { id: 101, name: "Calibration Fragment", nameZh: "校准的碎片", base: {atk: 50, def: 28, hp: 300, spd: 4, critChance: 0.15}, skillIds: [] },
  102: { id: 102, name: "Time Anomaly", nameZh: "时间异常", base: {atk: 52, def: 30, hp: 320, spd: 3, critChance: 0.18}, skillIds: [] },
  103: { id: 103, name: "Worldline Remnant", nameZh: "世界线的残骸", base: {atk: 58, def: 35, hp: 380, spd: 4, critChance: 0.2}, skillIds: [] },
  104: { id: 104, name: "Calibration Entity", nameZh: "校准实体", base: {atk: 55, def: 32, hp: 360, spd: 3, critChance: 0.2}, skillIds: [] },
  105: { id: 105, name: "Linnaria Guardian", nameZh: "琳娜利亚守护者", base: {atk: 62, def: 38, hp: 420, spd: 4, critChance: 0.22}, skillIds: [] },
  106: { id: 106, name: "Temporal Anchor", nameZh: "时间的锚点", base: {atk: 65, def: 42, hp: 450, spd: 4, critChance: 0.22}, skillIds: [] },
  107: { id: 107, name: "Institute Director", nameZh: "学院主管", base: {atk: 55, def: 32, hp: 360, spd: 4, critChance: 0.18}, skillIds: [] },
  108: { id: 108, name: "Calibration Master", nameZh: "校准大师", base: {atk: 58, def: 35, hp: 390, spd: 4, critChance: 0.2}, skillIds: [] },
  109: { id: 109, name: "Worldline Controller", nameZh: "世界线控制者", base: {atk: 60, def: 38, hp: 410, spd: 3, critChance: 0.2}, skillIds: [] },
  110: { id: 110, name: "Three Worlds Fragment", nameZh: "三界的碎片", base: {atk: 62, def: 40, hp: 440, spd: 4, critChance: 0.22}, skillIds: [] },
  111: { id: 111, name: "Linnaria Core Guardian", nameZh: "琳娜利亚核心守护者", base: {atk: 70, def: 48, hp: 520, spd: 4, critChance: 0.25}, skillIds: [] },

  // Stage 31-40: Eternal Slumber Remnants
  112: { id: 112, name: "Slumber Soldier", nameZh: "沉睡士兵", base: {atk: 55, def: 25, hp: 280, spd: 4, critChance: 0.12}, skillIds: ["slow", "power_strike"] },
  113: { id: 113, name: "Slumber Preacher", nameZh: "沉睡传道者", base: {atk: 50, def: 30, hp: 300, spd: 3, critChance: 0.08}, skillIds: ["weaken", "curse_of_withering"] },
  114: { id: 114, name: "Void Acolyte", nameZh: "虚空侍僧", base: {atk: 52, def: 22, hp: 260, spd: 5, critChance: 0.1}, skillIds: ["soul_drain", "weaken"] },
  115: { id: 115, name: "Historical Fragment", nameZh: "历史残片", base: {atk: 48, def: 35, hp: 350, spd: 2, critChance: 0.05}, skillIds: ["slow", "fortify"] },
  116: { id: 116, name: "Slumber Knight", nameZh: "沉睡骑士", base: {atk: 62, def: 40, hp: 450, spd: 3, critChance: 0.15}, skillIds: ["battle_cry", "double_strike"] },
  117: { id: 117, name: "Temporal Echo", nameZh: "时间回声", base: {atk: 54, def: 28, hp: 290, spd: 6, critChance: 0.1}, skillIds: ["time_distortion", "slow"] },
  118: { id: 118, name: "Slumber Lord", nameZh: "沉睡领主", base: {atk: 75, def: 50, hp: 550, spd: 3, critChance: 0.2}, skillIds: ["dark_healing", "soul_revival", "execute"] },

  // Stage 41-50: Institute and Prison Camp
  119: { id: 119, name: "Compliance Officer", nameZh: "合规官员", base: {atk: 78, def: 50, hp: 500, spd: 3, critChance: 0.1}, skillIds: ["weaken", "curse_of_withering"] },
  120: { id: 120, name: "Prison Commander", nameZh: "监狱指挥官", base: {atk: 92, def: 60, hp: 650, spd: 3, critChance: 0.22}, skillIds: ["battle_cry", "execute", "soul_revival"] },
  121: { id: 121, name: "Reformation Warden", nameZh: "改革监督", base: {atk: 98, def: 65, hp: 700, spd: 3, critChance: 0.22}, skillIds: ["soul_drain", "dark_healing"] },
  122: { id: 122, name: "Exam Guard", nameZh: "考试守卫", base: {atk: 88, def: 60, hp: 600, spd: 3, critChance: 0.15}, skillIds: ["fortify", "power_strike"] },

  // Stage 51-60: Star God Remnants
  123: { id: 123, name: "Constellation Shade", nameZh: "星座幽影", base: {atk: 105, def: 55, hp: 650, spd: 6, critChance: 0.18}, skillIds: ["slow", "light_heal"] },
  124: { id: 124, name: "Symphonie Echo", nameZh: "乐章回声", base: {atk: 100, def: 45, hp: 550, spd: 7, critChance: 0.2}, skillIds: ["multi_attack_random", "buff_all"] },
  125: { id: 125, name: "Starlight Wraith", nameZh: "星光幽魂", base: {atk: 108, def: 50, hp: 600, spd: 6, critChance: 0.22}, skillIds: ["soul_drain", "execute"] },
  126: { id: 126, name: "Loom Guardian", nameZh: "织机守护者", base: {atk: 115, def: 75, hp: 800, spd: 3, critChance: 0.2}, skillIds: ["fortify", "barrier", "group_heal"] },
  127: { id: 127, name: "Star God Fragment", nameZh: "星神残片", base: {atk: 125, def: 65, hp: 700, spd: 5, critChance: 0.28}, skillIds: ["dark_healing", "soul_revival", "buff_all"] },
  128: { id: 128, name: "Thanatos Fragment", nameZh: "塔纳托斯残片", base: {atk: 170, def: 110, hp: 1200, spd: 5, critChance: 0.4}, skillIds: ["death_sentence", "soul_revival", "dark_healing"] },

  // Stage 61-70: Music Spirits
  129: { id: 129, name: "Melody Fragment", nameZh: "旋律碎片", base: {atk: 150, def: 70, hp: 850, spd: 7, critChance: 0.28}, skillIds: ["slow", "multi_attack_random"] },
  130: { id: 130, name: "Harmony Shade", nameZh: "和谐幽影", base: {atk: 145, def: 80, hp: 950, spd: 5, critChance: 0.25}, skillIds: ["buff_all", "shield_all"] },
  131: { id: 131, name: "Dissonance Entity", nameZh: "不协和实体", base: {atk: 155, def: 65, hp: 800, spd: 6, critChance: 0.3}, skillIds: ["weaken", "curse_of_withering"] },
  132: { id: 132, name: "Symphony Guardian", nameZh: "交响乐守护者", base: {atk: 160, def: 95, hp: 1100, spd: 4, critChance: 0.3}, skillIds: ["barrier", "group_heal", "execute"] },
  133: { id: 133, name: "Lyre Spirit", nameZh: "竖琴精灵", base: {atk: 165, def: 85, hp: 1000, spd: 6, critChance: 0.35}, skillIds: ["buff_all", "light_heal", "shield_all"] },
  134: { id: 134, name: "Meteor Entity", nameZh: "陨星实体", base: {atk: 215, def: 120, hp: 1350, spd: 6, critChance: 0.48}, skillIds: ["meteor_strike", "ancient_wrath", "execute"] },

  // Stage 71-100: Hope and Future
  135: { id: 135, name: "Future Echo 3", nameZh: "未来回声", base: {atk: 185, def: 100, hp: 1150, spd: 7, critChance: 0.38}, skillIds: ["time_distortion", "buff_all"] },
  136: { id: 136, name: "Memory Fragment 3", nameZh: "记忆碎片", base: {atk: 188, def: 90, hp: 1050, spd: 6, critChance: 0.4}, skillIds: ["soul_drain", "slow"] },
  137: { id: 137, name: "Possibility Shade 3", nameZh: "可能性幽影", base: {atk: 192, def: 115, hp: 1350, spd: 4, critChance: 0.38}, skillIds: ["shield_all", "fortify"] },
  138: { id: 138, name: "Eternal Harmony", nameZh: "永恒和谐", base: {atk: 198, def: 130, hp: 1500, spd: 5, critChance: 0.42}, skillIds: ["group_heal", "buff_all", "execute"] },
  139: { id: 139, name: "Origin Compass", nameZh: "起源罗盘", base: {atk: 205, def: 140, hp: 1600, spd: 5, critChance: 0.45}, skillIds: ["fortify", "power_strike", "execute"] },
  140: { id: 140, name: "The Synthesizer", nameZh: "合成者", base: {atk: 300, def: 280, hp: 3500, spd: 7, critChance: 0.85}, skillIds: ["buff_all", "group_heal", "shield_all"] },
}

// Get enemy type by ID
export function getEnemyType(typeId) {
  return ENEMY_TYPES[typeId] || null
}

// Create enemy instance from enemy type
export function createEnemyInstance(typeId, instanceId, stage = 1) {
  const type = getEnemyType(typeId)
  if (!type) return null

  const scaled = scaleEnemy(type.base, stage)
  return {
    id: instanceId,
    typeId: typeId,
    name: type.name,
    nameZh: type.nameZh,
    ...scaled,
    skills: type.skillIds || [],
    skillCooldowns: (type.skillIds || []).map(() => 0)
  }
}

// ENEMIES - teams reference enemy type IDs (numeric)
export const ENEMIES = [
  // Stage 1-10
  { id: 1, members: [1, 2, 3, 4, 5] },
  { id: 2, members: [6, 7, 8, 9, 10] },
  { id: 3, members: [11, 12, 13, 14, 15] },
  { id: 4, members: [16, 17, 18, 19, 20] },
  { id: 5, members: [21, 22, 23, 24, 25] },
  { id: 6, members: [26, 27, 28, 29, 30] },
  { id: 7, members: [31, 32, 33, 34, 35] },
  { id: 8, members: [36, 37, 38, 39, 40] },
  { id: 9, members: [41, 42, 43, 44, 45] },
  { id: 10, members: [46, 47, 48, 49, 50] },

  // Stage 11-20
  { id: 11, members: [51, 52, 53, 54, 55] },
  { id: 12, members: [56, 57, 58, 59, 60] },
  { id: 13, members: [61, 62, 63, 64, 65] },
  { id: 14, members: [66, 67, 68, 69, 70] },
  { id: 15, members: [71, 72, 73, 74, 75] },
  { id: 16, members: [76, 77, 78, 79, 80] },
  { id: 17, members: [81, 82, 29, 83, 84] },
  { id: 18, members: [85, 86, 87, 88, 89] },
  { id: 19, members: [91, 35, 43, 88, 90] },
  { id: 20, members: [45, 91, 50, 92, 93] },

  // Stage 21-30
  { id: 21, members: [94, 95, 96, 97, 98] },
  { id: 22, members: [99, 100, 101, 102, 103] },
  { id: 23, members: [31, 38, 39, 104, 105] },
  { id: 24, members: [87, 32, 35, 34, 106] },
  { id: 25, members: [107, 108, 109, 110, 111] },
  { id: 26, members: [41, 42, 43, 44, 45] },
  { id: 27, members: [36, 29, 39, 91, 50] },
  { id: 28, members: [31, 81, 79, 106, 138] },
  { id: 29, members: [48, 86, 124, 130, 127] },
  { id: 30, members: [106, 117, 110, 46, 111] },

  // Stage 31-40
  { id: 31, members: [112, 113, 114, 115, 116] },
  { id: 32, members: [117, 112, 114, 115, 113] },
  { id: 33, members: [112, 117, 114, 115, 116] },
  { id: 34, members: [117, 113, 114, 115, 118] },
  { id: 35, members: [112, 117, 114, 115, 116] },
  { id: 36, members: [117, 112, 114, 115, 118] },
  { id: 37, members: [112, 117, 114, 115, 116] },
  { id: 38, members: [117, 113, 114, 115, 118] },
  { id: 39, members: [112, 117, 114, 115, 116] },
  { id: 40, members: [117, 112, 114, 115, 118] },

  // Stage 41-50
  { id: 41, members: [99, 95, 100, 119, 107] },
  { id: 42, members: [95, 99, 100, 120, 107] },
  { id: 43, members: [99, 95, 100, 119, 121] },
  { id: 44, members: [95, 99, 100, 122, 120] },
  { id: 45, members: [99, 95, 100, 119, 107] },
  { id: 46, members: [95, 99, 100, 122, 121] },
  { id: 47, members: [99, 95, 100, 119, 120] },
  { id: 48, members: [95, 99, 100, 122, 107] },
  { id: 49, members: [99, 95, 100, 119, 121] },
  { id: 50, members: [95, 99, 100, 122, 120] },

  // Stage 51-60
  { id: 51, members: [123, 124, 125, 126, 127] },
  { id: 52, members: [124, 123, 125, 127, 126] },
  { id: 53, members: [123, 124, 125, 126, 127] },
  { id: 54, members: [124, 123, 125, 127, 126] },
  { id: 55, members: [123, 124, 125, 126, 127] },
  { id: 56, members: [124, 123, 125, 127, 126] },
  { id: 57, members: [123, 124, 125, 126, 127] },
  { id: 58, members: [124, 123, 125, 127, 126] },
  { id: 59, members: [123, 124, 125, 126, 127] },
  { id: 60, members: [124, 123, 125, 127, 128] },

  // Stage 61-70
  { id: 61, members: [129, 130, 131, 132, 133] },
  { id: 62, members: [130, 129, 131, 133, 132] },
  { id: 63, members: [129, 130, 131, 132, 133] },
  { id: 64, members: [130, 129, 131, 133, 132] },
  { id: 65, members: [129, 130, 131, 132, 133] },
  { id: 66, members: [130, 129, 131, 133, 132] },
  { id: 67, members: [129, 130, 131, 132, 133] },
  { id: 68, members: [130, 129, 131, 133, 132] },
  { id: 69, members: [129, 130, 131, 132, 133] },
  { id: 70, members: [130, 129, 131, 133, 134] },

  // Stage 71-100
  { id: 71, members: [135, 136, 137, 138, 139] },
  { id: 72, members: [136, 135, 137, 139, 138] },
  { id: 73, members: [135, 136, 137, 138, 139] },
  { id: 74, members: [136, 135, 137, 139, 138] },
  { id: 75, members: [135, 136, 137, 138, 139] },
  { id: 76, members: [136, 135, 137, 139, 138] },
  { id: 77, members: [135, 136, 137, 138, 139] },
  { id: 78, members: [136, 135, 137, 139, 138] },
  { id: 79, members: [135, 136, 137, 138, 139] },
  { id: 80, members: [136, 135, 137, 139, 109] },
  { id: 81, members: [135, 136, 137, 138, 139] },
  { id: 82, members: [136, 135, 137, 139, 138] },
  { id: 83, members: [135, 136, 137, 138, 139] },
  { id: 84, members: [136, 135, 137, 139, 138] },
  { id: 85, members: [135, 136, 137, 138, 139] },
  { id: 86, members: [136, 135, 137, 139, 138] },
  { id: 87, members: [135, 136, 137, 138, 139] },
  { id: 88, members: [136, 135, 137, 139, 138] },
  { id: 89, members: [135, 136, 137, 138, 139] },
  { id: 90, members: [136, 135, 137, 139, 140] },
  { id: 91, members: [135, 136, 137, 138, 139] },
  { id: 92, members: [136, 135, 137, 139, 138] },
  { id: 93, members: [135, 136, 137, 138, 139] },
  { id: 94, members: [136, 135, 137, 139, 138] },
  { id: 95, members: [135, 136, 137, 138, 139] },
  { id: 96, members: [136, 135, 137, 139, 138] },
  { id: 97, members: [135, 136, 137, 138, 139] },
  { id: 98, members: [136, 135, 137, 139, 138] },
  { id: 99, members: [135, 136, 137, 138, 139] },
  { id: 100, members: [136, 135, 137, 138, 140] }
]
