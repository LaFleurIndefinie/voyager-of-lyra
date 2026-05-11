// Enemy skills - novel-themed skills for Le Foyer du Futur

export const ENEMY_SKILLS = {
  // Basic attack
  basic_attack: {
    id: "basic_attack",
    name: "Attack",
    nameZh: "攻击",
    type: "normal_attack",
    description: "Basic physical attack"
  },

  // Multi-target attacks
  double_strike: {
    id: "double_strike",
    name: "Double Strike",
    nameZh: "双重打击",
    type: "multi_attack",
    targets: 2,
    cooldown: 0,
    description: "Attacks two enemies"
  },

  // Stun skill
  power_strike: {
    id: "power_strike",
    name: "Power Strike",
    nameZh: "强力打击",
    type: "stun",
    duration: 1,
    cooldown: 4,
    description: "Strong attack that stuns"
  },

  // Debuff skills
  weaken: {
    id: "weaken",
    name: "Weaken",
    nameZh: "削弱",
    type: "debuff",
    duration: 2,
    atkMult: 0.8,
    defMult: 0.8,
    cooldown: 3,
    description: "Reduces ATK and DEF"
  },

  slow: {
    id: "slow",
    name: "Slow",
    nameZh: "减速",
    type: "slow",
    duration: 2,
    spdMult: 0.7,
    cooldown: 3,
    description: "Reduces SPD"
  },

  // Buff skills
  battle_cry: {
    id: "battle_cry",
    name: "Battle Cry",
    nameZh: "战吼",
    type: "buff",
    duration: 2,
    atkMult: 1.3,
    cooldown: 4,
    description: "Increases ATK"
  },

  fortify: {
    id: "fortify",
    name: "Fortify",
    nameZh: "强化防御",
    type: "buff",
    duration: 2,
    defMult: 1.4,
    cooldown: 4,
    description: "Increases DEF"
  },

  // Heal skills
  group_heal: {
    id: "group_heal",
    name: "Group Heal",
    nameZh: "群体治疗",
    type: "heal_percent",
    pct: 0.3,
    targets: 2,
    cooldown: 5,
    description: "Heals allies"
  },

  // Shield skills
  barrier: {
    id: "barrier",
    name: "Barrier",
    nameZh: "屏障",
    type: "shield",
    blocks: 2,
    targets: 1,
    cooldown: 4,
    description: "Creates shield"
  },

  // Execute (bonus damage to low HP)
  execute: {
    id: "execute",
    name: "Execute",
    nameZh: "处决",
    type: "execute",
    hpThreshold: 0.3,
    dmgMult: 2.0,
    cooldown: 3,
    description: "Bonus damage to low HP enemies"
  },

  // Resurrect
  soul_revival: {
    id: "soul_revival",
    name: "Soul Revival",
    nameZh: "灵魂复苏",
    type: "resurrect",
    hpPct: 0.3,
    cooldown: 8,
    description: "Revives fallen ally"
  },

  // Special boss skills
  meteor_strike: {
    id: "meteor_strike",
    name: "Meteor Strike",
    nameZh: "陨石打击",
    type: "multi_attack_random",
    hits: 4,
    minDmgPct: 0.6,
    maxDmgPct: 0.9,
    cooldown: 5,
    description: "Devastating area attack"
  },

  ancient_wrath: {
    id: "ancient_wrath",
    name: "Ancient Wrath",
    nameZh: "远古之怒",
    type: "multi_buff",
    duration: 3,
    atkMult: 1.4,
    defMult: 1.2,
    spdMult: 1.15,
    cooldown: 6,
    description: "Powerful team buff"
  },

  dark_healing: {
    id: "dark_healing",
    name: "Dark Healing",
    nameZh: "黑暗治愈",
    type: "heal_percent",
    pct: 0.5,
    targets: 3,
    cooldown: 5,
    description: "Powerful group heal"
  },

  death_sentence: {
    id: "death_sentence",
    name: "Death Sentence",
    nameZh: "死亡宣判",
    type: "execute",
    hpThreshold: 0.4,
    dmgMult: 2.5,
    cooldown: 4,
    description: "Deadly attack on wounded"
  },

  // Antiheal
  curse_of_withering: {
    id: "curse_of_withering",
    name: "Curse of Withering",
    nameZh: "凋零诅咒",
    type: "antiheal",
    duration: 3,
    healMult: 0.5,
    cooldown: 4,
    description: "Reduces healing received"
  },

  // ========== NOVEL-THEMED SKILLS ==========

  // Time manipulation
  time_distortion: {
    id: "time_distortion",
    name: "Time Distortion",
    nameZh: "时间扭曲",
    type: "slow",
    duration: 3,
    spdMult: 0.5,
    cooldown: 5,
    description: "Severely slows all enemies"
  },

  // Life drain
  soul_drain: {
    id: "soul_drain",
    name: "Soul Drain",
    nameZh: "灵魂汲取",
    type: "drain",
    dmgPct: 0.4,
    healPct: 0.3,
    cooldown: 4,
    description: "Drains HP from enemies and heals self"
  },

  // Buff/debuff all allies
  buff_all: {
    id: "buff_all",
    name: "Mass Buff",
    nameZh: "全体强化",
    type: "multi_buff",
    duration: 3,
    atkMult: 1.25,
    defMult: 1.15,
    spdMult: 1.1,
    cooldown: 5,
    description: "Buffs all ally stats"
  },

  shield_all: {
    id: "shield_all",
    name: "Mass Shield",
    nameZh: "全体护盾",
    type: "shield",
    blocks: 2,
    targets: 4,
    cooldown: 5,
    description: "Shields all allies"
  },

  // Light healing (Star God themed)
  light_heal: {
    id: "light_heal",
    name: "Light Heal",
    nameZh: "光之治愈",
    type: "heal_percent",
    pct: 0.25,
    targets: 2,
    cooldown: 4,
    description: "Heals allies with light energy"
  },

  // Music/symphony themed
  multi_attack_random: {
    id: "multi_attack_random",
    name: "Harmonic Strike",
    nameZh: "和音打击",
    type: "multi_attack_random",
    hits: 3,
    minDmgPct: 0.5,
    maxDmgPct: 0.8,
    cooldown: 3,
    description: "Random melodic strikes"
  }
}

