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

// Helper to create enemy with skills
function createEnemyMember(id, name, nameZh, base, skills = []) {
  return {
    id,
    name,
    nameZh,
    ...scaleEnemy(base),
    skills,
    skillCooldowns: skills.map(() => 0)
  }
}

// Skill references (mapped by enemy type)
const SKILL_SETS = {
  // ===== NOVEL-THEMED ENEMY SKILL SETS =====

  // Basic skills used by novel enemies
  fortify: ['fortify'],
  slow: ['slow'],

  // Eternal Slumber Remnants (Stages 31-40)
  slumber_soldier: ['slow', 'power_strike'],
  slumber_preacher: ['weaken', 'curse_of_withering'],
  void_acolyte: ['soul_drain', 'weaken'],
  slumber_knight: ['battle_cry', 'double_strike'],
  slumber_lord: ['dark_healing', 'soul_revival', 'execute'],
  temporal_echo: ['time_distortion', 'slow'],
  historical_fragment: ['slow', 'fortify'],

  // Institute Enemies (Stages 41-50)
  institute_guard: ['fortify', 'battle_cry'],
  calibration_drone: ['slow', 'time_distortion'],
  research_clone: ['double_strike', 'execute'],
  institute_director: ['dark_healing', 'soul_revival', 'weaken'],

  // Prison Camp Echoes (Stages 41-50)
  exam_guard: ['fortify', 'power_strike'],
  compliance_officer: ['weaken', 'curse_of_withering'],
  reformation_warden: ['soul_drain', 'dark_healing'],
  prison_commander: ['battle_cry', 'execute', 'soul_revival'],

  // Star God Remnants (Stages 51-60)
  constellation_shade: ['slow', 'light_heal'],
  symphonie_echo: ['multi_attack_random', 'buff_all'],
  starlight_wraith: ['soul_drain', 'execute'],
  loom_guardian: ['fortify', 'barrier', 'group_heal'],
  star_god_fragment: ['dark_healing', 'soul_revival', 'buff_all'],

  // Music Spirits (Stages 61-70)
  melody_fragment: ['slow', 'multi_attack_random'],
  harmony_shade: ['buff_all', 'shield_all'],
  dissonance_entity: ['weaken', 'curse_of_withering'],
  symphony_guardian: ['barrier', 'group_heal', 'execute'],
  lyre_spirit: ['buff_all', 'light_heal', 'shield_all'],

  // Hope and Future (Stages 71-100)
  future_echo: ['time_distortion', 'buff_all'],
  memory_fragment: ['soul_drain', 'slow'],
  possibility_shade: ['shield_all', 'fortify'],
  eternal_harmony: ['group_heal', 'buff_all', 'execute'],
  origin_compass: ['fortify', 'power_strike', 'execute'],

  // Final Boss Enemies
  thanatos_fragment: ['death_sentence', 'soul_revival', 'dark_healing'],
  meteor_entity: ['meteor_strike', 'ancient_wrath', 'execute'],
  worldline_controller: ['time_distortion', 'soul_revival', 'buff_all'],
  synthesizer: ['buff_all', 'group_heal', 'shield_all'],

  // Default for generic enemies (no skills)
  default: []
}

// Get skills for enemy type
function getSkills(type) {
  return SKILL_SETS[type] || SKILL_SETS.default
}

