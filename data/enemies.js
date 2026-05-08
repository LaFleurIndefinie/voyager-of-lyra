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
  // Basic enemies - few or no skills
  slime: [],
  goblin: ['headbutt'],
  goblin_shaman: ['weaken', 'regeneration'],
  goblin_chief: ['battle_cry', 'double_strike'],
  wolf: ['flurry'],
  bandit: ['double_strike'],
  bandit_mage: ['weaken'],
  bandit_leader: ['battle_cry', 'power_strike'],
  spider: ['venomous_strike'],
  spider_queen: ['venomous_strike', 'slow'],
  orc: ['battle_cry', 'double_strike'],
  orc_shaman: ['weaken', 'group_heal'],
  orc_warchief: ['war_chant', 'triple_strike'],
  witch: ['weaken', 'slow'],
  hermit_witch: ['weaken', 'group_heal', 'slow'],
  treant: ['fortify', 'barrier'],
  forest_guardian: ['fortify', 'barrier', 'group_heal', 'crushing_blow'],

  // Undead enemies
  ghost: ['slow'],
  ghost_soldier: ['slow', 'double_strike'],
  skeleton: ['double_strike'],
  skeleton_mage: ['weaken', 'group_heal', 'curse_of_withering'],
  skeleton_champion: ['power_strike', 'fortify'],
  bone_golem: ['fortify', 'barrier'],
  lich: ['dark_healing', 'weaken', 'soul_revival', 'death_sentence'],

  // Dragon enemies
  young_dragon: ['flurry', 'execute'],
  dragon: ['triple_strike', 'execute'],
  elder_dragon: ['savage_flurry', 'execute', 'regeneration'],
  ancient_dragon: ['meteor_strike', 'ancient_wrath', 'execute', 'soul_revival'],
  ice_dragon: ['thunder_clap', 'slow', 'execute'],
  ice_dragon_queen: ['thunder_clap', 'group_barrier', 'execute', 'dark_healing'],
  fire_dragon: ['meteor_strike', 'battle_cry', 'execute'],
  shadow_dragon: ['dark_healing', 'weaken', 'soul_revival', 'execute'],
  desert_dragon: ['meteor_strike', 'slow', 'execute', 'group_heal'],
  swamp_dragon: ['poison', 'slow', 'group_heal', 'devour'],
  divine_dragon: ['divine_shield', 'ancient_wrath', 'dark_healing', 'focus'],

  // Other bosses
  cyclops_chief: ['crushing_blow', 'fortify', 'taunt'],
  minotaur_lord: ['power_strike', 'war_chant', 'execute'],
  lich_lord: ['dark_healing', 'weaken', 'soul_revival', 'death_sentence'],
  void_emperor: ['meteor_strike', 'ancient_wrath', 'slow', 'soul_revival', 'execute'],

  // Default for generic enemies
  default: []
}

// Get skills for enemy type
function getSkills(type) {
  return SKILL_SETS[type] || SKILL_SETS.default
}

