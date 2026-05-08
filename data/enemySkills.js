// Enemy skills - separate from player skills
// These are used by enemy units during battle

export const ENEMY_SKILLS = {
  // Basic attack skills
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

  triple_strike: {
    id: "triple_strike",
    name: "Triple Strike",
    nameZh: "三重打击",
    type: "multi_attack",
    targets: 3,
    cooldown: 0,
    description: "Attacks three enemies"
  },

  // Random multi-hit attacks
  flurry: {
    id: "flurry",
    name: "Flurry",
    nameZh: "连击",
    type: "multi_attack_random",
    hits: 3,
    minDmgPct: 0.4,
    maxDmgPct: 0.6,
    cooldown: 2,
    description: "Random hits"
  },

  savage_flurry: {
    id: "savage_flurry",
    name: "Savage Flurry",
    nameZh: "狂野连击",
    type: "multi_attack_random",
    hits: 5,
    minDmgPct: 0.3,
    maxDmgPct: 0.5,
    cooldown: 3,
    description: "Multiple random hits"
  },

  // Stun skills
  headbutt: {
    id: "headbutt",
    name: "Headbutt",
    nameZh: "头槌",
    type: "stun",
    duration: 1,
    cooldown: 3,
    description: "Stuns target for 1 turn"
  },

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

  weak_poison: {
    id: "weak_poison",
    name: "Poison",
    nameZh: "中毒",
    type: "debuff",
    duration: 3,
    atkMult: 0.9,
    cooldown: 2,
    description: "Weakens target"
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

  war_chant: {
    id: "war_chant",
    name: "War Chant",
    nameZh: "战歌",
    type: "multi_buff",
    duration: 2,
    atkMult: 1.2,
    defMult: 1.2,
    spdMult: 1.1,
    cooldown: 5,
    description: "Buffs all stats"
  },

  // Heal skills
  regeneration: {
    id: "regeneration",
    name: "Regeneration",
    nameZh: "再生",
    type: "heal",
    amount: 50,
    cooldown: 4,
    description: "Heals self"
  },

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

  group_barrier: {
    id: "group_barrier",
    name: "Group Barrier",
    nameZh: "群体屏障",
    type: "shield",
    blocks: 1,
    targets: 3,
    cooldown: 5,
    description: "Shields allies"
  },

  // Taunt skills
  taunt: {
    id: "taunt",
    name: "Taunt",
    nameZh: "嘲讽",
    type: "taunt",
    duration: 2,
    cooldown: 4,
    description: "Forces enemies to attack"
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

  devour: {
    id: "devour",
    name: "Devour",
    nameZh: "吞噬",
    type: "execute",
    hpThreshold: 0.5,
    dmgMult: 1.5,
    cooldown: 2,
    description: "Attacks weakened enemies"
  },

  // Critical buff
  focus: {
    id: "focus",
    name: "Focus",
    nameZh: "专注",
    type: "crit_buff",
    critBonus: 0.2,
    duration: 2,
    cooldown: 4,
    description: "Increases critical chance"
  },

  // Resurrect (rare)
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
  crushing_blow: {
    id: "crushing_blow",
    name: "Crushing Blow",
    nameZh: "粉碎打击",
    type: "multi_attack",
    targets: 3,
    cooldown: 0,
    description: "Attacks three enemies"
  },

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

  divine_shield: {
    id: "divine_shield",
    name: "Divine Shield",
    nameZh: "神圣护盾",
    type: "shield",
    blocks: 3,
    targets: 2,
    cooldown: 6,
    description: "Strong protective barrier"
  },

  thunder_clap: {
    id: "thunder_clap",
    name: "Thunder Clap",
    nameZh: "雷霆之击",
    type: "stun",
    duration: 2,
    cooldown: 5,
    description: "Stuns all enemies"
  },

  poison_cloud: {
    id: "poison_cloud",
    name: "Poison Cloud",
    nameZh: "毒云",
    type: "slow",
    duration: 3,
    spdMult: 0.6,
    cooldown: 4,
    description: "Slows and weakens"
  },

  // Poison DOT - damage over time
  venomous_strike: {
    id: "venomous_strike",
    name: "Venomous Strike",
    nameZh: "毒液打击",
    type: "poison",
    duration: 3,
    dmgPct: 0.05,
    cooldown: 3,
    description: "Poison: deals damage each turn"
  },

  // Antiheal - reduces healing received
  curse_of_withering: {
    id: "curse_of_withering",
    name: "Curse of Withering",
    nameZh: "凋零诅咒",
    type: "antiheal",
    duration: 3,
    healMult: 0.5,
    cooldown: 4,
    description: "Reduces healing received"
  }
}

// Get skill by ID
export function getEnemySkill(skillId) {
  return ENEMY_SKILLS[skillId] || null
}

// Predefined skill sets for different enemy types
export const ENEMY_SKILL_SETS = {
  // Basic enemies (stages 1-10)
  slime: [],  // No skills, basic attack only
  goblin: [
    "headbutt"
  ],
  goblin_shaman: [
    "weaken",
    "regeneration"
  ],
  wolf: [
    "flurry"
  ],
  spider: [
    "venomous_strike"
  ],
  orc: [
    "battle_cry",
    "double_strike"
  ],
  orc_shaman: [
    "weaken",
    "group_heal"
  ],

  // Mid-game enemies (stages 11-30)
  ghost: [
    "slow",
    "soul_revival"
  ],
  skeleton: [
    "double_strike",
    "fortify"
  ],
  skeleton_mage: [
    "slow",
    "group_heal",
    "curse_of_withering"
  ],
  knight: [
    "power_strike",
    "taunt"
  ],
  undead_mage: [
    "weaken",
    "group_heal",
    "slow"
  ],
  golem: [
    "fortify",
    "barrier"
  ],

  // Dragon-type enemies
  young_dragon: [
    "flurry",
    "execute"
  ],
  adult_dragon: [
    "triple_strike",
    "fire_breath",
    "execute"
  ],
  ancient_dragon: [
    "meteor_strike",
    "ancient_wrath",
    "execute",
    "soul_revival"
  ],

  // Boss skill sets
  forest_guardian: [
    "fortify",
    "barrier",
    "group_heal",
    "crushing_blow"
  ],
  lich_lord: [
    "dark_healing",
    "weaken",
    "soul_revival",
    "death_sentence"
  ],
  ice_dragon_queen: [
    "thunder_clap",
    "slow",
    "group_barrier",
    "execute"
  ],
  shadow_emperor: [
    "dark_healing",
    "ancient_wrath",
    "soul_revival",
    "death_sentence"
  ],
  void_emperor: [
    "meteor_strike",
    "ancient_wrath",
    "slow",
    "soul_revival",
    "execute"
  ]
}

// Get skills for an enemy type
export function getEnemySkillSet(enemyType) {
  const skillIds = ENEMY_SKILL_SETS[enemyType] || []
  return skillIds.map(id => getEnemySkill(id)).filter(s => s !== null)
}