// Get skill by ID
export function getEnemySkill(skillId) {
  return ENEMY_SKILLS[skillId] || null
}

// Predefined skill sets for novel-themed enemy types
export const ENEMY_SKILL_SETS = {
  // Eternal Slumber Remnants (Stages 31-40)
  slumber_soldier: ["slow", "power_strike"],
  slumber_preacher: ["weaken", "curse_of_withering"],
  void_acolyte: ["soul_drain", "weaken"],
  slumber_knight: ["battle_cry", "double_strike"],
  slumber_lord: ["dark_healing", "soul_revival", "execute"],
  temporal_echo: ["time_distortion", "slow"],
  historical_fragment: ["slow", "fortify"],

  // Institute Enemies (Stages 41-50)
  institute_guard: ["fortify", "battle_cry"],
  calibration_drone: ["slow", "time_distortion"],
  research_clone: ["double_strike", "execute"],
  institute_director: ["dark_healing", "soul_revival", "weaken"],

  // Prison Camp Echoes (Stages 41-50)
  exam_guard: ["fortify", "power_strike"],
  compliance_officer: ["weaken", "curse_of_withering"],
  reformation_warden: ["soul_drain", "dark_healing"],
  prison_commander: ["battle_cry", "execute", "soul_revival"],

  // Star God Remnants (Stages 51-60)
  constellation_shade: ["slow", "light_heal"],
  symphonie_echo: ["multi_attack_random", "buff_all"],
  starlight_wraith: ["soul_drain", "execute"],
  loom_guardian: ["fortify", "barrier", "group_heal"],
  star_god_fragment: ["dark_healing", "soul_revival", "buff_all"],

  // Music Spirits (Stages 61-70)
  melody_fragment: ["slow", "multi_attack_random"],
  harmony_shade: ["buff_all", "shield_all"],
  dissonance_entity: ["weaken", "curse_of_withering"],
  symphony_guardian: ["barrier", "group_heal", "execute"],
  lyre_spirit: ["buff_all", "light_heal", "shield_all"],

  // Hope and Future (Stages 71-100)
  future_echo: ["time_distortion", "buff_all"],
  memory_fragment: ["soul_drain", "slow"],
  possibility_shade: ["shield_all", "fortify"],
  eternal_harmony: ["group_heal", "buff_all", "execute"],
  origin_compass: ["fortify", "power_strike", "execute"],

  // Final Boss Enemies
  thanatos_fragment: ["death_sentence", "soul_revival", "dark_healing"],
  meteor_entity: ["meteor_strike", "ancient_wrath", "execute"],
  worldline_controller: ["time_distortion", "soul_revival", "buff_all"],
  synthesizer: ["buff_all", "group_heal", "shield_all"],

  // Generic skills
  fortify: ["fortify"],
  slow: ["slow"]
}

// Get skills for an enemy type
export function getEnemySkillSet(enemyType) {
  const skillIds = ENEMY_SKILL_SETS[enemyType] || []
  return skillIds.map(id => getEnemySkill(id)).filter(s => s !== null)
}