export const ENEMIES = [
  // Stage 1-10: Beginning Journey
  {
    id: "1",
    members: [
      createEnemyMember("e1_1", "Slime A", "史莱姆 A", {atk: 5, def: 2, hp: 30, spd: 3, critChance: 0.05}, getSkills('slime')),
      createEnemyMember("e1_2", "Slime B", "史莱姆 B", {atk: 5, def: 2, hp: 30, spd: 2, critChance: 0.03}, getSkills('slime')),
      createEnemyMember("e1_3", "Slime C", "史莱姆 C", {atk: 6, def: 3, hp: 35, spd: 2, critChance: 0.05}, getSkills('slime')),
      createEnemyMember("e1_4", "Slime D", "史莱姆 D", {atk: 4, def: 1, hp: 25, spd: 4, critChance: 0.08}, getSkills('slime')),
      createEnemyMember("e1_5", "Slime King", "史莱姆之王", {atk: 8, def: 4, hp: 50, spd: 1, critChance: 0.1}, getSkills('slime'))
    ]
  },
  {
    id: "2",
    members: [
      createEnemyMember("e2_1", "Forest Bat", "森林蝙蝠", {atk: 7, def: 2, hp: 35, spd: 4, critChance: 0.1}, getSkills('wolf')),
      createEnemyMember("e2_2", "Wood Spider", "木蜘蛛", {atk: 6, def: 3, hp: 40, spd: 3, critChance: 0.05}, getSkills('spider')),
      createEnemyMember("e2_3", "Root Sprite", "根精", {atk: 5, def: 4, hp: 45, spd: 2, critChance: 0.05}, []),
      createEnemyMember("e2_4", "Feral Wolf", "野狼", {atk: 8, def: 3, hp: 38, spd: 5, critChance: 0.1}, getSkills('wolf')),
      createEnemyMember("e2_5", "Mire Toad", "泥沼蟾蜍", {atk: 6, def: 2, hp: 50, spd: 2, critChance: 0.05}, [])
    ]
  },
  {
    id: "3",
    members: [
      createEnemyMember("e3_1", "Goblin Scout", "哥布林侦察兵", {atk: 9, def: 3, hp: 45, spd: 4, critChance: 0.08}, getSkills('goblin')),
      createEnemyMember("e3_2", "Goblin Archer", "哥布林弓箭手", {atk: 10, def: 2, hp: 40, spd: 5, critChance: 0.12}, ['headbutt']),
      createEnemyMember("e3_3", "Goblin Fighter", "哥布林战士", {atk: 11, def: 4, hp: 50, spd: 3, critChance: 0.08}, getSkills('goblin')),
      createEnemyMember("e3_4", "Goblin Shaman", "哥布林萨满", {atk: 8, def: 3, hp: 45, spd: 4, critChance: 0.05}, getSkills('goblin_shaman')),
      createEnemyMember("e3_5", "Goblin Chief", "哥布林首领", {atk: 12, def: 5, hp: 60, spd: 3, critChance: 0.1}, getSkills('goblin_chief'))
    ]
  },
  {
    id: "4",
    members: [
      createEnemyMember("e4_1", "Bandit Thief", "盗贼小偷", {atk: 11, def: 4, hp: 55, spd: 4, critChance: 0.12}, getSkills('bandit')),
      createEnemyMember("e4_2", "Bandit Archer", "盗贼弓箭手", {atk: 12, def: 3, hp: 50, spd: 5, critChance: 0.15}, ['headbutt']),
      createEnemyMember("e4_3", "Bandit Brute", "盗贼暴徒", {atk: 13, def: 5, hp: 60, spd: 3, critChance: 0.08}, getSkills('bandit')),
      createEnemyMember("e4_4", "Bandit Mage", "盗贼法师", {atk: 10, def: 2, hp: 45, spd: 4, critChance: 0.05}, getSkills('bandit_mage')),
      createEnemyMember("e4_5", "Bandit Leader", "盗贼首领", {atk: 14, def: 6, hp: 70, spd: 4, critChance: 0.12}, getSkills('bandit_leader'))
    ]
  },
  {
    id: "5",
    members: [
      createEnemyMember("e5_1", "Forest Spider", "森林蜘蛛", {atk: 12, def: 4, hp: 60, spd: 4, critChance: 0.08}, getSkills('spider')),
      createEnemyMember("e5_2", "Giant Spider", "巨型蜘蛛", {atk: 14, def: 5, hp: 70, spd: 3, critChance: 0.1}, getSkills('spider')),
      createEnemyMember("e5_3", "Spider Nurse", "蜘蛛护士", {atk: 10, def: 3, hp: 55, spd: 5, critChance: 0.05}, []),
      createEnemyMember("e5_4", "Web Weaver", "织网者", {atk: 13, def: 4, hp: 65, spd: 4, critChance: 0.1}, getSkills('spider')),
      createEnemyMember("e5_5", "Spider Queen", "蜘蛛女王", {atk: 16, def: 7, hp: 90, spd: 3, critChance: 0.12}, getSkills('spider_queen'))
    ]
  },
  {
    id: "6",
    members: [
      createEnemyMember("e6_1", "Orc Grunt", "兽人步兵", {atk: 14, def: 6, hp: 75, spd: 3, critChance: 0.08}, getSkills('orc')),
      createEnemyMember("e6_2", "Orc Warrior", "兽人战士", {atk: 16, def: 7, hp: 85, spd: 3, critChance: 0.1}, getSkills('orc')),
      createEnemyMember("e6_3", "Orc Shaman", "兽人萨满", {atk: 12, def: 4, hp: 65, spd: 4, critChance: 0.05}, getSkills('orc_shaman')),
      createEnemyMember("e6_4", "Orc Hunter", "兽人猎人", {atk: 15, def: 5, hp: 70, spd: 5, critChance: 0.12}, ['headbutt']),
      createEnemyMember("e6_5", "Orc Warchief", "兽人战酋", {atk: 18, def: 8, hp: 100, spd: 3, critChance: 0.15}, getSkills('orc_warchief'))
    ]
  },
  {
    id: "7",
    members: [
      createEnemyMember("e7_1", "Dark Spriggan", "黑暗妖精", {atk: 15, def: 6, hp: 75, spd: 4, critChance: 0.1}, []),
      createEnemyMember("e7_2", "Shadow Wisp", "暗影精灵", {atk: 14, def: 4, hp: 60, spd: 6, critChance: 0.08}, ['slow']),
      createEnemyMember("e7_3", "Dark Dryad", "黑暗树精", {atk: 16, def: 5, hp: 70, spd: 4, critChance: 0.08}, ['poison']),
      createEnemyMember("e7_4", "Corrupted Treant", "腐化树人", {atk: 18, def: 8, hp: 90, spd: 2, critChance: 0.05}, getSkills('treant')),
      createEnemyMember("e7_5", "Forest Demon", "森林恶魔", {atk: 20, def: 7, hp: 85, spd: 4, critChance: 0.15}, ['battle_cry'])
    ]
  },
  {
    id: "8",
    members: [
      createEnemyMember("e8_1", "Toxic Mushroom", "毒蘑菇", {atk: 16, def: 5, hp: 70, spd: 2, critChance: 0.05}, []),
      createEnemyMember("e8_2", "Spore Cloud", "孢子云", {atk: 15, def: 3, hp: 55, spd: 5, critChance: 0.08}, ['poison']),
      createEnemyMember("e8_3", "Giant Fungus", "巨型真菌", {atk: 17, def: 7, hp: 85, spd: 2, critChance: 0.05}, []),
      createEnemyMember("e8_4", "Mushroom Knight", "蘑菇骑士", {atk: 18, def: 8, hp: 90, spd: 3, critChance: 0.1}, ['fortify']),
      createEnemyMember("e8_5", "Myconid Elder", "真菌长老", {atk: 20, def: 6, hp: 80, spd: 4, critChance: 0.08}, ['regeneration', 'poison'])
    ]
  },
  {
    id: "9",
    members: [
      createEnemyMember("e9_1", "Forest Witch", "森林女巫", {atk: 17, def: 5, hp: 75, spd: 5, critChance: 0.08}, getSkills('witch')),
      createEnemyMember("e9_2", "Hex Caster", "诅咒师", {atk: 19, def: 4, hp: 65, spd: 5, critChance: 0.1}, getSkills('witch')),
      createEnemyMember("e9_3", "Witch Familiar", "女巫仆从", {atk: 15, def: 3, hp: 55, spd: 6, critChance: 0.12}, []),
      createEnemyMember("e9_4", "Cursed Oak", "诅咒橡树", {atk: 20, def: 9, hp: 100, spd: 2, critChance: 0.05}, getSkills('treant')),
      createEnemyMember("e9_5", "Hermit Witch", "隐居女巫", {atk: 22, def: 7, hp: 90, spd: 4, critChance: 0.12}, getSkills('hermit_witch'))
    ]
  },
  {
    id: "10",
    members: [
      createEnemyMember("e10_1", "Guardian Sprite", "守护精灵", {atk: 20, def: 8, hp: 90, spd: 5, critChance: 0.12}, []),
      createEnemyMember("e10_2", "Ancient Treant", "远古树人", {atk: 24, def: 12, hp: 130, spd: 2, critChance: 0.05}, getSkills('treant')),
      createEnemyMember("e10_3", "Forest Wyrm", "森林蛟龙", {atk: 26, def: 10, hp: 110, spd: 4, critChance: 0.15}, getSkills('young_dragon')),
      createEnemyMember("e10_4", "Elder Dryad", "长者树精", {atk: 22, def: 9, hp: 100, spd: 5, critChance: 0.1}, ['regeneration', 'weaken']),
      createEnemyMember("e10_5", "Forest Guardian", "森林守护者", {atk: 30, def: 15, hp: 180, spd: 3, critChance: 0.15}, getSkills('forest_guardian'))
    ]
  },
  // Stage 11-20: Ruined Kingdom
  {
    id: "11",
    members: [
      createEnemyMember("e11_1", "Ghostly Child", "幽灵孩童", {atk: 18, def: 5, hp: 70, spd: 5, critChance: 0.1}, getSkills('ghost')),
      createEnemyMember("e11_2", "Phantom Scholar", "幽灵学者", {atk: 20, def: 6, hp: 80, spd: 4, critChance: 0.08}, getSkills('ghost')),
      createEnemyMember("e11_3", "Village Specter", "村庄幽灵", {atk: 22, def: 7, hp: 90, spd: 4, critChance: 0.1}, getSkills('ghost')),
      createEnemyMember("e11_4", "Abandoned Doll", "被遗弃的娃娃", {atk: 16, def: 4, hp: 65, spd: 6, critChance: 0.15}, []),
      createEnemyMember("e11_5", "Village Phantom", "村庄幻影", {atk: 24, def: 8, hp: 100, spd: 4, critChance: 0.12}, getSkills('ghost'))
    ]
  },
  {
    id: "12",
    members: [
      createEnemyMember("e12_1", "Ghost Soldier", "幽灵士兵", {atk: 20, def: 7, hp: 85, spd: 5, critChance: 0.1}, getSkills('ghost_soldier')),
      createEnemyMember("e12_2", "Spectral Knight", "幽灵骑士", {atk: 24, def: 10, hp: 110, spd: 3, critChance: 0.1}, ['fortify']),
      createEnemyMember("e12_3", "Phantom Captain", "幽灵队长", {atk: 26, def: 11, hp: 120, spd: 4, critChance: 0.12}, getSkills('ghost_soldier')),
      createEnemyMember("e12_4", "Ghost Mage", "幽灵法师", {atk: 22, def: 6, hp: 80, spd: 5, critChance: 0.08}, ['slow', 'weaken']),
      createEnemyMember("e12_5", "Spirit Commander", "幽灵指挥官", {atk: 28, def: 12, hp: 140, spd: 4, critChance: 0.15}, ['battle_cry', 'slow'])
    ]
  },
  {
    id: "13",
    members: [
      createEnemyMember("e13_1", "Skeleton Warrior", "骷髅战士", {atk: 22, def: 8, hp: 90, spd: 4, critChance: 0.1}, getSkills('skeleton')),
      createEnemyMember("e13_2", "Skeleton Archer", "骷髅弓箭手", {atk: 24, def: 6, hp: 75, spd: 5, critChance: 0.15}, ['headbutt']),
      createEnemyMember("e13_3", "Skeleton Mage", "骷髅法师", {atk: 26, def: 5, hp: 70, spd: 4, critChance: 0.08}, getSkills('skeleton_mage')),
      createEnemyMember("e13_4", "Skeleton Champion", "骷髅冠军", {atk: 28, def: 10, hp: 110, spd: 3, critChance: 0.12}, getSkills('skeleton_champion')),
      createEnemyMember("e13_5", "Bone Lord", "骨王", {atk: 30, def: 12, hp: 140, spd: 4, critChance: 0.15}, getSkills('skeleton_champion'))
    ]
  },
  {
    id: "14",
    members: [
      createEnemyMember("e14_1", "Cursed Soldier", "被诅咒的士兵", {atk: 24, def: 9, hp: 100, spd: 5, critChance: 0.1}, []),
      createEnemyMember("e14_2", "Cursed Paladin", "被诅咒的圣武士", {atk: 28, def: 12, hp: 130, spd: 3, critChance: 0.12}, ['fortify', 'taunt']),
      createEnemyMember("e14_3", "Blight Knight", "枯萎骑士", {atk: 30, def: 10, hp: 110, spd: 4, critChance: 0.12}, ['power_strike']),
      createEnemyMember("e14_4", "Doom Bringer", "毁灭者", {atk: 32, def: 11, hp: 120, spd: 4, critChance: 0.15}, ['weaken']),
      createEnemyMember("e14_5", "Cursed Knight", "被诅咒的骑士", {atk: 34, def: 14, hp: 160, spd: 4, critChance: 0.15}, getSkills('knight'))
    ]
  },
  {
    id: "15",
    members: [
      createEnemyMember("e15_1", "Fallen Angel", "堕落天使", {atk: 26, def: 10, hp: 110, spd: 5, critChance: 0.12}, []),
      createEnemyMember("e15_2", "Corrupted Cleric", "腐化牧师", {atk: 24, def: 8, hp: 100, spd: 4, critChance: 0.08}, ['group_heal', 'weaken']),
      createEnemyMember("e15_3", "Dark Acolyte", "黑暗侍僧", {atk: 28, def: 7, hp: 90, spd: 5, critChance: 0.1}, ['slow']),
      createEnemyMember("e15_4", "Unholy Bishop", "邪恶主教", {atk: 30, def: 11, hp: 120, spd: 4, critChance: 0.12}, ['weaken', 'group_heal']),
      createEnemyMember("e15_5", "Cathedral Guardian", "大教堂守护者", {atk: 32, def: 13, hp: 150, spd: 4, critChance: 0.15}, ['fortify', 'taunt'])
    ]
  },
  {
    id: "16",
    members: [
      createEnemyMember("e16_1", "Crypt Crawler", "墓穴爬行者", {atk: 28, def: 10, hp: 110, spd: 5, critChance: 0.1}, []),
      createEnemyMember("e16_2", "Grave Stalker", "墓地潜行者", {atk: 30, def: 11, hp: 120, spd: 5, critChance: 0.12}, ['slow']),
      createEnemyMember("e16_3", "Death Watcher", "死亡监视者", {atk: 26, def: 9, hp: 100, spd: 6, critChance: 0.15}, []),
      createEnemyMember("e16_4", "Tomb Horror", "墓穴恐惧", {atk: 32, def: 13, hp: 140, spd: 3, critChance: 0.1}, ['fortify']),
      createEnemyMember("e16_5", "Crypt Horror", "墓穴恐惧魔", {atk: 36, def: 15, hp: 180, spd: 4, critChance: 0.15}, ['barrier', 'power_strike'])
    ]
  },
  {
    id: "17",
    members: [
      createEnemyMember("e17_1", "Minor Wraith", "次级幽魂", {atk: 28, def: 8, hp: 100, spd: 6, critChance: 0.12}, getSkills('ghost')),
      createEnemyMember("e17_2", "Soul Wraith", "灵魂幽魂", {atk: 32, def: 10, hp: 120, spd: 5, critChance: 0.12}, getSkills('ghost')),
      createEnemyMember("e17_3", "Death Wraith", "死亡幽魂", {atk: 34, def: 11, hp: 130, spd: 5, critChance: 0.15}, ['slow', 'weaken']),
      createEnemyMember("e17_4", "Phantom Swarm", "幻影群", {atk: 30, def: 9, hp: 110, spd: 7, critChance: 0.1}, []),
      createEnemyMember("e17_5", "Wraith Lord", "幽魂领主", {atk: 38, def: 14, hp: 170, spd: 5, critChance: 0.18}, ['soul_revival', 'slow'])
    ]
  },
  {
    id: "18",
    members: [
      createEnemyMember("e18_1", "Stone Guardian", "石质守护者", {atk: 30, def: 14, hp: 140, spd: 3, critChance: 0.08}, getSkills('golem')),
      createEnemyMember("e18_2", "Golem Sentry", "傀儡哨兵", {atk: 34, def: 16, hp: 160, spd: 2, critChance: 0.08}, getSkills('golem')),
      createEnemyMember("e18_3", "Runic Guardian", "符文守护者", {atk: 32, def: 15, hp: 150, spd: 3, critChance: 0.1}, ['fortify', 'barrier']),
      createEnemyMember("e18_4", "Ancient Construct", "远古构造体", {atk: 36, def: 18, hp: 180, spd: 2, critChance: 0.1}, getSkills('golem')),
      createEnemyMember("e18_5", "Bone Golem", "白骨傀儡", {atk: 40, def: 20, hp: 200, spd: 3, critChance: 0.12}, getSkills('bone_golem'))
    ]
  },
  {
    id: "19",
    members: [
      createEnemyMember("e19_1", "Skeleton Lord", "骷髅领主", {atk: 34, def: 14, hp: 150, spd: 4, critChance: 0.12}, ['fortify']),
      createEnemyMember("e19_2", "Death Knight", "死亡骑士", {atk: 38, def: 16, hp: 170, spd: 4, critChance: 0.15}, ['battle_cry', 'power_strike']),
      createEnemyMember("e19_3", "Dread Knight", "恐惧骑士", {atk: 40, def: 17, hp: 180, spd: 4, critChance: 0.15}, ['taunt', 'fortify']),
      createEnemyMember("e19_4", "Grave King", "墓穴之王", {atk: 42, def: 18, hp: 190, spd: 4, critChance: 0.18}, ['battle_cry', 'regeneration']),
      createEnemyMember("e19_5", "Undead King", "亡灵国王", {atk: 46, def: 22, hp: 230, spd: 4, critChance: 0.2}, ['soul_revival', 'dark_healing', 'execute'])
    ]
  },
  {
    id: "20",
    members: [
      createEnemyMember("e20_1", "Lich Apprentice", "巫妖学徒", {atk: 36, def: 12, hp: 140, spd: 5, critChance: 0.12}, ['slow', 'weaken']),
      createEnemyMember("e20_2", "Death Mage", "死亡法师", {atk: 40, def: 14, hp: 160, spd: 5, critChance: 0.12}, getSkills('undead_mage')),
      createEnemyMember("e20_3", "Bone Colossus", "骨骸巨像", {atk: 44, def: 20, hp: 200, spd: 3, critChance: 0.12}, getSkills('bone_golem')),
      createEnemyMember("e20_4", "Soul Harvester", "灵魂收割者", {atk: 42, def: 16, hp: 180, spd: 5, critChance: 0.15}, ['execute', 'slow']),
      createEnemyMember("e20_5", "Lich Lord", "巫妖领主", {atk: 50, def: 25, hp: 280, spd: 5, critChance: 0.2}, getSkills('lich_lord'))
    ]
  },
  // Stage 21-30: Mountain Pass
  {
    id: "21",
    members: [
      createEnemyMember("e21_1", "Mountain Bandit", "山区强盗", {atk: 36, def: 14, hp: 150, spd: 5, critChance: 0.12}, getSkills('bandit')),
      createEnemyMember("e21_2", "Rock Thrower", "投石者", {atk: 38, def: 15, hp: 160, spd: 4, critChance: 0.1}, ['headbutt']),
      createEnemyMember("e21_3", "Cliff Leaper", "悬崖跳跃者", {atk: 34, def: 12, hp: 140, spd: 6, critChance: 0.15}, []),
      createEnemyMember("e21_4", "Trail Guardian", "山路守护者", {atk: 40, def: 16, hp: 170, spd: 4, critChance: 0.12}, ['fortify']),
      createEnemyMember("e21_5", "Mountain Chief", "山区首领", {atk: 44, def: 18, hp: 190, spd: 4, critChance: 0.15}, ['war_chant'])
    ]
  },
  {
    id: "22",
    members: [
      createEnemyMember("e22_1", "Stone Golem", "石傀儡", {atk: 40, def: 20, hp: 200, spd: 2, critChance: 0.08}, getSkills('golem')),
      createEnemyMember("e22_2", "Rock Sentinel", "岩石哨兵", {atk: 42, def: 22, hp: 210, spd: 2, critChance: 0.08}, getSkills('golem')),
      createEnemyMember("e22_3", "Granite Guardian", "花岗岩守护者", {atk: 44, def: 24, hp: 220, spd: 2, critChance: 0.1}, ['fortify', 'barrier']),
      createEnemyMember("e22_4", "Mountain Troll", "山岭巨魔", {atk: 46, def: 18, hp: 200, spd: 3, critChance: 0.12}, ['regeneration']),
      createEnemyMember("e22_5", "Ancient Golem", "远古傀儡", {atk: 50, def: 28, hp: 260, spd: 2, critChance: 0.1}, ['fortify', 'barrier', 'power_strike'])
    ]
  },
  {
    id: "23",
    members: [
      createEnemyMember("e23_1", "Harpy Scout", "鹰身女妖侦察兵", {atk: 38, def: 12, hp: 140, spd: 7, critChance: 0.12}, ['flurry']),
      createEnemyMember("e23_2", "Cliff Harpy", "悬崖鹰身女妖", {atk: 42, def: 14, hp: 160, spd: 6, critChance: 0.15}, []),
      createEnemyMember("e23_3", "Sky Hunter", "天空猎人", {atk: 40, def: 13, hp: 150, spd: 7, critChance: 0.15}, ['headbutt']),
      createEnemyMember("e23_4", "Storm Harpy", "风暴鹰身女妖", {atk: 44, def: 15, hp: 170, spd: 6, critChance: 0.15}, ['slow']),
      createEnemyMember("e23_5", "Harpy Matriarch", "鹰身女妖母系", {atk: 48, def: 17, hp: 190, spd: 6, critChance: 0.18}, ['flurry', 'taunt'])
    ]
  },
  {
    id: "24",
    members: [
      createEnemyMember("e24_1", "Minotaur Warrior", "米诺陶战士", {atk: 44, def: 18, hp: 180, spd: 4, critChance: 0.12}, ['double_strike']),
      createEnemyMember("e24_2", "Labyrinth Guardian", "迷宫守护者", {atk: 46, def: 20, hp: 200, spd: 3, critChance: 0.12}, getSkills('golem')),
      createEnemyMember("e24_3", "Beast Master", "兽主", {atk: 42, def: 16, hp: 170, spd: 5, critChance: 0.1}, ['battle_cry']),
      createEnemyMember("e24_4", "Cave Troll", "洞穴巨魔", {atk: 48, def: 22, hp: 220, spd: 3, critChance: 0.12}, ['regeneration', 'fortify']),
      createEnemyMember("e24_5", "Minotaur Lord", "米诺陶领主", {atk: 52, def: 24, hp: 250, spd: 4, critChance: 0.18}, getSkills('minotaur_lord'))
    ]
  },
  {
    id: "25",
    members: [
      createEnemyMember("e25_1", "Ice Sprite", "冰精灵", {atk: 40, def: 14, hp: 150, spd: 6, critChance: 0.1}, []),
      createEnemyMember("e25_2", "Frozen Sentry", "冰冻哨兵", {atk: 44, def: 18, hp: 180, spd: 4, critChance: 0.1}, ['slow']),
      createEnemyMember("e25_3", "Ice Elemental", "冰元素", {atk: 46, def: 20, hp: 190, spd: 4, critChance: 0.12}, ['slow', 'weaken']),
      createEnemyMember("e25_4", "Frost Guardian", "霜冻守护者", {atk: 48, def: 22, hp: 210, spd: 3, critChance: 0.12}, ['slow', 'barrier']),
      createEnemyMember("e25_5", "Ice Wyrm", "冰龙", {atk: 54, def: 25, hp: 260, spd: 5, critChance: 0.18}, ['thunder_clap', 'execute'])
    ]
  },
  {
    id: "26",
    members: [
      createEnemyMember("e26_1", "Stone Basilisk", "石蜥蜴", {atk: 46, def: 18, hp: 180, spd: 4, critChance: 0.12}, ['slow']),
      createEnemyMember("e26_2", "Petrify Serpent", "石化蛇", {atk: 48, def: 20, hp: 200, spd: 4, critChance: 0.12}, ['slow', 'weaken']),
      createEnemyMember("e26_3", "Cave Serpent", "洞穴蛇", {atk: 50, def: 19, hp: 190, spd: 5, critChance: 0.15}, []),
      createEnemyMember("e26_4", "Reptile Horror", "爬行恐惧", {atk: 52, def: 22, hp: 220, spd: 4, critChance: 0.15}, ['power_strike']),
      createEnemyMember("e26_5", "Basilisk Alpha", "石化蜥蜴首领", {atk: 56, def: 24, hp: 250, spd: 4, critChance: 0.18}, ['thunder_clap', 'execute'])
    ]
  },
  {
    id: "27",
    members: [
      createEnemyMember("e27_1", "Cyclops Grunt", "独眼巨人步兵", {atk: 50, def: 24, hp: 250, spd: 2, critChance: 0.1}, []),
      createEnemyMember("e27_2", "Mountain Cyclops", "山地独眼巨人", {atk: 54, def: 26, hp: 270, spd: 2, critChance: 0.12}, ['power_strike']),
      createEnemyMember("e27_3", "Stone Thrower", "投石者", {atk: 52, def: 22, hp: 240, spd: 3, critChance: 0.12}, ['slow']),
      createEnemyMember("e27_4", "Peak Guardian", "山峰守护者", {atk: 56, def: 28, hp: 280, spd: 2, critChance: 0.12}, getSkills('golem')),
      createEnemyMember("e27_5", "Cyclops Chief", "独眼巨人首领", {atk: 60, def: 30, hp: 320, spd: 3, critChance: 0.18}, getSkills('cyclops_chief'))
    ]
  },
  {
    id: "28",
    members: [
      createEnemyMember("e28_1", "Thunder Sprite", "雷电精灵", {atk: 48, def: 14, hp: 170, spd: 7, critChance: 0.15}, ['flurry']),
      createEnemyMember("e28_2", "Storm Elemental", "风暴元素", {atk: 52, def: 18, hp: 190, spd: 6, critChance: 0.15}, ['slow']),
      createEnemyMember("e28_3", "Lightning Wisp", "闪电精灵", {atk: 50, def: 15, hp: 180, spd: 7, critChance: 0.18}, []),
      createEnemyMember("e28_4", "Thunder Guardian", "雷电守护者", {atk: 54, def: 20, hp: 210, spd: 5, critChance: 0.15}, ['thunder_clap', 'fortify']),
      createEnemyMember("e28_5", "Storm Titan", "风暴泰坦", {atk: 58, def: 24, hp: 260, spd: 5, critChance: 0.18}, ['thunder_clap', 'war_chant', 'execute'])
    ]
  },
  {
    id: "29",
    members: [
      createEnemyMember("e29_1", "Young Eagle", "幼鹰", {atk: 48, def: 16, hp: 180, spd: 7, critChance: 0.15}, []),
      createEnemyMember("e29_2", "Sky Eagle", "天空鹰", {atk: 52, def: 18, hp: 200, spd: 7, critChance: 0.18}, ['flurry']),
      createEnemyMember("e29_3", "War Eagle", "战鹰", {atk: 54, def: 20, hp: 220, spd: 6, critChance: 0.18}, ['battle_cry']),
      createEnemyMember("e29_4", "Thunder Eagle", "雷电鹰", {atk: 56, def: 22, hp: 240, spd: 6, critChance: 0.2}, ['thunder_clap']),
      createEnemyMember("e29_5", "Giant Eagle", "巨鹰", {atk: 60, def: 24, hp: 280, spd: 6, critChance: 0.2}, ['war_chant', 'execute'])
    ]
  },
  {
    id: "30",
    members: [
      createEnemyMember("e30_1", "Dragon Whelp", "幼龙", {atk: 55, def: 22, hp: 250, spd: 5, critChance: 0.15}, getSkills('young_dragon')),
      createEnemyMember("e30_2", "Drake Adult", "成年龙", {atk: 58, def: 25, hp: 280, spd: 5, critChance: 0.18}, getSkills('dragon')),
      createEnemyMember("e30_3", "Scale Guardian", "鳞片守护者", {atk: 60, def: 28, hp: 300, spd: 4, critChance: 0.18}, ['fortify', 'barrier']),
      createEnemyMember("e30_4", "Elder Drake", "长者龙", {atk: 62, def: 30, hp: 320, spd: 4, critChance: 0.2}, getSkills('elder_dragon')),
      createEnemyMember("e30_5", "Ancient Dragon", "远古巨龙", {atk: 70, def: 35, hp: 400, spd: 5, critChance: 0.25}, getSkills('ancient_dragon'))
    ]
  },
  // Generate stages 31-100 with scaled enemies
  ...generateEnemyTeams(31, 100)
]