export const ENEMIES = [
  // Stage 1-10: Pre-War Astesia (Peaceful beginning)
  {
    id: "1",
    members: [
      createEnemyMember("e1_1", "Village Youth", "村民少年", {atk: 8, def: 4, hp: 50, spd: 4, critChance: 0.05}, []),
      createEnemyMember("e1_2", "Church Initiate", "教会实习生", {atk: 10, def: 5, hp: 55, spd: 3, critChance: 0.08}, []),
      createEnemyMember("e1_3", "Port Worker", "港口工人", {atk: 12, def: 6, hp: 60, spd: 3, critChance: 0.05}, []),
      createEnemyMember("e1_4", "Merchants Guard", "商人护卫", {atk: 14, def: 8, hp: 70, spd: 4, critChance: 0.1}, []),
      createEnemyMember("e1_5", "Temple Guardian", "神殿守卫", {atk: 18, def: 12, hp: 100, spd: 3, critChance: 0.1}, getSkills('fortify'))
    ]
  },
  {
    id: "2",
    members: [
      createEnemyMember("e2_1", "Refugee Child", "难民儿童", {atk: 10, def: 5, hp: 60, spd: 5, critChance: 0.05}, []),
      createEnemyMember("e2_2", "Fleeing Merchant", "逃亡商人", {atk: 12, def: 6, hp: 70, spd: 4, critChance: 0.08}, []),
      createEnemyMember("e2_3", "Wounded Soldier", "受伤士兵", {atk: 14, def: 8, hp: 80, spd: 3, critChance: 0.1}, []),
      createEnemyMember("e2_4", "Deserter", "逃兵", {atk: 16, def: 10, hp: 90, spd: 4, critChance: 0.12}, []),
      createEnemyMember("e2_5", "War Orphan", "战争孤儿", {atk: 18, def: 8, hp: 85, spd: 5, critChance: 0.1}, [])
    ]
  },
  {
    id: "3",
    members: [
      createEnemyMember("e3_1", "Confused Traveler", "迷茫的旅人", {atk: 15, def: 8, hp: 90, spd: 4, critChance: 0.1}, []),
      createEnemyMember("e3_2", "Displaced Priest", "流离的神父", {atk: 18, def: 10, hp: 100, spd: 3, critChance: 0.08}, []),
      createEnemyMember("e3_3", "Rogue Soldier", "散兵游勇", {atk: 20, def: 12, hp: 110, spd: 4, critChance: 0.12}, []),
      createEnemyMember("e3_4", "Plundering Bandit", "掠夺者", {atk: 22, def: 10, hp: 100, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e3_5", "Desperate Survivor", "绝望的幸存者", {atk: 25, def: 14, hp: 130, spd: 3, critChance: 0.12}, [])
    ]
  },
  {
    id: "4",
    members: [
      createEnemyMember("e4_1", "Wandering Ghost", "游荡的幽灵", {atk: 20, def: 10, hp: 100, spd: 5, critChance: 0.1}, getSkills('slow')),
      createEnemyMember("e4_2", "Echo of the Fallen", "倒下者的回响", {atk: 22, def: 12, hp: 120, spd: 4, critChance: 0.12}, []),
      createEnemyMember("e4_3", "Memorial Shade", "纪念的阴影", {atk: 25, def: 14, hp: 130, spd: 4, critChance: 0.1}, []),
      createEnemyMember("e4_4", "Spectral Refugee", "幽灵难民", {atk: 28, def: 12, hp: 120, spd: 5, critChance: 0.12}, getSkills('slow')),
      createEnemyMember("e4_5", "Grief Wraith", "悲痛的幽灵", {atk: 30, def: 16, hp: 150, spd: 4, critChance: 0.15}, [])
    ]
  },
  {
    id: "5",
    members: [
      createEnemyMember("e5_1", "War Remnant", "战争残骸", {atk: 28, def: 15, hp: 140, spd: 4, critChance: 0.12}, []),
      createEnemyMember("e5_2", "Destruction Echo", "毁灭的回声", {atk: 30, def: 16, hp: 150, spd: 4, critChance: 0.12}, []),
      createEnemyMember("e5_3", "Burning Memory", "燃烧的记忆", {atk: 32, def: 18, hp: 160, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e5_4", "Fallen Kingdom Fragment", "陨落王国的碎片", {atk: 35, def: 20, hp: 180, spd: 3, critChance: 0.15}, []),
      createEnemyMember("e5_5", "Ash Guardian", "灰烬守护者", {atk: 40, def: 25, hp: 220, spd: 3, critChance: 0.18}, [])
    ]
  },
  {
    id: "6",
    members: [
      createEnemyMember("e6_1", "Temporal Rift Echo", "时空裂隙的回响", {atk: 35, def: 18, hp: 180, spd: 5, critChance: 0.12}, getSkills('slow')),
      createEnemyMember("e6_2", "Displaced Soul", "错位的灵魂", {atk: 38, def: 20, hp: 190, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e6_3", "Lost Traveler", "迷失的旅人", {atk: 40, def: 22, hp: 200, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e6_4", "Worldline Fragment", "世界线的碎片", {atk: 42, def: 24, hp: 220, spd: 3, critChance: 0.15}, []),
      createEnemyMember("e6_5", "Rift Warden", "裂隙守卫", {atk: 48, def: 28, hp: 260, spd: 3, critChance: 0.18}, [])
    ]
  },
  {
    id: "7",
    members: [
      createEnemyMember("e7_1", "Future Echo", "未来的回声", {atk: 42, def: 22, hp: 220, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e7_2", "Possibility Shade", "可能性的阴影", {atk: 45, def: 24, hp: 240, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e7_3", "Timeline Remnant", "时间线的残骸", {atk: 48, def: 26, hp: 250, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e7_4", "Convergence Entity", "汇聚实体", {atk: 50, def: 28, hp: 280, spd: 3, critChance: 0.18}, []),
      createEnemyMember("e7_5", "Worldline Walker", "世界线行者", {atk: 55, def: 32, hp: 320, spd: 4, critChance: 0.2}, [])
    ]
  },
  {
    id: "8",
    members: [
      createEnemyMember("e8_1", "Merged Memory", "融合的记忆", {atk: 48, def: 26, hp: 260, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e8_2", "Calibration Echo", "校准的回声", {atk: 50, def: 28, hp: 280, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e8_3", "Synthetic Spirit", "合成精神体", {atk: 52, def: 30, hp: 300, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e8_4", "Three Worlds Shade", "三界的阴影", {atk: 55, def: 32, hp: 320, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e8_5", "Convergence Guardian", "汇聚守护者", {atk: 60, def: 36, hp: 360, spd: 3, critChance: 0.22}, [])
    ]
  },
  {
    id: "9",
    members: [
      createEnemyMember("e9_1", "Star Fragment", "星之碎片", {atk: 55, def: 30, hp: 300, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e9_2", "Constellation Echo", "星座的回声", {atk: 58, def: 32, hp: 320, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e9_3", "Faith Remnant", "信仰的残骸", {atk: 60, def: 35, hp: 340, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e9_4", "Symphony Shade", "乐章的阴影", {atk: 62, def: 38, hp: 360, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e9_5", "Star God Whisper", "星神的低语", {atk: 68, def: 42, hp: 400, spd: 4, critChance: 0.22}, [])
    ]
  },
  {
    id: "10",
    members: [
      createEnemyMember("e10_1", "Faith Echo", "信仰的回声", {atk: 60, def: 35, hp: 350, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e10_2", "Memory Keeper", "记忆守护者", {atk: 65, def: 38, hp: 380, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e10_3", "Starstring Guardian", "星链守护者", {atk: 68, def: 42, hp: 400, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e10_4", "Harmony Fragment", "和谐的碎片", {atk: 72, def: 45, hp: 440, spd: 3, critChance: 0.22}, []),
      createEnemyMember("e10_5", "Origin Compass Spirit", "起源罗盘之灵", {atk: 80, def: 50, hp: 500, spd: 4, critChance: 0.25}, [])
    ]
  },

  // Stage 11-20: Rigel Island (April 14-21, 2157)
  {
    id: "11",
    members: [
      createEnemyMember("e11_1", "Refugee Ghost", "难民幽灵", {atk: 35, def: 18, hp: 200, spd: 5, critChance: 0.12}, []),
      createEnemyMember("e11_2", "Island Shade", "岛屿的阴影", {atk: 38, def: 20, hp: 220, spd: 4, critChance: 0.12}, []),
      createEnemyMember("e11_3", "Drowned Memory", "溺亡的记忆", {atk: 40, def: 22, hp: 240, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e11_4", "Sea Remnant", "海的残骸", {atk: 42, def: 25, hp: 260, spd: 3, critChance: 0.15}, []),
      createEnemyMember("e11_5", "Hope Keeper", "希望的守护者", {atk: 48, def: 30, hp: 320, spd: 4, critChance: 0.18}, [])
    ]
  },
  {
    id: "12",
    members: [
      createEnemyMember("e12_1", "Fisher Ghost", "渔夫幽灵", {atk: 38, def: 20, hp: 220, spd: 5, critChance: 0.12}, []),
      createEnemyMember("e12_2", "Village Elder Spirit", "村中长者之灵", {atk: 42, def: 24, hp: 260, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e12_3", "Island Child Shade", "岛民孩童的阴影", {atk: 40, def: 22, hp: 240, spd: 5, critChance: 0.12}, []),
      createEnemyMember("e12_4", "Healing Herb Spirit", "药草精灵", {atk: 35, def: 28, hp: 280, spd: 3, critChance: 0.1}, []),
      createEnemyMember("e12_5", "Rigel Guardian", "里格尔守护者", {atk: 50, def: 32, hp: 350, spd: 4, critChance: 0.18}, [])
    ]
  },
  {
    id: "13",
    members: [
      createEnemyMember("e13_1", "Star Flower Spirit", "星花精灵", {atk: 42, def: 24, hp: 260, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e13_2", "Mushroom Grove Shade", "蘑菇林的阴影", {atk: 44, def: 26, hp: 280, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e13_3", "Island Beast Echo", "岛上野兽的回响", {atk: 46, def: 28, hp: 300, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e13_4", "Forest Keeper Spirit", "森林守护者的灵魂", {atk: 48, def: 30, hp: 320, spd: 3, critChance: 0.18}, []),
      createEnemyMember("e13_5", "Rigel Forest Guardian", "里格尔森林守护者", {atk: 55, def: 35, hp: 380, spd: 4, critChance: 0.2}, [])
    ]
  },
  {
    id: "14",
    members: [
      createEnemyMember("e14_1", "Mountain Path Shade", "山路的阴影", {atk: 45, def: 26, hp: 280, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e14_2", "Cliff Memory", "悬崖的记忆", {atk: 48, def: 28, hp: 300, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e14_3", "Temple Ruin Spirit", "神殿废墟之灵", {atk: 50, def: 30, hp: 320, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e14_4", "Ancient Prayer Echo", "古老祈祷的回声", {atk: 52, def: 32, hp: 340, spd: 3, critChance: 0.18}, []),
      createEnemyMember("e14_5", "Mountain Shrine Guardian", "山间神社守护者", {atk: 58, def: 38, hp: 400, spd: 4, critChance: 0.2}, [])
    ]
  },
  {
    id: "15",
    members: [
      createEnemyMember("e15_1", "Temple Guardian Shade", "神殿守卫的阴影", {atk: 48, def: 28, hp: 300, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e15_2", "Sacred Artifact Spirit", "神圣遗物的灵魂", {atk: 50, def: 32, hp: 340, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e15_3", "Starlight Fragment", "星光的碎片", {atk: 52, def: 34, hp: 360, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e15_4", "Prayer Echo", "祈祷的回声", {atk: 55, def: 36, hp: 380, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e15_5", "Star Condensation Remnant", "星凝教的残影", {atk: 62, def: 42, hp: 440, spd: 4, critChance: 0.22}, [])
    ]
  },
  {
    id: "16",
    members: [
      createEnemyMember("e16_1", "Refugee Memory", "难民的记忆", {atk: 50, def: 30, hp: 320, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e16_2", "Separated Soul", "分离的灵魂", {atk: 52, def: 32, hp: 340, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e16_3", "Journey Echo", "旅途的回声", {atk: 55, def: 35, hp: 360, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e16_4", "Separation Shade", "分离的阴影", {atk: 58, def: 38, hp: 400, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e16_5", "Temporal Rift Phantom", "时空裂隙的幻影", {atk: 65, def: 45, hp: 480, spd: 4, critChance: 0.22}, [])
    ]
  },
  {
    id: "17",
    members: [
      createEnemyMember("e17_1", "Future Memory", "未来的记忆", {atk: 52, def: 32, hp: 340, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e17_2", "Linnaria Echo", "琳娜利亚的回声", {atk: 55, def: 35, hp: 370, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e17_3", "Worldline Fragment", "世界线的碎片", {atk: 58, def: 38, hp: 400, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e17_4", "Future City Shade", "未来城市的阴影", {atk: 60, def: 40, hp: 420, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e17_5", "Time Displaced Spirit", "时间错位的灵魂", {atk: 68, def: 48, hp: 500, spd: 4, critChance: 0.22}, [])
    ]
  },
  {
    id: "18",
    members: [
      createEnemyMember("e18_1", "Star Compass Fragment", "星之指南针的碎片", {atk: 55, def: 35, hp: 370, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e18_2", "Burned Journal Echo", "烧毁日记的回声", {atk: 58, def: 38, hp: 400, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e18_3", "Memory Fragment", "记忆的碎片", {atk: 60, def: 40, hp: 420, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e18_4", "Hope Shade", "希望的阴影", {atk: 62, def: 42, hp: 440, spd: 3, critChance: 0.22}, []),
      createEnemyMember("e18_5", "Lost Memory Guardian", "遗失记忆的守护者", {atk: 70, def: 50, hp: 520, spd: 4, critChance: 0.25}, [])
    ]
  },
  {
    id: "19",
    members: [
      createEnemyMember("e19_1", "Temporal Echo", "时间的回声", {atk: 58, def: 38, hp: 400, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e19_2", "Worldline Walker", "世界线行者", {atk: 60, def: 40, hp: 420, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e19_3", "Faith Remnant", "信仰的残骸", {atk: 62, def: 42, hp: 440, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e19_4", "Hope Fragment", "希望的碎片", {atk: 65, def: 45, hp: 480, spd: 3, critChance: 0.22}, []),
      createEnemyMember("e19_5", "Rigel Temple Guardian", "里格尔神殿守护者", {atk: 75, def: 55, hp: 580, spd: 4, critChance: 0.25}, [])
    ]
  },
  {
    id: "20",
    members: [
      createEnemyMember("e20_1", "Star God Whisper", "星神的低语", {atk: 62, def: 42, hp: 450, spd: 5, critChance: 0.2}, []),
      createEnemyMember("e20_2", "Convergence Echo", "汇聚的回声", {atk: 65, def: 45, hp: 480, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e20_3", "Origin Compass Spirit", "起源罗盘之灵", {atk: 68, def: 48, hp: 500, spd: 4, critChance: 0.22}, []),
      createEnemyMember("e20_4", "Symphony Fragment", "乐章的碎片", {atk: 70, def: 50, hp: 540, spd: 3, critChance: 0.22}, []),
      createEnemyMember("e20_5", "Rigel Temple Master", "里格尔神殿之主", {atk: 80, def: 60, hp: 650, spd: 4, critChance: 0.28}, [])
    ]
  },

  // Stage 21-30: Linnaria (Future City)
  {
    id: "21",
    members: [
      createEnemyMember("e21_1", "Future Refugee", "未来的难民", {atk: 40, def: 22, hp: 250, spd: 5, critChance: 0.12}, []),
      createEnemyMember("e21_2", "Calibration Drone", "校准无人机", {atk: 42, def: 20, hp: 220, spd: 7, critChance: 0.1}, getSkills('slow')),
      createEnemyMember("e21_3", "Time Displaced Soul", "时间错位的灵魂", {atk: 45, def: 24, hp: 270, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e21_4", "Worldline Echo", "世界线的回声", {atk: 48, def: 26, hp: 290, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e21_5", "Linnaria Shade", "琳娜利亚的阴影", {atk: 52, def: 30, hp: 340, spd: 3, critChance: 0.18}, [])
    ]
  },
  {
    id: "22",
    members: [
      createEnemyMember("e22_1", "Institute Guard", "学院守卫", {atk: 45, def: 25, hp: 280, spd: 4, critChance: 0.15}, getSkills('fortify')),
      createEnemyMember("e22_2", "Research Clone", "研究克隆体", {atk: 48, def: 22, hp: 260, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e22_3", "Calibration Fragment", "校准的碎片", {atk: 50, def: 28, hp: 300, spd: 4, critChance: 0.15}, []),
      createEnemyMember("e22_4", "Time Anomaly", "时间异常", {atk: 52, def: 30, hp: 320, spd: 3, critChance: 0.18}, []),
      createEnemyMember("e22_5", "Worldline Remnant", "世界线的残骸", {atk: 58, def: 35, hp: 380, spd: 4, critChance: 0.2}, [])
    ]
  },
  {
    id: "23",
    members: [
      createEnemyMember("e23_1", "Future Echo", "未来的回声", {atk: 48, def: 26, hp: 300, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e23_2", "Synthetic Spirit", "合成精神体", {atk: 50, def: 28, hp: 320, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e23_3", "Three Worlds Shade", "三界的阴影", {atk: 52, def: 30, hp: 340, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e23_4", "Calibration Entity", "校准实体", {atk: 55, def: 32, hp: 360, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e23_5", "Linnaria Guardian", "琳娜利亚守护者", {atk: 62, def: 38, hp: 420, spd: 4, critChance: 0.22}, [])
    ]
  },
  {
    id: "24",
    members: [
      createEnemyMember("e24_1", "Memory Fragment", "记忆的碎片", {atk: 50, def: 28, hp: 320, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e24_2", "Possibility Shade", "可能性的阴影", {atk: 52, def: 30, hp: 340, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e24_3", "Worldline Walker", "世界线行者", {atk: 55, def: 32, hp: 360, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e24_4", "Convergence Entity", "汇聚实体", {atk: 58, def: 35, hp: 390, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e24_5", "Temporal Anchor", "时间的锚点", {atk: 65, def: 42, hp: 450, spd: 4, critChance: 0.22}, [])
    ]
  },
  {
    id: "25",
    members: [
      createEnemyMember("e25_1", "Institute Director", "学院主管", {atk: 55, def: 32, hp: 360, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e25_2", "Calibration Master", "校准大师", {atk: 58, def: 35, hp: 390, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e25_3", "Worldline Controller", "世界线控制者", {atk: 60, def: 38, hp: 410, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e25_4", "Three Worlds Fragment", "三界的碎片", {atk: 62, def: 40, hp: 440, spd: 4, critChance: 0.22}, []),
      createEnemyMember("e25_5", "Linnaria Core Guardian", "琳娜利亚核心守护者", {atk: 70, def: 48, hp: 520, spd: 4, critChance: 0.25}, [])
    ]
  },
  {
    id: "26",
    members: [
      createEnemyMember("e26_1", "Star Fragment", "星之碎片", {atk: 55, def: 32, hp: 370, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e26_2", "Constellation Echo", "星座的回声", {atk: 58, def: 35, hp: 400, spd: 4, critChance: 0.18}, []),
      createEnemyMember("e26_3", "Faith Remnant", "信仰的残骸", {atk: 60, def: 38, hp: 420, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e26_4", "Symphony Shade", "乐章的阴影", {atk: 62, def: 40, hp: 450, spd: 3, critChance: 0.2}, []),
      createEnemyMember("e26_5", "Star God Whisper", "星神的低语", {atk: 70, def: 48, hp: 540, spd: 4, critChance: 0.25}, [])
    ]
  },
  {
    id: "27",
    members: [
      createEnemyMember("e27_1", "Merged Memory", "融合的记忆", {atk: 58, def: 35, hp: 400, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e27_2", "Worldline Fragment", "世界线的碎片", {atk: 60, def: 38, hp: 430, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e27_3", "Three Worlds Shade", "三界的阴影", {atk: 62, def: 40, hp: 460, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e27_4", "Convergence Echo", "汇聚的回声", {atk: 65, def: 42, hp: 490, spd: 3, critChance: 0.22}, []),
      createEnemyMember("e27_5", "Origin Compass Spirit", "起源罗盘之灵", {atk: 75, def: 52, hp: 580, spd: 4, critChance: 0.25}, [])
    ]
  },
  {
    id: "28",
    members: [
      createEnemyMember("e28_1", "Future Echo", "未来的回声", {atk: 60, def: 38, hp: 430, spd: 5, critChance: 0.18}, []),
      createEnemyMember("e28_2", "Past Memory", "过去的记忆", {atk: 62, def: 40, hp: 450, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e28_3", "Present Shade", "现在的阴影", {atk: 65, def: 42, hp: 480, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e28_4", "Time Guardian", "时间守护者", {atk: 68, def: 45, hp: 510, spd: 3, critChance: 0.22}, []),
      createEnemyMember("e28_5", "Eternal Harmony Fragment", "永恒和谐的碎片", {atk: 78, def: 55, hp: 620, spd: 4, critChance: 0.28}, [])
    ]
  },
  {
    id: "29",
    members: [
      createEnemyMember("e29_1", "Starstring Guardian", "星链守护者", {atk: 62, def: 40, hp: 460, spd: 5, critChance: 0.2}, []),
      createEnemyMember("e29_2", "Loom Fragment", "织机的碎片", {atk: 65, def: 42, hp: 490, spd: 4, critChance: 0.2}, []),
      createEnemyMember("e29_3", "Symphony Echo", "乐章的回声", {atk: 68, def: 45, hp: 520, spd: 4, critChance: 0.22}, []),
      createEnemyMember("e29_4", "Harmony Shade", "和谐的阴影", {atk: 70, def: 48, hp: 550, spd: 3, critChance: 0.22}, []),
      createEnemyMember("e29_5", "Star God Fragment", "星神的碎片", {atk: 80, def: 58, hp: 660, spd: 4, critChance: 0.28}, [])
    ]
  },
  {
    id: "30",
    members: [
      createEnemyMember("e30_1", "Worldline Anchor", "世界线的锚点", {atk: 65, def: 42, hp: 480, spd: 5, critChance: 0.2}, []),
      createEnemyMember("e30_2", "Temporal Convergence", "时间的汇聚", {atk: 68, def: 45, hp: 510, spd: 4, critChance: 0.22}, []),
      createEnemyMember("e30_3", "Three Worlds Keeper", "三界的守护者", {atk: 70, def: 48, hp: 540, spd: 4, critChance: 0.22}, []),
      createEnemyMember("e30_4", "Faith Echo", "信仰的回声", {atk: 72, def: 50, hp: 570, spd: 3, critChance: 0.25}, []),
      createEnemyMember("e30_5", "Linnaria Core", "琳娜利亚核心", {atk: 85, def: 62, hp: 720, spd: 4, critChance: 0.3}, [])
    ]
  },

  // Stage 31-40: Eternal Slumber Remnants (Religious War remnants)
  {
    id: "31",
    members: [
      createEnemyMember("e31_1", "Slumber Soldier", "沉睡士兵", {atk: 55, def: 25, hp: 280, spd: 4, critChance: 0.12}, getSkills('slumber_soldier')),
      createEnemyMember("e31_2", "Slumber Preacher", "沉睡传道者", {atk: 50, def: 30, hp: 300, spd: 3, critChance: 0.08}, getSkills('slumber_preacher')),
      createEnemyMember("e31_3", "Void Acolyte", "虚空侍僧", {atk: 52, def: 22, hp: 260, spd: 5, critChance: 0.1}, getSkills('void_acolyte')),
      createEnemyMember("e31_4", "Historical Fragment", "历史残片", {atk: 48, def: 35, hp: 350, spd: 2, critChance: 0.05}, getSkills('historical_fragment')),
      createEnemyMember("e31_5", "Slumber Knight", "沉睡骑士", {atk: 62, def: 40, hp: 450, spd: 3, critChance: 0.15}, getSkills('slumber_knight'))
    ]
  },
  {
    id: "32",
    members: [
      createEnemyMember("e32_1", "Temporal Echo", "时间回声", {atk: 54, def: 28, hp: 290, spd: 6, critChance: 0.1}, getSkills('temporal_echo')),
      createEnemyMember("e32_2", "Slumber Soldier", "沉睡士兵", {atk: 58, def: 28, hp: 300, spd: 4, critChance: 0.12}, getSkills('slumber_soldier')),
      createEnemyMember("e32_3", "Void Acolyte", "虚空侍僧", {atk: 55, def: 24, hp: 270, spd: 5, critChance: 0.1}, getSkills('void_acolyte')),
      createEnemyMember("e32_4", "Historical Fragment", "历史残片", {atk: 52, def: 38, hp: 380, spd: 2, critChance: 0.05}, getSkills('historical_fragment')),
      createEnemyMember("e32_5", "Slumber Preacher", "沉睡传道者", {atk: 65, def: 35, hp: 400, spd: 3, critChance: 0.12}, getSkills('slumber_preacher'))
    ]
  },
  {
    id: "33",
    members: [
      createEnemyMember("e33_1", "Slumber Soldier", "沉睡士兵", {atk: 60, def: 30, hp: 310, spd: 4, critChance: 0.12}, getSkills('slumber_soldier')),
      createEnemyMember("e33_2", "Temporal Echo", "时间回声", {atk: 58, def: 26, hp: 280, spd: 6, critChance: 0.12}, getSkills('temporal_echo')),
      createEnemyMember("e33_3", "Void Acolyte", "虚空侍僧", {atk: 56, def: 25, hp: 290, spd: 5, critChance: 0.1}, getSkills('void_acolyte')),
      createEnemyMember("e33_4", "Historical Fragment", "历史残片", {atk: 54, def: 40, hp: 400, spd: 2, critChance: 0.05}, getSkills('historical_fragment')),
      createEnemyMember("e33_5", "Slumber Knight", "沉睡骑士", {atk: 70, def: 45, hp: 500, spd: 3, critChance: 0.18}, getSkills('slumber_knight'))
    ]
  },
  {
    id: "34",
    members: [
      createEnemyMember("e34_1", "Temporal Echo", "时间回声", {atk: 62, def: 28, hp: 300, spd: 6, critChance: 0.12}, getSkills('temporal_echo')),
      createEnemyMember("e34_2", "Slumber Preacher", "沉睡传道者", {atk: 60, def: 35, hp: 350, spd: 3, critChance: 0.1}, getSkills('slumber_preacher')),
      createEnemyMember("e34_3", "Void Acolyte", "虚空侍僧", {atk: 58, def: 26, hp: 310, spd: 5, critChance: 0.12}, getSkills('void_acolyte')),
      createEnemyMember("e34_4", "Historical Fragment", "历史残片", {atk: 56, def: 42, hp: 420, spd: 2, critChance: 0.08}, getSkills('historical_fragment')),
      createEnemyMember("e34_5", "Slumber Lord", "沉睡领主", {atk: 75, def: 50, hp: 550, spd: 3, critChance: 0.2}, getSkills('slumber_lord'))
    ]
  },
  {
    id: "35",
    members: [
      createEnemyMember("e35_1", "Slumber Soldier", "沉睡士兵", {atk: 65, def: 32, hp: 340, spd: 4, critChance: 0.12}, getSkills('slumber_soldier')),
      createEnemyMember("e35_2", "Temporal Echo", "时间回声", {atk: 62, def: 30, hp: 320, spd: 6, critChance: 0.12}, getSkills('temporal_echo')),
      createEnemyMember("e35_3", "Void Acolyte", "虚空侍僧", {atk: 60, def: 28, hp: 330, spd: 5, critChance: 0.12}, getSkills('void_acolyte')),
      createEnemyMember("e35_4", "Historical Fragment", "历史残片", {atk: 58, def: 45, hp: 450, spd: 2, critChance: 0.08}, getSkills('historical_fragment')),
      createEnemyMember("e35_5", "Slumber Knight", "沉睡骑士", {atk: 80, def: 52, hp: 580, spd: 3, critChance: 0.2}, getSkills('slumber_knight'))
    ]
  },
  {
    id: "36",
    members: [
      createEnemyMember("e36_1", "Temporal Echo", "时间回声", {atk: 66, def: 30, hp: 330, spd: 6, critChance: 0.12}, getSkills('temporal_echo')),
      createEnemyMember("e36_2", "Slumber Soldier", "沉睡士兵", {atk: 68, def: 34, hp: 360, spd: 4, critChance: 0.15}, getSkills('slumber_soldier')),
      createEnemyMember("e36_3", "Void Acolyte", "虚空侍僧", {atk: 62, def: 30, hp: 350, spd: 5, critChance: 0.12}, getSkills('void_acolyte')),
      createEnemyMember("e36_4", "Historical Fragment", "历史残片", {atk: 60, def: 48, hp: 480, spd: 2, critChance: 0.08}, getSkills('historical_fragment')),
      createEnemyMember("e36_5", "Slumber Lord", "沉睡领主", {atk: 85, def: 55, hp: 620, spd: 3, critChance: 0.22}, getSkills('slumber_lord'))
    ]
  },
  {
    id: "37",
    members: [
      createEnemyMember("e37_1", "Slumber Soldier", "沉睡士兵", {atk: 70, def: 36, hp: 380, spd: 4, critChance: 0.15}, getSkills('slumber_soldier')),
      createEnemyMember("e37_2", "Temporal Echo", "时间回声", {atk: 68, def: 32, hp: 350, spd: 6, critChance: 0.12}, getSkills('temporal_echo')),
      createEnemyMember("e37_3", "Void Acolyte", "虚空侍僧", {atk: 65, def: 32, hp: 370, spd: 5, critChance: 0.12}, getSkills('void_acolyte')),
      createEnemyMember("e37_4", "Historical Fragment", "历史残片", {atk: 62, def: 50, hp: 510, spd: 2, critChance: 0.08}, getSkills('historical_fragment')),
      createEnemyMember("e37_5", "Slumber Knight", "沉睡骑士", {atk: 88, def: 58, hp: 650, spd: 3, critChance: 0.22}, getSkills('slumber_knight'))
    ]
  },
  {
    id: "38",
    members: [
      createEnemyMember("e38_1", "Temporal Echo", "时间回声", {atk: 72, def: 34, hp: 370, spd: 6, critChance: 0.12}, getSkills('temporal_echo')),
      createEnemyMember("e38_2", "Slumber Preacher", "沉睡传道者", {atk: 70, def: 42, hp: 420, spd: 3, critChance: 0.12}, getSkills('slumber_preacher')),
      createEnemyMember("e38_3", "Void Acolyte", "虚空侍僧", {atk: 68, def: 34, hp: 390, spd: 5, critChance: 0.12}, getSkills('void_acolyte')),
      createEnemyMember("e38_4", "Historical Fragment", "历史残片", {atk: 65, def: 55, hp: 540, spd: 2, critChance: 0.1}, getSkills('historical_fragment')),
      createEnemyMember("e38_5", "Slumber Lord", "沉睡领主", {atk: 92, def: 62, hp: 700, spd: 3, critChance: 0.25}, getSkills('slumber_lord'))
    ]
  },
  {
    id: "39",
    members: [
      createEnemyMember("e39_1", "Slumber Soldier", "沉睡士兵", {atk: 75, def: 40, hp: 410, spd: 4, critChance: 0.15}, getSkills('slumber_soldier')),
      createEnemyMember("e39_2", "Temporal Echo", "时间回声", {atk: 72, def: 36, hp: 390, spd: 6, critChance: 0.15}, getSkills('temporal_echo')),
      createEnemyMember("e39_3", "Void Acolyte", "虚空侍僧", {atk: 70, def: 36, hp: 410, spd: 5, critChance: 0.12}, getSkills('void_acolyte')),
      createEnemyMember("e39_4", "Historical Fragment", "历史残片", {atk: 68, def: 58, hp: 570, spd: 2, critChance: 0.1}, getSkills('historical_fragment')),
      createEnemyMember("e39_5", "Slumber Knight", "沉睡骑士", {atk: 95, def: 65, hp: 720, spd: 3, critChance: 0.25}, getSkills('slumber_knight'))
    ]
  },
  {
    id: "40",
    members: [
      createEnemyMember("e40_1", "Temporal Echo", "时间回声", {atk: 78, def: 38, hp: 410, spd: 6, critChance: 0.15}, getSkills('temporal_echo')),
      createEnemyMember("e40_2", "Slumber Soldier", "沉睡士兵", {atk: 80, def: 45, hp: 450, spd: 4, critChance: 0.15}, getSkills('slumber_soldier')),
      createEnemyMember("e40_3", "Void Acolyte", "虚空侍僧", {atk: 75, def: 40, hp: 440, spd: 5, critChance: 0.12}, getSkills('void_acolyte')),
      createEnemyMember("e40_4", "Historical Fragment", "历史残片", {atk: 72, def: 62, hp: 610, spd: 2, critChance: 0.1}, getSkills('historical_fragment')),
      createEnemyMember("e40_5", "Slumber Lord", "沉睡领主", {atk: 100, def: 70, hp: 780, spd: 3, critChance: 0.28}, getSkills('slumber_lord'))
    ]
  },

  // Stage 41-50: Institute Enemies and Prison Camp Echoes
  {
    id: "41",
    members: [
      createEnemyMember("e41_1", "Institute Guard", "学院守卫", {atk: 80, def: 45, hp: 450, spd: 4, critChance: 0.15}, getSkills('institute_guard')),
      createEnemyMember("e41_2", "Calibration Drone", "校准无人机", {atk: 75, def: 35, hp: 380, spd: 7, critChance: 0.12}, getSkills('calibration_drone')),
      createEnemyMember("e41_3", "Research Clone", "研究克隆体", {atk: 82, def: 40, hp: 420, spd: 5, critChance: 0.18}, getSkills('research_clone')),
      createEnemyMember("e41_4", "Compliance Officer", "合规官员", {atk: 78, def: 50, hp: 500, spd: 3, critChance: 0.1}, getSkills('compliance_officer')),
      createEnemyMember("e41_5", "Institute Director", "学院主管", {atk: 90, def: 55, hp: 600, spd: 4, critChance: 0.2}, getSkills('institute_director'))
    ]
  },
  {
    id: "42",
    members: [
      createEnemyMember("e42_1", "Calibration Drone", "校准无人机", {atk: 78, def: 38, hp: 400, spd: 7, critChance: 0.12}, getSkills('calibration_drone')),
      createEnemyMember("e42_2", "Institute Guard", "学院守卫", {atk: 84, def: 48, hp: 480, spd: 4, critChance: 0.15}, getSkills('institute_guard')),
      createEnemyMember("e42_3", "Research Clone", "研究克隆体", {atk: 86, def: 42, hp: 450, spd: 5, critChance: 0.18}, getSkills('research_clone')),
      createEnemyMember("e42_4", "Prison Commander", "监狱指挥官", {atk: 92, def: 60, hp: 650, spd: 3, critChance: 0.22}, getSkills('prison_commander')),
      createEnemyMember("e42_5", "Institute Director", "学院主管", {atk: 95, def: 58, hp: 640, spd: 4, critChance: 0.22}, getSkills('institute_director'))
    ]
  },
  {
    id: "43",
    members: [
      createEnemyMember("e43_1", "Institute Guard", "学院守卫", {atk: 88, def: 52, hp: 520, spd: 4, critChance: 0.15}, getSkills('institute_guard')),
      createEnemyMember("e43_2", "Calibration Drone", "校准无人机", {atk: 82, def: 42, hp: 430, spd: 7, critChance: 0.15}, getSkills('calibration_drone')),
      createEnemyMember("e43_3", "Research Clone", "研究克隆体", {atk: 90, def: 46, hp: 480, spd: 5, critChance: 0.2}, getSkills('research_clone')),
      createEnemyMember("e43_4", "Compliance Officer", "合规官员", {atk: 85, def: 55, hp: 550, spd: 3, critChance: 0.12}, getSkills('compliance_officer')),
      createEnemyMember("e43_5", "Reformation Warden", "改革监督", {atk: 98, def: 65, hp: 700, spd: 3, critChance: 0.22}, getSkills('reformation_warden'))
    ]
  },
  {
    id: "44",
    members: [
      createEnemyMember("e44_1", "Calibration Drone", "校准无人机", {atk: 85, def: 45, hp: 460, spd: 7, critChance: 0.15}, getSkills('calibration_drone')),
      createEnemyMember("e44_2", "Institute Guard", "学院守卫", {atk: 92, def: 55, hp: 560, spd: 4, critChance: 0.18}, getSkills('institute_guard')),
      createEnemyMember("e44_3", "Research Clone", "研究克隆体", {atk: 94, def: 50, hp: 510, spd: 5, critChance: 0.2}, getSkills('research_clone')),
      createEnemyMember("e44_4", "Exam Guard", "考试守卫", {atk: 88, def: 60, hp: 600, spd: 3, critChance: 0.15}, getSkills('exam_guard')),
      createEnemyMember("e44_5", "Prison Commander", "监狱指挥官", {atk: 102, def: 70, hp: 760, spd: 3, critChance: 0.25}, getSkills('prison_commander'))
    ]
  },
  {
    id: "45",
    members: [
      createEnemyMember("e45_1", "Institute Guard", "学院守卫", {atk: 95, def: 58, hp: 580, spd: 4, critChance: 0.18}, getSkills('institute_guard')),
      createEnemyMember("e45_2", "Calibration Drone", "校准无人机", {atk: 88, def: 48, hp: 490, spd: 7, critChance: 0.15}, getSkills('calibration_drone')),
      createEnemyMember("e45_3", "Research Clone", "研究克隆体", {atk: 98, def: 54, hp: 540, spd: 5, critChance: 0.22}, getSkills('research_clone')),
      createEnemyMember("e45_4", "Compliance Officer", "合规官员", {atk: 92, def: 62, hp: 620, spd: 3, critChance: 0.12}, getSkills('compliance_officer')),
      createEnemyMember("e45_5", "Institute Director", "学院主管", {atk: 108, def: 72, hp: 800, spd: 4, critChance: 0.28}, getSkills('institute_director'))
    ]
  },
  {
    id: "46",
    members: [
      createEnemyMember("e46_1", "Calibration Drone", "校准无人机", {atk: 90, def: 52, hp: 520, spd: 7, critChance: 0.15}, getSkills('calibration_drone')),
      createEnemyMember("e46_2", "Institute Guard", "学院守卫", {atk: 98, def: 62, hp: 620, spd: 4, critChance: 0.18}, getSkills('institute_guard')),
      createEnemyMember("e46_3", "Research Clone", "研究克隆体", {atk: 100, def: 58, hp: 570, spd: 5, critChance: 0.22}, getSkills('research_clone')),
      createEnemyMember("e46_4", "Exam Guard", "考试守卫", {atk: 95, def: 68, hp: 660, spd: 3, critChance: 0.15}, getSkills('exam_guard')),
      createEnemyMember("e46_5", "Reformation Warden", "改革监督", {atk: 105, def: 75, hp: 780, spd: 3, critChance: 0.25}, getSkills('reformation_warden'))
    ]
  },
  {
    id: "47",
    members: [
      createEnemyMember("e47_1", "Institute Guard", "学院守卫", {atk: 100, def: 65, hp: 650, spd: 4, critChance: 0.18}, getSkills('institute_guard')),
      createEnemyMember("e47_2", "Calibration Drone", "校准无人机", {atk: 94, def: 55, hp: 550, spd: 7, critChance: 0.15}, getSkills('calibration_drone')),
      createEnemyMember("e47_3", "Research Clone", "研究克隆体", {atk: 102, def: 62, hp: 600, spd: 5, critChance: 0.22}, getSkills('research_clone')),
      createEnemyMember("e47_4", "Compliance Officer", "合规官员", {atk: 98, def: 68, hp: 680, spd: 3, critChance: 0.12}, getSkills('compliance_officer')),
      createEnemyMember("e47_5", "Prison Commander", "监狱指挥官", {atk: 110, def: 80, hp: 850, spd: 3, critChance: 0.28}, getSkills('prison_commander'))
    ]
  },
  {
    id: "48",
    members: [
      createEnemyMember("e48_1", "Calibration Drone", "校准无人机", {atk: 96, def: 58, hp: 580, spd: 7, critChance: 0.15}, getSkills('calibration_drone')),
      createEnemyMember("e48_2", "Institute Guard", "学院守卫", {atk: 102, def: 68, hp: 680, spd: 4, critChance: 0.18}, getSkills('institute_guard')),
      createEnemyMember("e48_3", "Research Clone", "研究克隆体", {atk: 105, def: 65, hp: 630, spd: 5, critChance: 0.22}, getSkills('research_clone')),
      createEnemyMember("e48_4", "Exam Guard", "考试守卫", {atk: 100, def: 72, hp: 720, spd: 3, critChance: 0.18}, getSkills('exam_guard')),
      createEnemyMember("e48_5", "Institute Director", "学院主管", {atk: 115, def: 82, hp: 880, spd: 4, critChance: 0.3}, getSkills('institute_director'))
    ]
  },
  {
    id: "49",
    members: [
      createEnemyMember("e49_1", "Institute Guard", "学院守卫", {atk: 105, def: 72, hp: 720, spd: 4, critChance: 0.18}, getSkills('institute_guard')),
      createEnemyMember("e49_2", "Calibration Drone", "校准无人机", {atk: 98, def: 62, hp: 610, spd: 7, critChance: 0.15}, getSkills('calibration_drone')),
      createEnemyMember("e49_3", "Research Clone", "研究克隆体", {atk: 108, def: 68, hp: 660, spd: 5, critChance: 0.25}, getSkills('research_clone')),
      createEnemyMember("e49_4", "Compliance Officer", "合规官员", {atk: 102, def: 75, hp: 740, spd: 3, critChance: 0.15}, getSkills('compliance_officer')),
      createEnemyMember("e49_5", "Reformation Warden", "改革监督", {atk: 118, def: 88, hp: 920, spd: 3, critChance: 0.28}, getSkills('reformation_warden'))
    ]
  },
  {
    id: "50",
    members: [
      createEnemyMember("e50_1", "Calibration Drone", "校准无人机", {atk: 100, def: 65, hp: 640, spd: 7, critChance: 0.15}, getSkills('calibration_drone')),
      createEnemyMember("e50_2", "Institute Guard", "学院守卫", {atk: 108, def: 75, hp: 750, spd: 4, critChance: 0.2}, getSkills('institute_guard')),
      createEnemyMember("e50_3", "Research Clone", "研究克隆体", {atk: 110, def: 72, hp: 690, spd: 5, critChance: 0.25}, getSkills('research_clone')),
      createEnemyMember("e50_4", "Exam Guard", "考试守卫", {atk: 105, def: 78, hp: 780, spd: 3, critChance: 0.18}, getSkills('exam_guard')),
      createEnemyMember("e50_5", "Prison Commander", "监狱指挥官", {atk: 125, def: 95, hp: 1000, spd: 3, critChance: 0.32}, getSkills('prison_commander'))
    ]
  },

  // Stage 51-60: Star God Remnants (Post-merger world)
  {
    id: "51",
    members: [
      createEnemyMember("e51_1", "Constellation Shade", "星座幽影", {atk: 105, def: 55, hp: 650, spd: 6, critChance: 0.18}, getSkills('constellation_shade')),
      createEnemyMember("e51_2", "Symphonie Echo", "乐章回声", {atk: 100, def: 45, hp: 550, spd: 7, critChance: 0.2}, getSkills('symphonie_echo')),
      createEnemyMember("e51_3", "Starlight Wraith", "星光幽魂", {atk: 108, def: 50, hp: 600, spd: 6, critChance: 0.22}, getSkills('starlight_wraith')),
      createEnemyMember("e51_4", "Loom Guardian", "织机守护者", {atk: 115, def: 75, hp: 800, spd: 3, critChance: 0.2}, getSkills('loom_guardian')),
      createEnemyMember("e51_5", "Star God Fragment", "星神残片", {atk: 125, def: 65, hp: 700, spd: 5, critChance: 0.28}, getSkills('star_god_fragment'))
    ]
  },
  {
    id: "52",
    members: [
      createEnemyMember("e52_1", "Symphonie Echo", "乐章回声", {atk: 108, def: 48, hp: 580, spd: 7, critChance: 0.2}, getSkills('symphonie_echo')),
      createEnemyMember("e52_2", "Constellation Shade", "星座幽影", {atk: 110, def: 58, hp: 700, spd: 6, critChance: 0.18}, getSkills('constellation_shade')),
      createEnemyMember("e52_3", "Starlight Wraith", "星光幽魂", {atk: 112, def: 52, hp: 640, spd: 6, critChance: 0.22}, getSkills('starlight_wraith')),
      createEnemyMember("e52_4", "Star God Fragment", "星神残片", {atk: 118, def: 70, hp: 750, spd: 5, critChance: 0.25}, getSkills('star_god_fragment')),
      createEnemyMember("e52_5", "Loom Guardian", "织机守护者", {atk: 130, def: 85, hp: 900, spd: 3, critChance: 0.22}, getSkills('loom_guardian'))
    ]
  },
  {
    id: "53",
    members: [
      createEnemyMember("e53_1", "Constellation Shade", "星座幽影", {atk: 115, def: 62, hp: 750, spd: 6, critChance: 0.2}, getSkills('constellation_shade')),
      createEnemyMember("e53_2", "Symphonie Echo", "乐章回声", {atk: 112, def: 52, hp: 620, spd: 7, critChance: 0.22}, getSkills('symphonie_echo')),
      createEnemyMember("e53_3", "Starlight Wraith", "星光幽魂", {atk: 118, def: 56, hp: 680, spd: 6, critChance: 0.25}, getSkills('starlight_wraith')),
      createEnemyMember("e53_4", "Loom Guardian", "织机守护者", {atk: 125, def: 80, hp: 850, spd: 3, critChance: 0.22}, getSkills('loom_guardian')),
      createEnemyMember("e53_5", "Star God Fragment", "星神残片", {atk: 135, def: 75, hp: 800, spd: 5, critChance: 0.3}, getSkills('star_god_fragment'))
    ]
  },
  {
    id: "54",
    members: [
      createEnemyMember("e54_1", "Symphonie Echo", "乐章回声", {atk: 118, def: 55, hp: 660, spd: 7, critChance: 0.22}, getSkills('symphonie_echo')),
      createEnemyMember("e54_2", "Constellation Shade", "星座幽影", {atk: 120, def: 65, hp: 800, spd: 6, critChance: 0.2}, getSkills('constellation_shade')),
      createEnemyMember("e54_3", "Starlight Wraith", "星光幽魂", {atk: 122, def: 60, hp: 720, spd: 6, critChance: 0.25}, getSkills('starlight_wraith')),
      createEnemyMember("e54_4", "Star God Fragment", "星神残片", {atk: 128, def: 80, hp: 850, spd: 5, critChance: 0.28}, getSkills('star_god_fragment')),
      createEnemyMember("e54_5", "Loom Guardian", "织机守护者", {atk: 140, def: 90, hp: 950, spd: 3, critChance: 0.25}, getSkills('loom_guardian'))
    ]
  },
  {
    id: "55",
    members: [
      createEnemyMember("e55_1", "Constellation Shade", "星座幽影", {atk: 125, def: 68, hp: 850, spd: 6, critChance: 0.22}, getSkills('constellation_shade')),
      createEnemyMember("e55_2", "Symphonie Echo", "乐章回声", {atk: 120, def: 58, hp: 700, spd: 7, critChance: 0.25}, getSkills('symphonie_echo')),
      createEnemyMember("e55_3", "Starlight Wraith", "星光幽魂", {atk: 128, def: 65, hp: 760, spd: 6, critChance: 0.28}, getSkills('starlight_wraith')),
      createEnemyMember("e55_4", "Loom Guardian", "织机守护者", {atk: 135, def: 88, hp: 920, spd: 3, critChance: 0.25}, getSkills('loom_guardian')),
      createEnemyMember("e55_5", "Star God Fragment", "星神残片", {atk: 145, def: 85, hp: 900, spd: 5, critChance: 0.32}, getSkills('star_god_fragment'))
    ]
  },
  {
    id: "56",
    members: [
      createEnemyMember("e56_1", "Symphonie Echo", "乐章回声", {atk: 125, def: 62, hp: 740, spd: 7, critChance: 0.25}, getSkills('symphonie_echo')),
      createEnemyMember("e56_2", "Constellation Shade", "星座幽影", {atk: 130, def: 72, hp: 900, spd: 6, critChance: 0.22}, getSkills('constellation_shade')),
      createEnemyMember("e56_3", "Starlight Wraith", "星光幽魂", {atk: 132, def: 68, hp: 800, spd: 6, critChance: 0.28}, getSkills('starlight_wraith')),
      createEnemyMember("e56_4", "Star God Fragment", "星神残片", {atk: 138, def: 88, hp: 950, spd: 5, critChance: 0.3}, getSkills('star_god_fragment')),
      createEnemyMember("e56_5", "Loom Guardian", "织机守护者", {atk: 150, def: 98, hp: 1050, spd: 3, critChance: 0.28}, getSkills('loom_guardian'))
    ]
  },
  {
    id: "57",
    members: [
      createEnemyMember("e57_1", "Constellation Shade", "星座幽影", {atk: 135, def: 75, hp: 950, spd: 6, critChance: 0.25}, getSkills('constellation_shade')),
      createEnemyMember("e57_2", "Symphonie Echo", "乐章回声", {atk: 130, def: 65, hp: 780, spd: 7, critChance: 0.28}, getSkills('symphonie_echo')),
      createEnemyMember("e57_3", "Starlight Wraith", "星光幽魂", {atk: 138, def: 72, hp: 840, spd: 6, critChance: 0.3}, getSkills('starlight_wraith')),
      createEnemyMember("e57_4", "Loom Guardian", "织机守护者", {atk: 145, def: 95, hp: 1000, spd: 3, critChance: 0.28}, getSkills('loom_guardian')),
      createEnemyMember("e57_5", "Star God Fragment", "星神残片", {atk: 155, def: 92, hp: 1000, spd: 5, critChance: 0.35}, getSkills('star_god_fragment'))
    ]
  },
  {
    id: "58",
    members: [
      createEnemyMember("e58_1", "Symphonie Echo", "乐章回声", {atk: 135, def: 68, hp: 820, spd: 7, critChance: 0.28}, getSkills('symphonie_echo')),
      createEnemyMember("e58_2", "Constellation Shade", "星座幽影", {atk: 140, def: 78, hp: 1000, spd: 6, critChance: 0.25}, getSkills('constellation_shade')),
      createEnemyMember("e58_3", "Starlight Wraith", "星光幽魂", {atk: 142, def: 75, hp: 880, spd: 6, critChance: 0.3}, getSkills('starlight_wraith')),
      createEnemyMember("e58_4", "Star God Fragment", "星神残片", {atk: 148, def: 95, hp: 1050, spd: 5, critChance: 0.32}, getSkills('star_god_fragment')),
      createEnemyMember("e58_5", "Loom Guardian", "织机守护者", {atk: 160, def: 105, hp: 1150, spd: 3, critChance: 0.3}, getSkills('loom_guardian'))
    ]
  },
  {
    id: "59",
    members: [
      createEnemyMember("e59_1", "Constellation Shade", "星座幽影", {atk: 145, def: 82, hp: 1050, spd: 6, critChance: 0.28}, getSkills('constellation_shade')),
      createEnemyMember("e59_2", "Symphonie Echo", "乐章回声", {atk: 140, def: 72, hp: 860, spd: 7, critChance: 0.3}, getSkills('symphonie_echo')),
      createEnemyMember("e59_3", "Starlight Wraith", "星光幽魂", {atk: 148, def: 80, hp: 920, spd: 6, critChance: 0.32}, getSkills('starlight_wraith')),
      createEnemyMember("e59_4", "Loom Guardian", "织机守护者", {atk: 155, def: 102, hp: 1100, spd: 3, critChance: 0.3}, getSkills('loom_guardian')),
      createEnemyMember("e59_5", "Star God Fragment", "星神残片", {atk: 165, def: 100, hp: 1100, spd: 5, critChance: 0.38}, getSkills('star_god_fragment'))
    ]
  },
  {
    id: "60",
    members: [
      createEnemyMember("e60_1", "Symphonie Echo", "乐章回声", {atk: 145, def: 75, hp: 900, spd: 7, critChance: 0.3}, getSkills('symphonie_echo')),
      createEnemyMember("e60_2", "Constellation Shade", "星座幽影", {atk: 150, def: 85, hp: 1100, spd: 6, critChance: 0.28}, getSkills('constellation_shade')),
      createEnemyMember("e60_3", "Starlight Wraith", "星光幽魂", {atk: 152, def: 82, hp: 960, spd: 6, critChance: 0.32}, getSkills('starlight_wraith')),
      createEnemyMember("e60_4", "Star God Fragment", "星神残片", {atk: 158, def: 105, hp: 1150, spd: 5, critChance: 0.35}, getSkills('star_god_fragment')),
      createEnemyMember("e60_5", "Thanatos Fragment", "塔纳托斯残片", {atk: 170, def: 110, hp: 1200, spd: 5, critChance: 0.4}, getSkills('thanatos_fragment'))
    ]
  },

  // Stage 61-70: Music Spirits (Symphony themes)
  {
    id: "61",
    members: [
      createEnemyMember("e61_1", "Melody Fragment", "旋律碎片", {atk: 150, def: 70, hp: 850, spd: 7, critChance: 0.28}, getSkills('melody_fragment')),
      createEnemyMember("e61_2", "Harmony Shade", "和谐幽影", {atk: 145, def: 80, hp: 950, spd: 5, critChance: 0.25}, getSkills('harmony_shade')),
      createEnemyMember("e61_3", "Dissonance Entity", "不协和实体", {atk: 155, def: 65, hp: 800, spd: 6, critChance: 0.3}, getSkills('dissonance_entity')),
      createEnemyMember("e61_4", "Symphony Guardian", "交响乐守护者", {atk: 160, def: 95, hp: 1100, spd: 4, critChance: 0.3}, getSkills('symphony_guardian')),
      createEnemyMember("e61_5", "Lyre Spirit", "竖琴精灵", {atk: 165, def: 85, hp: 1000, spd: 6, critChance: 0.35}, getSkills('lyre_spirit'))
    ]
  },
  {
    id: "62",
    members: [
      createEnemyMember("e62_1", "Harmony Shade", "和谐幽影", {atk: 152, def: 85, hp: 1000, spd: 5, critChance: 0.28}, getSkills('harmony_shade')),
      createEnemyMember("e62_2", "Melody Fragment", "旋律碎片", {atk: 155, def: 72, hp: 880, spd: 7, critChance: 0.3}, getSkills('melody_fragment')),
      createEnemyMember("e62_3", "Dissonance Entity", "不协和实体", {atk: 158, def: 68, hp: 840, spd: 6, critChance: 0.32}, getSkills('dissonance_entity')),
      createEnemyMember("e62_4", "Lyre Spirit", "竖琴精灵", {atk: 168, def: 90, hp: 1050, spd: 6, critChance: 0.35}, getSkills('lyre_spirit')),
      createEnemyMember("e62_5", "Symphony Guardian", "交响乐守护者", {atk: 165, def: 100, hp: 1150, spd: 4, critChance: 0.32}, getSkills('symphony_guardian'))
    ]
  },
  {
    id: "63",
    members: [
      createEnemyMember("e63_1", "Melody Fragment", "旋律碎片", {atk: 158, def: 75, hp: 920, spd: 7, critChance: 0.3}, getSkills('melody_fragment')),
      createEnemyMember("e63_2", "Harmony Shade", "和谐幽影", {atk: 158, def: 90, hp: 1050, spd: 5, critChance: 0.28}, getSkills('harmony_shade')),
      createEnemyMember("e63_3", "Dissonance Entity", "不协和实体", {atk: 162, def: 72, hp: 880, spd: 6, critChance: 0.32}, getSkills('dissonance_entity')),
      createEnemyMember("e63_4", "Symphony Guardian", "交响乐守护者", {atk: 170, def: 105, hp: 1200, spd: 4, critChance: 0.32}, getSkills('symphony_guardian')),
      createEnemyMember("e63_5", "Lyre Spirit", "竖琴精灵", {atk: 175, def: 95, hp: 1100, spd: 6, critChance: 0.38}, getSkills('lyre_spirit'))
    ]
  },
  {
    id: "64",
    members: [
      createEnemyMember("e64_1", "Harmony Shade", "和谐幽影", {atk: 162, def: 95, hp: 1100, spd: 5, critChance: 0.3}, getSkills('harmony_shade')),
      createEnemyMember("e64_2", "Melody Fragment", "旋律碎片", {atk: 162, def: 78, hp: 960, spd: 7, critChance: 0.32}, getSkills('melody_fragment')),
      createEnemyMember("e64_3", "Dissonance Entity", "不协和实体", {atk: 165, def: 75, hp: 920, spd: 6, critChance: 0.35}, getSkills('dissonance_entity')),
      createEnemyMember("e64_4", "Lyre Spirit", "竖琴精灵", {atk: 178, def: 100, hp: 1150, spd: 6, critChance: 0.38}, getSkills('lyre_spirit')),
      createEnemyMember("e64_5", "Symphony Guardian", "交响乐守护者", {atk: 175, def: 110, hp: 1250, spd: 4, critChance: 0.35}, getSkills('symphony_guardian'))
    ]
  },
  {
    id: "65",
    members: [
      createEnemyMember("e65_1", "Melody Fragment", "旋律碎片", {atk: 165, def: 80, hp: 1000, spd: 7, critChance: 0.32}, getSkills('melody_fragment')),
      createEnemyMember("e65_2", "Harmony Shade", "和谐幽影", {atk: 168, def: 100, hp: 1150, spd: 5, critChance: 0.3}, getSkills('harmony_shade')),
      createEnemyMember("e65_3", "Dissonance Entity", "不协和实体", {atk: 170, def: 78, hp: 960, spd: 6, critChance: 0.35}, getSkills('dissonance_entity')),
      createEnemyMember("e65_4", "Symphony Guardian", "交响乐守护者", {atk: 180, def: 115, hp: 1300, spd: 4, critChance: 0.35}, getSkills('symphony_guardian')),
      createEnemyMember("e65_5", "Lyre Spirit", "竖琴精灵", {atk: 185, def: 105, hp: 1200, spd: 6, critChance: 0.4}, getSkills('lyre_spirit'))
    ]
  },
  {
    id: "66",
    members: [
      createEnemyMember("e66_1", "Harmony Shade", "和谐幽影", {atk: 170, def: 105, hp: 1200, spd: 5, critChance: 0.32}, getSkills('harmony_shade')),
      createEnemyMember("e66_2", "Melody Fragment", "旋律碎片", {atk: 168, def: 85, hp: 1040, spd: 7, critChance: 0.35}, getSkills('melody_fragment')),
      createEnemyMember("e66_3", "Dissonance Entity", "不协和实体", {atk: 172, def: 82, hp: 1000, spd: 6, critChance: 0.38}, getSkills('dissonance_entity')),
      createEnemyMember("e66_4", "Lyre Spirit", "竖琴精灵", {atk: 188, def: 110, hp: 1250, spd: 6, critChance: 0.4}, getSkills('lyre_spirit')),
      createEnemyMember("e66_5", "Symphony Guardian", "交响乐守护者", {atk: 185, def: 120, hp: 1350, spd: 4, critChance: 0.38}, getSkills('symphony_guardian'))
    ]
  },
  {
    id: "67",
    members: [
      createEnemyMember("e67_1", "Melody Fragment", "旋律碎片", {atk: 172, def: 88, hp: 1080, spd: 7, critChance: 0.35}, getSkills('melody_fragment')),
      createEnemyMember("e67_2", "Harmony Shade", "和谐幽影", {atk: 175, def: 110, hp: 1250, spd: 5, critChance: 0.32}, getSkills('harmony_shade')),
      createEnemyMember("e67_3", "Dissonance Entity", "不协和实体", {atk: 175, def: 85, hp: 1040, spd: 6, critChance: 0.38}, getSkills('dissonance_entity')),
      createEnemyMember("e67_4", "Symphony Guardian", "交响乐守护者", {atk: 190, def: 125, hp: 1400, spd: 4, critChance: 0.38}, getSkills('symphony_guardian')),
      createEnemyMember("e67_5", "Lyre Spirit", "竖琴精灵", {atk: 195, def: 115, hp: 1300, spd: 6, critChance: 0.42}, getSkills('lyre_spirit'))
    ]
  },
  {
    id: "68",
    members: [
      createEnemyMember("e68_1", "Harmony Shade", "和谐幽影", {atk: 178, def: 115, hp: 1300, spd: 5, critChance: 0.35}, getSkills('harmony_shade')),
      createEnemyMember("e68_2", "Melody Fragment", "旋律碎片", {atk: 175, def: 92, hp: 1120, spd: 7, critChance: 0.38}, getSkills('melody_fragment')),
      createEnemyMember("e68_3", "Dissonance Entity", "不协和实体", {atk: 178, def: 88, hp: 1080, spd: 6, critChance: 0.4}, getSkills('dissonance_entity')),
      createEnemyMember("e68_4", "Lyre Spirit", "竖琴精灵", {atk: 198, def: 120, hp: 1350, spd: 6, critChance: 0.42}, getSkills('lyre_spirit')),
      createEnemyMember("e68_5", "Symphony Guardian", "交响乐守护者", {atk: 195, def: 130, hp: 1450, spd: 4, critChance: 0.4}, getSkills('symphony_guardian'))
    ]
  },
  {
    id: "69",
    members: [
      createEnemyMember("e69_1", "Melody Fragment", "旋律碎片", {atk: 180, def: 95, hp: 1160, spd: 7, critChance: 0.38}, getSkills('melody_fragment')),
      createEnemyMember("e69_2", "Harmony Shade", "和谐幽影", {atk: 182, def: 120, hp: 1350, spd: 5, critChance: 0.35}, getSkills('harmony_shade')),
      createEnemyMember("e69_3", "Dissonance Entity", "不协和实体", {atk: 180, def: 92, hp: 1120, spd: 6, critChance: 0.4}, getSkills('dissonance_entity')),
      createEnemyMember("e69_4", "Symphony Guardian", "交响乐守护者", {atk: 200, def: 135, hp: 1500, spd: 4, critChance: 0.4}, getSkills('symphony_guardian')),
      createEnemyMember("e69_5", "Lyre Spirit", "竖琴精灵", {atk: 205, def: 125, hp: 1400, spd: 6, critChance: 0.45}, getSkills('lyre_spirit'))
    ]
  },
  {
    id: "70",
    members: [
      createEnemyMember("e70_1", "Harmony Shade", "和谐幽影", {atk: 185, def: 125, hp: 1400, spd: 5, critChance: 0.38}, getSkills('harmony_shade')),
      createEnemyMember("e70_2", "Melody Fragment", "旋律碎片", {atk: 182, def: 98, hp: 1200, spd: 7, critChance: 0.4}, getSkills('melody_fragment')),
      createEnemyMember("e70_3", "Dissonance Entity", "不协和实体", {atk: 182, def: 95, hp: 1160, spd: 6, critChance: 0.42}, getSkills('dissonance_entity')),
      createEnemyMember("e70_4", "Lyre Spirit", "竖琴精灵", {atk: 208, def: 130, hp: 1450, spd: 6, critChance: 0.45}, getSkills('lyre_spirit')),
      createEnemyMember("e70_5", "Meteor Entity", "陨星实体", {atk: 215, def: 120, hp: 1350, spd: 6, critChance: 0.48}, getSkills('meteor_entity'))
    ]
  },

  // Stage 71-80: Hope and Future (Homecoming themes)
  {
    id: "71",
    members: [
      createEnemyMember("e71_1", "Future Echo", "未来回声", {atk: 185, def: 100, hp: 1150, spd: 7, critChance: 0.38}, getSkills('future_echo')),
      createEnemyMember("e71_2", "Memory Fragment", "记忆碎片", {atk: 188, def: 90, hp: 1050, spd: 6, critChance: 0.4}, getSkills('memory_fragment')),
      createEnemyMember("e71_3", "Possibility Shade", "可能性幽影", {atk: 192, def: 115, hp: 1350, spd: 4, critChance: 0.38}, getSkills('possibility_shade')),
      createEnemyMember("e71_4", "Eternal Harmony", "永恒和谐", {atk: 198, def: 130, hp: 1500, spd: 5, critChance: 0.42}, getSkills('eternal_harmony')),
      createEnemyMember("e71_5", "Origin Compass", "起源罗盘", {atk: 205, def: 140, hp: 1600, spd: 5, critChance: 0.45}, getSkills('origin_compass'))
    ]
  },
  {
    id: "72",
    members: [
      createEnemyMember("e72_1", "Memory Fragment", "记忆碎片", {atk: 188, def: 95, hp: 1100, spd: 6, critChance: 0.4}, getSkills('memory_fragment')),
      createEnemyMember("e72_2", "Future Echo", "未来回声", {atk: 190, def: 105, hp: 1200, spd: 7, critChance: 0.4}, getSkills('future_echo')),
      createEnemyMember("e72_3", "Possibility Shade", "可能性幽影", {atk: 195, def: 120, hp: 1400, spd: 4, critChance: 0.4}, getSkills('possibility_shade')),
      createEnemyMember("e72_4", "Origin Compass", "起源罗盘", {atk: 208, def: 145, hp: 1650, spd: 5, critChance: 0.45}, getSkills('origin_compass')),
      createEnemyMember("e72_5", "Eternal Harmony", "永恒和谐", {atk: 202, def: 135, hp: 1550, spd: 5, critChance: 0.45}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "73",
    members: [
      createEnemyMember("e73_1", "Future Echo", "未来回声", {atk: 192, def: 108, hp: 1250, spd: 7, critChance: 0.42}, getSkills('future_echo')),
      createEnemyMember("e73_2", "Memory Fragment", "记忆碎片", {atk: 192, def: 100, hp: 1150, spd: 6, critChance: 0.42}, getSkills('memory_fragment')),
      createEnemyMember("e73_3", "Possibility Shade", "可能性幽影", {atk: 198, def: 125, hp: 1450, spd: 4, critChance: 0.42}, getSkills('possibility_shade')),
      createEnemyMember("e73_4", "Eternal Harmony", "永恒和谐", {atk: 205, def: 140, hp: 1600, spd: 5, critChance: 0.45}, getSkills('eternal_harmony')),
      createEnemyMember("e73_5", "Origin Compass", "起源罗盘", {atk: 212, def: 150, hp: 1700, spd: 5, critChance: 0.48}, getSkills('origin_compass'))
    ]
  },
  {
    id: "74",
    members: [
      createEnemyMember("e74_1", "Memory Fragment", "记忆碎片", {atk: 195, def: 105, hp: 1200, spd: 6, critChance: 0.42}, getSkills('memory_fragment')),
      createEnemyMember("e74_2", "Future Echo", "未来回声", {atk: 195, def: 112, hp: 1300, spd: 7, critChance: 0.42}, getSkills('future_echo')),
      createEnemyMember("e74_3", "Possibility Shade", "可能性幽影", {atk: 200, def: 130, hp: 1500, spd: 4, critChance: 0.42}, getSkills('possibility_shade')),
      createEnemyMember("e74_4", "Origin Compass", "起源罗盘", {atk: 215, def: 155, hp: 1750, spd: 5, critChance: 0.48}, getSkills('origin_compass')),
      createEnemyMember("e74_5", "Eternal Harmony", "永恒和谐", {atk: 208, def: 145, hp: 1650, spd: 5, critChance: 0.48}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "75",
    members: [
      createEnemyMember("e75_1", "Future Echo", "未来回声", {atk: 198, def: 115, hp: 1350, spd: 7, critChance: 0.45}, getSkills('future_echo')),
      createEnemyMember("e75_2", "Memory Fragment", "记忆碎片", {atk: 198, def: 110, hp: 1250, spd: 6, critChance: 0.45}, getSkills('memory_fragment')),
      createEnemyMember("e75_3", "Possibility Shade", "可能性幽影", {atk: 202, def: 135, hp: 1550, spd: 4, critChance: 0.45}, getSkills('possibility_shade')),
      createEnemyMember("e75_4", "Eternal Harmony", "永恒和谐", {atk: 210, def: 150, hp: 1700, spd: 5, critChance: 0.48}, getSkills('eternal_harmony')),
      createEnemyMember("e75_5", "Origin Compass", "起源罗盘", {atk: 218, def: 160, hp: 1800, spd: 5, critChance: 0.5}, getSkills('origin_compass'))
    ]
  },
  {
    id: "76",
    members: [
      createEnemyMember("e76_1", "Memory Fragment", "记忆碎片", {atk: 200, def: 115, hp: 1300, spd: 6, critChance: 0.45}, getSkills('memory_fragment')),
      createEnemyMember("e76_2", "Future Echo", "未来回声", {atk: 200, def: 118, hp: 1400, spd: 7, critChance: 0.45}, getSkills('future_echo')),
      createEnemyMember("e76_3", "Possibility Shade", "可能性幽影", {atk: 205, def: 140, hp: 1600, spd: 4, critChance: 0.45}, getSkills('possibility_shade')),
      createEnemyMember("e76_4", "Origin Compass", "起源罗盘", {atk: 220, def: 165, hp: 1850, spd: 5, critChance: 0.5}, getSkills('origin_compass')),
      createEnemyMember("e76_5", "Eternal Harmony", "永恒和谐", {atk: 212, def: 155, hp: 1750, spd: 5, critChance: 0.5}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "77",
    members: [
      createEnemyMember("e77_1", "Future Echo", "未来回声", {atk: 202, def: 122, hp: 1450, spd: 7, critChance: 0.48}, getSkills('future_echo')),
      createEnemyMember("e77_2", "Memory Fragment", "记忆碎片", {atk: 202, def: 120, hp: 1350, spd: 6, critChance: 0.48}, getSkills('memory_fragment')),
      createEnemyMember("e77_3", "Possibility Shade", "可能性幽影", {atk: 208, def: 145, hp: 1650, spd: 4, critChance: 0.48}, getSkills('possibility_shade')),
      createEnemyMember("e77_4", "Eternal Harmony", "永恒和谐", {atk: 215, def: 160, hp: 1800, spd: 5, critChance: 0.5}, getSkills('eternal_harmony')),
      createEnemyMember("e77_5", "Origin Compass", "起源罗盘", {atk: 222, def: 170, hp: 1900, spd: 5, critChance: 0.52}, getSkills('origin_compass'))
    ]
  },
  {
    id: "78",
    members: [
      createEnemyMember("e78_1", "Memory Fragment", "记忆碎片", {atk: 205, def: 125, hp: 1400, spd: 6, critChance: 0.48}, getSkills('memory_fragment')),
      createEnemyMember("e78_2", "Future Echo", "未来回声", {atk: 205, def: 125, hp: 1500, spd: 7, critChance: 0.48}, getSkills('future_echo')),
      createEnemyMember("e78_3", "Possibility Shade", "可能性幽影", {atk: 210, def: 150, hp: 1700, spd: 4, critChance: 0.48}, getSkills('possibility_shade')),
      createEnemyMember("e78_4", "Origin Compass", "起源罗盘", {atk: 225, def: 175, hp: 1950, spd: 5, critChance: 0.52}, getSkills('origin_compass')),
      createEnemyMember("e78_5", "Eternal Harmony", "永恒和谐", {atk: 218, def: 165, hp: 1850, spd: 5, critChance: 0.52}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "79",
    members: [
      createEnemyMember("e79_1", "Future Echo", "未来回声", {atk: 208, def: 128, hp: 1550, spd: 7, critChance: 0.5}, getSkills('future_echo')),
      createEnemyMember("e79_2", "Memory Fragment", "记忆碎片", {atk: 208, def: 130, hp: 1450, spd: 6, critChance: 0.5}, getSkills('memory_fragment')),
      createEnemyMember("e79_3", "Possibility Shade", "可能性幽影", {atk: 212, def: 155, hp: 1750, spd: 4, critChance: 0.5}, getSkills('possibility_shade')),
      createEnemyMember("e79_4", "Eternal Harmony", "永恒和谐", {atk: 220, def: 170, hp: 1900, spd: 5, critChance: 0.52}, getSkills('eternal_harmony')),
      createEnemyMember("e79_5", "Origin Compass", "起源罗盘", {atk: 228, def: 180, hp: 2000, spd: 5, critChance: 0.55}, getSkills('origin_compass'))
    ]
  },
  {
    id: "80",
    members: [
      createEnemyMember("e80_1", "Memory Fragment", "记忆碎片", {atk: 210, def: 135, hp: 1500, spd: 6, critChance: 0.5}, getSkills('memory_fragment')),
      createEnemyMember("e80_2", "Future Echo", "未来回声", {atk: 210, def: 132, hp: 1600, spd: 7, critChance: 0.5}, getSkills('future_echo')),
      createEnemyMember("e80_3", "Possibility Shade", "可能性幽影", {atk: 215, def: 160, hp: 1800, spd: 4, critChance: 0.5}, getSkills('possibility_shade')),
      createEnemyMember("e80_4", "Origin Compass", "起源罗盘", {atk: 230, def: 185, hp: 2050, spd: 5, critChance: 0.55}, getSkills('origin_compass')),
      createEnemyMember("e80_5", "Worldline Controller", "世界线控制者", {atk: 235, def: 175, hp: 1900, spd: 6, critChance: 0.58}, getSkills('worldline_controller'))
    ]
  },

  // Stage 81-90: Final Challenges
  {
    id: "81",
    members: [
      createEnemyMember("e81_1", "Future Echo", "未来回声", {atk: 212, def: 138, hp: 1600, spd: 7, critChance: 0.5}, getSkills('future_echo')),
      createEnemyMember("e81_2", "Memory Fragment", "记忆碎片", {atk: 212, def: 138, hp: 1550, spd: 6, critChance: 0.52}, getSkills('memory_fragment')),
      createEnemyMember("e81_3", "Possibility Shade", "可能性幽影", {atk: 218, def: 165, hp: 1850, spd: 4, critChance: 0.52}, getSkills('possibility_shade')),
      createEnemyMember("e81_4", "Eternal Harmony", "永恒和谐", {atk: 225, def: 178, hp: 1950, spd: 5, critChance: 0.55}, getSkills('eternal_harmony')),
      createEnemyMember("e81_5", "Origin Compass", "起源罗盘", {atk: 232, def: 190, hp: 2100, spd: 5, critChance: 0.58}, getSkills('origin_compass'))
    ]
  },
  {
    id: "82",
    members: [
      createEnemyMember("e82_1", "Memory Fragment", "记忆碎片", {atk: 215, def: 142, hp: 1600, spd: 6, critChance: 0.52}, getSkills('memory_fragment')),
      createEnemyMember("e82_2", "Future Echo", "未来回声", {atk: 215, def: 140, hp: 1650, spd: 7, critChance: 0.52}, getSkills('future_echo')),
      createEnemyMember("e82_3", "Possibility Shade", "可能性幽影", {atk: 220, def: 170, hp: 1900, spd: 4, critChance: 0.52}, getSkills('possibility_shade')),
      createEnemyMember("e82_4", "Origin Compass", "起源罗盘", {atk: 235, def: 195, hp: 2150, spd: 5, critChance: 0.58}, getSkills('origin_compass')),
      createEnemyMember("e82_5", "Eternal Harmony", "永恒和谐", {atk: 228, def: 182, hp: 2000, spd: 5, critChance: 0.58}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "83",
    members: [
      createEnemyMember("e83_1", "Future Echo", "未来回声", {atk: 218, def: 145, hp: 1700, spd: 7, critChance: 0.52}, getSkills('future_echo')),
      createEnemyMember("e83_2", "Memory Fragment", "记忆碎片", {atk: 218, def: 145, hp: 1650, spd: 6, critChance: 0.55}, getSkills('memory_fragment')),
      createEnemyMember("e83_3", "Possibility Shade", "可能性幽影", {atk: 222, def: 175, hp: 1950, spd: 4, critChance: 0.55}, getSkills('possibility_shade')),
      createEnemyMember("e83_4", "Eternal Harmony", "永恒和谐", {atk: 230, def: 188, hp: 2050, spd: 5, critChance: 0.58}, getSkills('eternal_harmony')),
      createEnemyMember("e83_5", "Origin Compass", "起源罗盘", {atk: 238, def: 200, hp: 2200, spd: 5, critChance: 0.6}, getSkills('origin_compass'))
    ]
  },
  {
    id: "84",
    members: [
      createEnemyMember("e84_1", "Memory Fragment", "记忆碎片", {atk: 220, def: 148, hp: 1700, spd: 6, critChance: 0.55}, getSkills('memory_fragment')),
      createEnemyMember("e84_2", "Future Echo", "未来回声", {atk: 220, def: 148, hp: 1750, spd: 7, critChance: 0.55}, getSkills('future_echo')),
      createEnemyMember("e84_3", "Possibility Shade", "可能性幽影", {atk: 225, def: 180, hp: 2000, spd: 4, critChance: 0.55}, getSkills('possibility_shade')),
      createEnemyMember("e84_4", "Origin Compass", "起源罗盘", {atk: 240, def: 205, hp: 2250, spd: 5, critChance: 0.6}, getSkills('origin_compass')),
      createEnemyMember("e84_5", "Eternal Harmony", "永恒和谐", {atk: 232, def: 192, hp: 2100, spd: 5, critChance: 0.6}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "85",
    members: [
      createEnemyMember("e85_1", "Future Echo", "未来回声", {atk: 222, def: 152, hp: 1800, spd: 7, critChance: 0.55}, getSkills('future_echo')),
      createEnemyMember("e85_2", "Memory Fragment", "记忆碎片", {atk: 222, def: 152, hp: 1750, spd: 6, critChance: 0.58}, getSkills('memory_fragment')),
      createEnemyMember("e85_3", "Possibility Shade", "可能性幽影", {atk: 228, def: 185, hp: 2050, spd: 4, critChance: 0.58}, getSkills('possibility_shade')),
      createEnemyMember("e85_4", "Eternal Harmony", "永恒和谐", {atk: 235, def: 195, hp: 2150, spd: 5, critChance: 0.6}, getSkills('eternal_harmony')),
      createEnemyMember("e85_5", "Origin Compass", "起源罗盘", {atk: 242, def: 210, hp: 2300, spd: 5, critChance: 0.62}, getSkills('origin_compass'))
    ]
  },
  {
    id: "86",
    members: [
      createEnemyMember("e86_1", "Memory Fragment", "记忆碎片", {atk: 225, def: 155, hp: 1800, spd: 6, critChance: 0.58}, getSkills('memory_fragment')),
      createEnemyMember("e86_2", "Future Echo", "未来回声", {atk: 225, def: 155, hp: 1850, spd: 7, critChance: 0.58}, getSkills('future_echo')),
      createEnemyMember("e86_3", "Possibility Shade", "可能性幽影", {atk: 230, def: 190, hp: 2100, spd: 4, critChance: 0.58}, getSkills('possibility_shade')),
      createEnemyMember("e86_4", "Origin Compass", "起源罗盘", {atk: 245, def: 215, hp: 2350, spd: 5, critChance: 0.62}, getSkills('origin_compass')),
      createEnemyMember("e86_5", "Eternal Harmony", "永恒和谐", {atk: 238, def: 200, hp: 2200, spd: 5, critChance: 0.62}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "87",
    members: [
      createEnemyMember("e87_1", "Future Echo", "未来回声", {atk: 228, def: 158, hp: 1900, spd: 7, critChance: 0.58}, getSkills('future_echo')),
      createEnemyMember("e87_2", "Memory Fragment", "记忆碎片", {atk: 228, def: 158, hp: 1850, spd: 6, critChance: 0.6}, getSkills('memory_fragment')),
      createEnemyMember("e87_3", "Possibility Shade", "可能性幽影", {atk: 232, def: 195, hp: 2150, spd: 4, critChance: 0.6}, getSkills('possibility_shade')),
      createEnemyMember("e87_4", "Eternal Harmony", "永恒和谐", {atk: 240, def: 205, hp: 2250, spd: 5, critChance: 0.62}, getSkills('eternal_harmony')),
      createEnemyMember("e87_5", "Origin Compass", "起源罗盘", {atk: 248, def: 220, hp: 2400, spd: 5, critChance: 0.65}, getSkills('origin_compass'))
    ]
  },
  {
    id: "88",
    members: [
      createEnemyMember("e88_1", "Memory Fragment", "记忆碎片", {atk: 230, def: 162, hp: 1900, spd: 6, critChance: 0.6}, getSkills('memory_fragment')),
      createEnemyMember("e88_2", "Future Echo", "未来回声", {atk: 230, def: 162, hp: 1950, spd: 7, critChance: 0.6}, getSkills('future_echo')),
      createEnemyMember("e88_3", "Possibility Shade", "可能性幽影", {atk: 235, def: 200, hp: 2200, spd: 4, critChance: 0.6}, getSkills('possibility_shade')),
      createEnemyMember("e88_4", "Origin Compass", "起源罗盘", {atk: 250, def: 225, hp: 2450, spd: 5, critChance: 0.65}, getSkills('origin_compass')),
      createEnemyMember("e88_5", "Eternal Harmony", "永恒和谐", {atk: 242, def: 210, hp: 2300, spd: 5, critChance: 0.65}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "89",
    members: [
      createEnemyMember("e89_1", "Future Echo", "未来回声", {atk: 232, def: 165, hp: 2000, spd: 7, critChance: 0.6}, getSkills('future_echo')),
      createEnemyMember("e89_2", "Memory Fragment", "记忆碎片", {atk: 232, def: 165, hp: 1950, spd: 6, critChance: 0.62}, getSkills('memory_fragment')),
      createEnemyMember("e89_3", "Possibility Shade", "可能性幽影", {atk: 238, def: 205, hp: 2250, spd: 4, critChance: 0.62}, getSkills('possibility_shade')),
      createEnemyMember("e89_4", "Eternal Harmony", "永恒和谐", {atk: 245, def: 215, hp: 2350, spd: 5, critChance: 0.65}, getSkills('eternal_harmony')),
      createEnemyMember("e89_5", "Origin Compass", "起源罗盘", {atk: 252, def: 230, hp: 2500, spd: 5, critChance: 0.68}, getSkills('origin_compass'))
    ]
  },
  {
    id: "90",
    members: [
      createEnemyMember("e90_1", "Memory Fragment", "记忆碎片", {atk: 235, def: 168, hp: 2000, spd: 6, critChance: 0.62}, getSkills('memory_fragment')),
      createEnemyMember("e90_2", "Future Echo", "未来回声", {atk: 235, def: 168, hp: 2050, spd: 7, critChance: 0.62}, getSkills('future_echo')),
      createEnemyMember("e90_3", "Possibility Shade", "可能性幽影", {atk: 240, def: 210, hp: 2300, spd: 4, critChance: 0.62}, getSkills('possibility_shade')),
      createEnemyMember("e90_4", "Origin Compass", "起源罗盘", {atk: 255, def: 235, hp: 2550, spd: 5, critChance: 0.68}, getSkills('origin_compass')),
      createEnemyMember("e90_5", "Synthesizer", "合成者", {atk: 260, def: 225, hp: 2450, spd: 6, critChance: 0.7}, getSkills('synthesizer'))
    ]
  },

  // Stage 91-100: Final Bosses
  {
    id: "91",
    members: [
      createEnemyMember("e91_1", "Future Echo", "未来回声", {atk: 238, def: 172, hp: 2100, spd: 7, critChance: 0.62}, getSkills('future_echo')),
      createEnemyMember("e91_2", "Memory Fragment", "记忆碎片", {atk: 238, def: 172, hp: 2050, spd: 6, critChance: 0.65}, getSkills('memory_fragment')),
      createEnemyMember("e91_3", "Possibility Shade", "可能性幽影", {atk: 242, def: 215, hp: 2350, spd: 4, critChance: 0.65}, getSkills('possibility_shade')),
      createEnemyMember("e91_4", "Eternal Harmony", "永恒和谐", {atk: 250, def: 220, hp: 2400, spd: 5, critChance: 0.68}, getSkills('eternal_harmony')),
      createEnemyMember("e91_5", "Origin Compass", "起源罗盘", {atk: 258, def: 240, hp: 2600, spd: 5, critChance: 0.7}, getSkills('origin_compass'))
    ]
  },
  {
    id: "92",
    members: [
      createEnemyMember("e92_1", "Memory Fragment", "记忆碎片", {atk: 240, def: 175, hp: 2100, spd: 6, critChance: 0.65}, getSkills('memory_fragment')),
      createEnemyMember("e92_2", "Future Echo", "未来回声", {atk: 240, def: 175, hp: 2150, spd: 7, critChance: 0.65}, getSkills('future_echo')),
      createEnemyMember("e92_3", "Possibility Shade", "可能性幽影", {atk: 245, def: 220, hp: 2400, spd: 4, critChance: 0.65}, getSkills('possibility_shade')),
      createEnemyMember("e92_4", "Origin Compass", "起源罗盘", {atk: 260, def: 245, hp: 2650, spd: 5, critChance: 0.7}, getSkills('origin_compass')),
      createEnemyMember("e92_5", "Eternal Harmony", "永恒和谐", {atk: 252, def: 225, hp: 2450, spd: 5, critChance: 0.7}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "93",
    members: [
      createEnemyMember("e93_1", "Future Echo", "未来回声", {atk: 242, def: 178, hp: 2200, spd: 7, critChance: 0.65}, getSkills('future_echo')),
      createEnemyMember("e93_2", "Memory Fragment", "记忆碎片", {atk: 242, def: 178, hp: 2150, spd: 6, critChance: 0.68}, getSkills('memory_fragment')),
      createEnemyMember("e93_3", "Possibility Shade", "可能性幽影", {atk: 248, def: 225, hp: 2450, spd: 4, critChance: 0.68}, getSkills('possibility_shade')),
      createEnemyMember("e93_4", "Eternal Harmony", "永恒和谐", {atk: 255, def: 230, hp: 2500, spd: 5, critChance: 0.7}, getSkills('eternal_harmony')),
      createEnemyMember("e93_5", "Origin Compass", "起源罗盘", {atk: 262, def: 250, hp: 2700, spd: 5, critChance: 0.72}, getSkills('origin_compass'))
    ]
  },
  {
    id: "94",
    members: [
      createEnemyMember("e94_1", "Memory Fragment", "记忆碎片", {atk: 245, def: 182, hp: 2200, spd: 6, critChance: 0.68}, getSkills('memory_fragment')),
      createEnemyMember("e94_2", "Future Echo", "未来回声", {atk: 245, def: 182, hp: 2250, spd: 7, critChance: 0.68}, getSkills('future_echo')),
      createEnemyMember("e94_3", "Possibility Shade", "可能性幽影", {atk: 250, def: 230, hp: 2500, spd: 4, critChance: 0.68}, getSkills('possibility_shade')),
      createEnemyMember("e94_4", "Origin Compass", "起源罗盘", {atk: 265, def: 255, hp: 2750, spd: 5, critChance: 0.72}, getSkills('origin_compass')),
      createEnemyMember("e94_5", "Eternal Harmony", "永恒和谐", {atk: 258, def: 235, hp: 2550, spd: 5, critChance: 0.72}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "95",
    members: [
      createEnemyMember("e95_1", "Future Echo", "未来回声", {atk: 248, def: 185, hp: 2300, spd: 7, critChance: 0.68}, getSkills('future_echo')),
      createEnemyMember("e95_2", "Memory Fragment", "记忆碎片", {atk: 248, def: 185, hp: 2250, spd: 6, critChance: 0.7}, getSkills('memory_fragment')),
      createEnemyMember("e95_3", "Possibility Shade", "可能性幽影", {atk: 252, def: 235, hp: 2550, spd: 4, critChance: 0.7}, getSkills('possibility_shade')),
      createEnemyMember("e95_4", "Eternal Harmony", "永恒和谐", {atk: 260, def: 240, hp: 2600, spd: 5, critChance: 0.72}, getSkills('eternal_harmony')),
      createEnemyMember("e95_5", "Origin Compass", "起源罗盘", {atk: 268, def: 260, hp: 2800, spd: 5, critChance: 0.75}, getSkills('origin_compass'))
    ]
  },
  {
    id: "96",
    members: [
      createEnemyMember("e96_1", "Memory Fragment", "记忆碎片", {atk: 250, def: 188, hp: 2350, spd: 6, critChance: 0.7}, getSkills('memory_fragment')),
      createEnemyMember("e96_2", "Future Echo", "未来回声", {atk: 250, def: 188, hp: 2350, spd: 7, critChance: 0.7}, getSkills('future_echo')),
      createEnemyMember("e96_3", "Possibility Shade", "可能性幽影", {atk: 255, def: 240, hp: 2600, spd: 4, critChance: 0.7}, getSkills('possibility_shade')),
      createEnemyMember("e96_4", "Origin Compass", "起源罗盘", {atk: 270, def: 265, hp: 2850, spd: 5, critChance: 0.75}, getSkills('origin_compass')),
      createEnemyMember("e96_5", "Eternal Harmony", "永恒和谐", {atk: 262, def: 245, hp: 2650, spd: 5, critChance: 0.75}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "97",
    members: [
      createEnemyMember("e97_1", "Future Echo", "未来回声", {atk: 252, def: 192, hp: 2400, spd: 7, critChance: 0.7}, getSkills('future_echo')),
      createEnemyMember("e97_2", "Memory Fragment", "记忆碎片", {atk: 252, def: 192, hp: 2350, spd: 6, critChance: 0.72}, getSkills('memory_fragment')),
      createEnemyMember("e97_3", "Possibility Shade", "可能性幽影", {atk: 258, def: 245, hp: 2650, spd: 4, critChance: 0.72}, getSkills('possibility_shade')),
      createEnemyMember("e97_4", "Eternal Harmony", "永恒和谐", {atk: 265, def: 250, hp: 2700, spd: 5, critChance: 0.75}, getSkills('eternal_harmony')),
      createEnemyMember("e97_5", "Origin Compass", "起源罗盘", {atk: 272, def: 270, hp: 2900, spd: 5, critChance: 0.78}, getSkills('origin_compass'))
    ]
  },
  {
    id: "98",
    members: [
      createEnemyMember("e98_1", "Memory Fragment", "记忆碎片", {atk: 255, def: 195, hp: 2450, spd: 6, critChance: 0.72}, getSkills('memory_fragment')),
      createEnemyMember("e98_2", "Future Echo", "未来回声", {atk: 255, def: 195, hp: 2450, spd: 7, critChance: 0.72}, getSkills('future_echo')),
      createEnemyMember("e98_3", "Possibility Shade", "可能性幽影", {atk: 260, def: 250, hp: 2700, spd: 4, critChance: 0.72}, getSkills('possibility_shade')),
      createEnemyMember("e98_4", "Origin Compass", "起源罗盘", {atk: 275, def: 275, hp: 2950, spd: 5, critChance: 0.78}, getSkills('origin_compass')),
      createEnemyMember("e98_5", "Eternal Harmony", "永恒和谐", {atk: 268, def: 255, hp: 2750, spd: 5, critChance: 0.78}, getSkills('eternal_harmony'))
    ]
  },
  {
    id: "99",
    members: [
      createEnemyMember("e99_1", "Future Echo", "未来回声", {atk: 258, def: 198, hp: 2500, spd: 7, critChance: 0.72}, getSkills('future_echo')),
      createEnemyMember("e99_2", "Memory Fragment", "记忆碎片", {atk: 258, def: 198, hp: 2450, spd: 6, critChance: 0.75}, getSkills('memory_fragment')),
      createEnemyMember("e99_3", "Possibility Shade", "可能性幽影", {atk: 262, def: 255, hp: 2750, spd: 4, critChance: 0.75}, getSkills('possibility_shade')),
      createEnemyMember("e99_4", "Eternal Harmony", "永恒和谐", {atk: 270, def: 260, hp: 2800, spd: 5, critChance: 0.78}, getSkills('eternal_harmony')),
      createEnemyMember("e99_5", "Origin Compass", "起源罗盘", {atk: 278, def: 280, hp: 3000, spd: 5, critChance: 0.8}, getSkills('origin_compass'))
    ]
  },
  {
    id: "100",
    members: [
      createEnemyMember("e100_1", "Memory Fragment", "记忆碎片", {atk: 260, def: 200, hp: 2500, spd: 6, critChance: 0.75}, getSkills('memory_fragment')),
      createEnemyMember("e100_2", "Future Echo", "未来回声", {atk: 260, def: 200, hp: 2550, spd: 7, critChance: 0.75}, getSkills('future_echo')),
      createEnemyMember("e100_3", "Possibility Shade", "可能性幽影", {atk: 265, def: 260, hp: 2800, spd: 4, critChance: 0.75}, getSkills('possibility_shade')),
      createEnemyMember("e100_4", "Eternal Harmony", "永恒和谐", {atk: 275, def: 265, hp: 2850, spd: 5, critChance: 0.8}, getSkills('eternal_harmony')),
      createEnemyMember("e100_5", "The Synthesizer", "合成者", {atk: 300, def: 280, hp: 3500, spd: 7, critChance: 0.85}, getSkills('synthesizer'))
    ]
  }
]