// Generate enemy teams for stages 31-100
function generateEnemyTeams(startStage, endStage) {
  const enemies = []
  const enemyTypes = [
    { prefix: "Desert", prefixZh: "沙漠", names: ["Sand Lizard", "Camel Rider", "Dune Stalker", "Mirage Spirit", "Sphinx"], namesZh: ["沙蜥蜴", "骆驼骑士", "沙丘潜行者", "幻影精灵", "狮身人面像"], bossSkills: 'desert_dragon' },
    { prefix: "Swamp", prefixZh: "沼泽", names: ["Bog Crawler", "Mire Beast", "Bog Witch", "Gator King", "Swamp Dragon"], namesZh: ["泥沼爬行者", "沼泽兽", "沼泽女巫", "鳄鱼王", "沼泽龙"], bossSkills: 'swamp_dragon' },
    { prefix: "Volcanic", prefixZh: "火山", names: ["Magma Golem", "Fire Imp", "Flame Sprite", "Inferno Beast", "Lava Wyrm"], namesZh: ["岩浆傀儡", "火焰小鬼", "火焰精灵", "地狱兽", "熔岩蛟龙"], bossSkills: 'fire_dragon' },
    { prefix: "Frozen", prefixZh: "冰霜", names: ["Ice Wolf", "Frost Giant", "Snow Beast", "Blizzard Spirit", "Ice Dragon"], namesZh: ["冰狼", "霜巨人", "雪兽", "暴风雪精灵", "冰龙"], bossSkills: 'ice_dragon' },
    { prefix: "Shadow", prefixZh: "暗影", names: ["Shadow Beast", "Void Walker", "Dark Knight", "Night Terror", "Shadow Dragon"], namesZh: ["暗影兽", "虚空行者", "黑暗骑士", "梦魇", "暗影龙"], bossSkills: 'shadow_dragon' },
    { prefix: "Celestial", prefixZh: "天界", names: ["Star Guardian", "Sky Seraph", "Light Bearer", "Divine Beast", "Divine Dragon"], namesZh: ["星辰守护者", "天空天使", "光明使者", "神圣兽", "神龙"], bossSkills: 'divine_dragon' },
    { prefix: "Void", prefixZh: "虚空", names: ["Chaos Spawn", "Void Entity", "Reality Breaker", "Dimension Walker", "World Serpent"], namesZh: ["混沌产卵", "虚空实体", "现实破坏者", "维度行者", "世界之蛇"], bossSkills: 'void_emperor' }
  ]

  // Map enemy type to skill sets
  const typeSkillSets = ['wolf', 'golem', 'ghost', 'swamp_dragon', 'fire_dragon', 'divine_dragon', 'void_emperor']

  for (let i = startStage; i <= endStage; i++) {
    const typeIndex = Math.floor((i - startStage) / 10) % enemyTypes.length
    const type = enemyTypes[typeIndex]
    const skillSetKey = typeSkillSets[typeIndex]
    const memberIndex = i % 5
    const isBoss = (i % 10) === 0
    const critChance = 0.1 + (i - 30) * 0.002
    const baseStats = {
      atk: 50 + (i - 30) * 3,
      def: 20 + (i - 30) * 2,
      hp: 250 + (i - 30) * 15,
      spd: 4 + Math.floor((i - 30) / 20),
      critChance: Math.min(0.3, critChance)
    }

    // Skills based on enemy role
    const skills1 = ['flurry'] // Scout
    const skills2 = ['double_strike', 'fortify'] // Warrior
    const skills3 = ['slow', 'poison', 'weaken'] // Special
    const skills4 = ['battle_cry', 'taunt'] // Champion
    const skills5 = isBoss ? getSkills(type.bossSkills) : ['triple_strike', 'execute'] // Boss or Elite

    enemies.push({
      id: String(i),
      members: [
        createEnemyMember(`e${i}_1`, `${type.prefix} Scout`, type.namesZh[0] || type.names[0], {...baseStats}, skills1),
        createEnemyMember(`e${i}_2`, `${type.prefix} Warrior`, type.namesZh[1] || type.names[1], {...baseStats, atk: baseStats.atk + 4, def: baseStats.def + 2, hp: baseStats.hp + 20}, skills2),
        createEnemyMember(`e${i}_3`, type.names[2], type.namesZh[2] || type.names[2], {...baseStats, atk: baseStats.atk + 8, def: baseStats.def + 4, hp: baseStats.hp + 40}, skills3),
        createEnemyMember(`e${i}_4`, `${type.prefix} Champion`, type.namesZh[3] || type.names[3], {...baseStats, atk: baseStats.atk + 12, def: baseStats.def + 6, hp: baseStats.hp + 60}, skills4),
        createEnemyMember(`e${i}_5`, type.names[4], type.namesZh[4] || type.names[4], {...baseStats, atk: baseStats.atk + 20, def: baseStats.def + 10, hp: baseStats.hp + 100}, skills5)
      ]
    })
  }
  return enemies
}
