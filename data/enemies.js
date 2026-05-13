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

// Unique enemy types - each enemy type has fixed skills
export const ENEMY_TYPES = {
  // Stage 1-10: Pre-War Astesia
  village_youth: { id: "village_youth", name: "Village Youth", nameZh: "村民少年", base: {atk: 8, def: 4, hp: 50, spd: 4, critChance: 0.05}, skillIds: [] },
  church_initiate: { id: "church_initiate", name: "Church Initiate", nameZh: "教会实习生", base: {atk: 10, def: 5, hp: 55, spd: 3, critChance: 0.08}, skillIds: [] },
  port_worker: { id: "port_worker", name: "Port Worker", nameZh: "港口工人", base: {atk: 12, def: 6, hp: 60, spd: 3, critChance: 0.05}, skillIds: [] },
  merchants_guard: { id: "merchants_guard", name: "Merchants Guard", nameZh: "商人护卫", base: {atk: 14, def: 8, hp: 70, spd: 4, critChance: 0.1}, skillIds: [] },
  temple_guardian: { id: "temple_guardian", name: "Temple Guardian", nameZh: "神殿守卫", base: {atk: 18, def: 12, hp: 100, spd: 3, critChance: 0.1}, skillIds: ["fortify"] },

  // Stage 1-10 continued
  refugee_child: { id: "refugee_child", name: "Refugee Child", nameZh: "难民儿童", base: {atk: 10, def: 5, hp: 60, spd: 5, critChance: 0.05}, skillIds: [] },
  fleeing_merchant: { id: "fleeing_merchant", name: "Fleeing Merchant", nameZh: "逃亡商人", base: {atk: 12, def: 6, hp: 70, spd: 4, critChance: 0.08}, skillIds: [] },
  wounded_soldier: { id: "wounded_soldier", name: "Wounded Soldier", nameZh: "受伤士兵", base: {atk: 14, def: 8, hp: 80, spd: 3, critChance: 0.1}, skillIds: [] },
  deserter: { id: "deserter", name: "Deserter", nameZh: "逃兵", base: {atk: 16, def: 10, hp: 90, spd: 4, critChance: 0.12}, skillIds: [] },
  war_orphan: { id: "war_orphan", name: "War Orphan", nameZh: "战争孤儿", base: {atk: 18, def: 8, hp: 85, spd: 5, critChance: 0.1}, skillIds: [] },

  confused_traveler: { id: "confused_traveler", name: "Confused Traveler", nameZh: "迷茫的旅人", base: {atk: 15, def: 8, hp: 90, spd: 4, critChance: 0.1}, skillIds: [] },
  displaced_priest: { id: "displaced_priest", name: "Displaced Priest", nameZh: "流离的神父", base: {atk: 18, def: 10, hp: 100, spd: 3, critChance: 0.08}, skillIds: [] },
  rogue_soldier: { id: "rogue_soldier", name: "Rogue Soldier", nameZh: "散兵游勇", base: {atk: 20, def: 12, hp: 110, spd: 4, critChance: 0.12}, skillIds: [] },
  plundering_bandit: { id: "plundering_bandit", name: "Plundering Bandit", nameZh: "掠夺者", base: {atk: 22, def: 10, hp: 100, spd: 5, critChance: 0.15}, skillIds: [] },
  desperate_survivor: { id: "desperate_survivor", name: "Desperate Survivor", nameZh: "绝望的幸存者", base: {atk: 25, def: 14, hp: 130, spd: 3, critChance: 0.12}, skillIds: [] },

  wandering_ghost: { id: "wandering_ghost", name: "Wandering Ghost", nameZh: "游荡的幽灵", base: {atk: 20, def: 10, hp: 100, spd: 5, critChance: 0.1}, skillIds: ["slow"] },
  echo_of_fallen: { id: "echo_of_fallen", name: "Echo of the Fallen", nameZh: "倒下者的回响", base: {atk: 22, def: 12, hp: 120, spd: 4, critChance: 0.12}, skillIds: [] },
  memorial_shade: { id: "memorial_shade", name: "Memorial Shade", nameZh: "纪念的阴影", base: {atk: 25, def: 14, hp: 130, spd: 4, critChance: 0.1}, skillIds: [] },
  spectral_refugee: { id: "spectral_refugee", name: "Spectral Refugee", nameZh: "幽灵难民", base: {atk: 28, def: 12, hp: 120, spd: 5, critChance: 0.12}, skillIds: ["slow"] },
  grief_wraith: { id: "grief_wraith", name: "Grief Wraith", nameZh: "悲痛的幽灵", base: {atk: 30, def: 16, hp: 150, spd: 4, critChance: 0.15}, skillIds: [] },

  war_remnant: { id: "war_remnant", name: "War Remnant", nameZh: "战争残骸", base: {atk: 28, def: 15, hp: 140, spd: 4, critChance: 0.12}, skillIds: [] },
  destruction_echo: { id: "destruction_echo", name: "Destruction Echo", nameZh: "毁灭的回声", base: {atk: 30, def: 16, hp: 150, spd: 4, critChance: 0.12}, skillIds: [] },
  burning_memory: { id: "burning_memory", name: "Burning Memory", nameZh: "燃烧的记忆", base: {atk: 32, def: 18, hp: 160, spd: 5, critChance: 0.15}, skillIds: [] },
  fallen_kingdom_fragment: { id: "fallen_kingdom_fragment", name: "Fallen Kingdom Fragment", nameZh: "陨落王国的碎片", base: {atk: 35, def: 20, hp: 180, spd: 3, critChance: 0.15}, skillIds: [] },
  ash_guardian: { id: "ash_guardian", name: "Ash Guardian", nameZh: "灰烬守护者", base: {atk: 40, def: 25, hp: 220, spd: 3, critChance: 0.18}, skillIds: [] },

  temporal_rift_echo: { id: "temporal_rift_echo", name: "Temporal Rift Echo", nameZh: "时空裂隙的回响", base: {atk: 35, def: 18, hp: 180, spd: 5, critChance: 0.12}, skillIds: ["slow"] },
  displaced_soul: { id: "displaced_soul", name: "Displaced Soul", nameZh: "错位的灵魂", base: {atk: 38, def: 20, hp: 190, spd: 4, critChance: 0.15}, skillIds: [] },
  lost_traveler: { id: "lost_traveler", name: "Lost Traveler", nameZh: "迷失的旅人", base: {atk: 40, def: 22, hp: 200, spd: 4, critChance: 0.15}, skillIds: [] },
  worldline_fragment_enemy: { id: "worldline_fragment_enemy", name: "Worldline Fragment", nameZh: "世界线的碎片", base: {atk: 42, def: 24, hp: 220, spd: 3, critChance: 0.15}, skillIds: [] },
  rift_warden: { id: "rift_warden", name: "Rift Warden", nameZh: "裂隙守卫", base: {atk: 48, def: 28, hp: 260, spd: 3, critChance: 0.18}, skillIds: [] },

  future_echo_enemy: { id: "future_echo_enemy", name: "Future Echo", nameZh: "未来的回声", base: {atk: 42, def: 22, hp: 220, spd: 5, critChance: 0.15}, skillIds: [] },
  possibility_shade_enemy: { id: "possibility_shade_enemy", name: "Possibility Shade", nameZh: "可能性的阴影", base: {atk: 45, def: 24, hp: 240, spd: 4, critChance: 0.15}, skillIds: [] },
  timeline_remnant: { id: "timeline_remnant", name: "Timeline Remnant", nameZh: "时间线的残骸", base: {atk: 48, def: 26, hp: 250, spd: 4, critChance: 0.18}, skillIds: [] },
  convergence_entity: { id: "convergence_entity", name: "Convergence Entity", nameZh: "汇聚实体", base: {atk: 50, def: 28, hp: 280, spd: 3, critChance: 0.18}, skillIds: [] },
  worldline_walker: { id: "worldline_walker", name: "Worldline Walker", nameZh: "世界线行者", base: {atk: 55, def: 32, hp: 320, spd: 4, critChance: 0.2}, skillIds: [] },

  merged_memory: { id: "merged_memory", name: "Merged Memory", nameZh: "融合的记忆", base: {atk: 48, def: 26, hp: 260, spd: 5, critChance: 0.15}, skillIds: [] },
  calibration_echo: { id: "calibration_echo", name: "Calibration Echo", nameZh: "校准的回声", base: {atk: 50, def: 28, hp: 280, spd: 4, critChance: 0.18}, skillIds: [] },
  synthetic_spirit: { id: "synthetic_spirit", name: "Synthetic Spirit", nameZh: "合成精神体", base: {atk: 52, def: 30, hp: 300, spd: 4, critChance: 0.18}, skillIds: [] },
  three_worlds_shade: { id: "three_worlds_shade", name: "Three Worlds Shade", nameZh: "三界的阴影", base: {atk: 55, def: 32, hp: 320, spd: 3, critChance: 0.2}, skillIds: [] },
  convergence_guardian: { id: "convergence_guardian", name: "Convergence Guardian", nameZh: "汇聚守护者", base: {atk: 60, def: 36, hp: 360, spd: 3, critChance: 0.22}, skillIds: [] },

  star_fragment: { id: "star_fragment", name: "Star Fragment", nameZh: "星之碎片", base: {atk: 55, def: 30, hp: 300, spd: 5, critChance: 0.18}, skillIds: [] },
  constellation_echo: { id: "constellation_echo", name: "Constellation Echo", nameZh: "星座的回声", base: {atk: 58, def: 32, hp: 320, spd: 4, critChance: 0.18}, skillIds: [] },
  faith_remnant: { id: "faith_remnant", name: "Faith Remnant", nameZh: "信仰的残骸", base: {atk: 60, def: 35, hp: 340, spd: 4, critChance: 0.2}, skillIds: [] },
  symphony_shade: { id: "symphony_shade", name: "Symphony Shade", nameZh: "乐章的阴影", base: {atk: 62, def: 38, hp: 360, spd: 3, critChance: 0.2}, skillIds: [] },
  star_god_whisper: { id: "star_god_whisper", name: "Star God Whisper", nameZh: "星神的低语", base: {atk: 68, def: 42, hp: 400, spd: 4, critChance: 0.22}, skillIds: [] },

  faith_echo: { id: "faith_echo", name: "Faith Echo", nameZh: "信仰的回声", base: {atk: 60, def: 35, hp: 350, spd: 5, critChance: 0.18}, skillIds: [] },
  memory_keeper: { id: "memory_keeper", name: "Memory Keeper", nameZh: "记忆守护者", base: {atk: 65, def: 38, hp: 380, spd: 4, critChance: 0.2}, skillIds: [] },
  starstring_guardian: { id: "starstring_guardian", name: "Starstring Guardian", nameZh: "星链守护者", base: {atk: 68, def: 42, hp: 400, spd: 4, critChance: 0.2}, skillIds: [] },
  harmony_fragment: { id: "harmony_fragment", name: "Harmony Fragment", nameZh: "和谐的碎片", base: {atk: 72, def: 45, hp: 440, spd: 3, critChance: 0.22}, skillIds: [] },
  origin_compass_spirit: { id: "origin_compass_spirit", name: "Origin Compass Spirit", nameZh: "起源罗盘之灵", base: {atk: 80, def: 50, hp: 500, spd: 4, critChance: 0.25}, skillIds: [] },

  // Stage 11-20: Rigel Island
  refugee_ghost: { id: "refugee_ghost", name: "Refugee Ghost", nameZh: "难民幽灵", base: {atk: 35, def: 18, hp: 200, spd: 5, critChance: 0.12}, skillIds: [] },
  island_shade: { id: "island_shade", name: "Island Shade", nameZh: "岛屿的阴影", base: {atk: 38, def: 20, hp: 220, spd: 4, critChance: 0.12}, skillIds: [] },
  drowned_memory: { id: "drowned_memory", name: "Drowned Memory", nameZh: "溺亡的记忆", base: {atk: 40, def: 22, hp: 240, spd: 4, critChance: 0.15}, skillIds: [] },
  sea_remnant: { id: "sea_remnant", name: "Sea Remnant", nameZh: "海的残骸", base: {atk: 42, def: 25, hp: 260, spd: 3, critChance: 0.15}, skillIds: [] },
  hope_keeper: { id: "hope_keeper", name: "Hope Keeper", nameZh: "希望的守护者", base: {atk: 48, def: 30, hp: 320, spd: 4, critChance: 0.18}, skillIds: [] },

  fisher_ghost: { id: "fisher_ghost", name: "Fisher Ghost", nameZh: "渔夫幽灵", base: {atk: 38, def: 20, hp: 220, spd: 5, critChance: 0.12}, skillIds: [] },
  village_elder_spirit: { id: "village_elder_spirit", name: "Village Elder Spirit", nameZh: "村中长者之灵", base: {atk: 42, def: 24, hp: 260, spd: 4, critChance: 0.15}, skillIds: [] },
  island_child_shade: { id: "island_child_shade", name: "Island Child Shade", nameZh: "岛民孩童的阴影", base: {atk: 40, def: 22, hp: 240, spd: 5, critChance: 0.12}, skillIds: [] },
  healing_herb_spirit: { id: "healing_herb_spirit", name: "Healing Herb Spirit", nameZh: "药草精灵", base: {atk: 35, def: 28, hp: 280, spd: 3, critChance: 0.1}, skillIds: [] },
  rigel_guardian: { id: "rigel_guardian", name: "Rigel Guardian", nameZh: "里格尔守护者", base: {atk: 50, def: 32, hp: 350, spd: 4, critChance: 0.18}, skillIds: [] },

  star_flower_spirit: { id: "star_flower_spirit", name: "Star Flower Spirit", nameZh: "星花精灵", base: {atk: 42, def: 24, hp: 260, spd: 5, critChance: 0.15}, skillIds: [] },
  mushroom_grove_shade: { id: "mushroom_grove_shade", name: "Mushroom Grove Shade", nameZh: "蘑菇林的阴影", base: {atk: 44, def: 26, hp: 280, spd: 4, critChance: 0.15}, skillIds: [] },
  island_beast_echo: { id: "island_beast_echo", name: "Island Beast Echo", nameZh: "岛上野兽的回响", base: {atk: 46, def: 28, hp: 300, spd: 4, critChance: 0.15}, skillIds: [] },
  forest_keeper_spirit: { id: "forest_keeper_spirit", name: "Forest Keeper Spirit", nameZh: "森林守护者的灵魂", base: {atk: 48, def: 30, hp: 320, spd: 3, critChance: 0.18}, skillIds: [] },
  rigel_forest_guardian: { id: "rigel_forest_guardian", name: "Rigel Forest Guardian", nameZh: "里格尔森林守护者", base: {atk: 55, def: 35, hp: 380, spd: 4, critChance: 0.2}, skillIds: [] },

  mountain_path_shade: { id: "mountain_path_shade", name: "Mountain Path Shade", nameZh: "山路的阴影", base: {atk: 45, def: 26, hp: 280, spd: 5, critChance: 0.15}, skillIds: [] },
  cliff_memory: { id: "cliff_memory", name: "Cliff Memory", nameZh: "悬崖的记忆", base: {atk: 48, def: 28, hp: 300, spd: 4, critChance: 0.15}, skillIds: [] },
  temple_ruin_spirit: { id: "temple_ruin_spirit", name: "Temple Ruin Spirit", nameZh: "神殿废墟之灵", base: {atk: 50, def: 30, hp: 320, spd: 4, critChance: 0.18}, skillIds: [] },
  ancient_prayer_echo: { id: "ancient_prayer_echo", name: "Ancient Prayer Echo", nameZh: "古老祈祷的回声", base: {atk: 52, def: 32, hp: 340, spd: 3, critChance: 0.18}, skillIds: [] },
  mountain_shrine_guardian: { id: "mountain_shrine_guardian", name: "Mountain Shrine Guardian", nameZh: "山间神社守护者", base: {atk: 58, def: 38, hp: 400, spd: 4, critChance: 0.2}, skillIds: [] },

  temple_guardian_shade: { id: "temple_guardian_shade", name: "Temple Guardian Shade", nameZh: "神殿守卫的阴影", base: {atk: 48, def: 28, hp: 300, spd: 5, critChance: 0.15}, skillIds: [] },
  sacred_artifact_spirit: { id: "sacred_artifact_spirit", name: "Sacred Artifact Spirit", nameZh: "神圣遗物的灵魂", base: {atk: 50, def: 32, hp: 340, spd: 4, critChance: 0.18}, skillIds: [] },
  starlight_fragment: { id: "starlight_fragment", name: "Starlight Fragment", nameZh: "星光的碎片", base: {atk: 52, def: 34, hp: 360, spd: 4, critChance: 0.18}, skillIds: [] },
  prayer_echo: { id: "prayer_echo", name: "Prayer Echo", nameZh: "祈祷的回声", base: {atk: 55, def: 36, hp: 380, spd: 3, critChance: 0.2}, skillIds: [] },
  star_condensation_remnant: { id: "star_condensation_remnant", name: "Star Condensation Remnant", nameZh: "星凝教的残影", base: {atk: 62, def: 42, hp: 440, spd: 4, critChance: 0.22}, skillIds: [] },

  refugee_memory: { id: "refugee_memory", name: "Refugee Memory", nameZh: "难民的记忆", base: {atk: 50, def: 30, hp: 320, spd: 5, critChance: 0.15}, skillIds: [] },
  separated_soul: { id: "separated_soul", name: "Separated Soul", nameZh: "分离的灵魂", base: {atk: 52, def: 32, hp: 340, spd: 4, critChance: 0.18}, skillIds: [] },
  journey_echo: { id: "journey_echo", name: "Journey Echo", nameZh: "旅途的回声", base: {atk: 55, def: 35, hp: 360, spd: 4, critChance: 0.18}, skillIds: [] },
  separation_shade: { id: "separation_shade", name: "Separation Shade", nameZh: "分离的阴影", base: {atk: 58, def: 38, hp: 400, spd: 3, critChance: 0.2}, skillIds: [] },
  temporal_rift_phantom: { id: "temporal_rift_phantom", name: "Temporal Rift Phantom", nameZh: "时空裂隙的幻影", base: {atk: 65, def: 45, hp: 480, spd: 4, critChance: 0.22}, skillIds: [] },

  future_memory: { id: "future_memory", name: "Future Memory", nameZh: "未来的记忆", base: {atk: 52, def: 32, hp: 340, spd: 5, critChance: 0.18}, skillIds: [] },
  linnaria_echo: { id: "linnaria_echo", name: "Linnaria Echo", nameZh: "琳娜利亚的回声", base: {atk: 55, def: 35, hp: 370, spd: 4, critChance: 0.18}, skillIds: [] },
  worldline_fragment2: { id: "worldline_fragment2", name: "Worldline Fragment", nameZh: "世界线的碎片", base: {atk: 58, def: 38, hp: 400, spd: 4, critChance: 0.2}, skillIds: [] },
  future_city_shade: { id: "future_city_shade", name: "Future City Shade", nameZh: "未来城市的阴影", base: {atk: 60, def: 40, hp: 420, spd: 3, critChance: 0.2}, skillIds: [] },
  time_displaced_spirit: { id: "time_displaced_spirit", name: "Time Displaced Spirit", nameZh: "时间错位的灵魂", base: {atk: 68, def: 48, hp: 500, spd: 4, critChance: 0.22}, skillIds: [] },

  star_compass_fragment: { id: "star_compass_fragment", name: "Star Compass Fragment", nameZh: "星之指南针的碎片", base: {atk: 55, def: 35, hp: 370, spd: 5, critChance: 0.18}, skillIds: [] },
  burned_journal_echo: { id: "burned_journal_echo", name: "Burned Journal Echo", nameZh: "烧毁日记的回声", base: {atk: 58, def: 38, hp: 400, spd: 4, critChance: 0.2}, skillIds: [] },
  memory_fragment_enemy: { id: "memory_fragment_enemy", name: "Memory Fragment", nameZh: "记忆的碎片", base: {atk: 60, def: 40, hp: 420, spd: 4, critChance: 0.2}, skillIds: [] },
  hope_shade: { id: "hope_shade", name: "Hope Shade", nameZh: "希望的阴影", base: {atk: 62, def: 42, hp: 440, spd: 3, critChance: 0.22}, skillIds: [] },
  lost_memory_guardian: { id: "lost_memory_guardian", name: "Lost Memory Guardian", nameZh: "遗失记忆的守护者", base: {atk: 70, def: 50, hp: 520, spd: 4, critChance: 0.25}, skillIds: [] },

  temporal_echo_enemy: { id: "temporal_echo_enemy", name: "Temporal Echo", nameZh: "时间的回声", base: {atk: 58, def: 38, hp: 400, spd: 5, critChance: 0.18}, skillIds: [] },
  worldline_walker2: { id: "worldline_walker2", name: "Worldline Walker", nameZh: "世界线行者", base: {atk: 60, def: 40, hp: 420, spd: 4, critChance: 0.2}, skillIds: [] },
  faith_remnant2: { id: "faith_remnant2", name: "Faith Remnant", nameZh: "信仰的残骸", base: {atk: 62, def: 42, hp: 440, spd: 4, critChance: 0.2}, skillIds: [] },
  hope_fragment: { id: "hope_fragment", name: "Hope Fragment", nameZh: "希望的碎片", base: {atk: 65, def: 45, hp: 480, spd: 3, critChance: 0.22}, skillIds: [] },
  rigel_temple_guardian: { id: "rigel_temple_guardian", name: "Rigel Temple Guardian", nameZh: "里格尔神殿守护者", base: {atk: 75, def: 55, hp: 580, spd: 4, critChance: 0.25}, skillIds: [] },

  star_god_whisper2: { id: "star_god_whisper2", name: "Star God Whisper", nameZh: "星神的低语", base: {atk: 62, def: 42, hp: 450, spd: 5, critChance: 0.2}, skillIds: [] },
  convergence_echo: { id: "convergence_echo", name: "Convergence Echo", nameZh: "汇聚的回声", base: {atk: 65, def: 45, hp: 480, spd: 4, critChance: 0.2}, skillIds: [] },
  origin_compass_spirit2: { id: "origin_compass_spirit2", name: "Origin Compass Spirit", nameZh: "起源罗盘之灵", base: {atk: 68, def: 48, hp: 500, spd: 4, critChance: 0.22}, skillIds: [] },
  symphony_fragment: { id: "symphony_fragment", name: "Symphony Fragment", nameZh: "乐章的碎片", base: {atk: 70, def: 50, hp: 540, spd: 3, critChance: 0.22}, skillIds: [] },
  rigel_temple_master: { id: "rigel_temple_master", name: "Rigel Temple Master", nameZh: "里格尔神殿之主", base: {atk: 80, def: 60, hp: 650, spd: 4, critChance: 0.28}, skillIds: [] },

  // Stage 21-30: Linnaria
  future_refugee: { id: "future_refugee", name: "Future Refugee", nameZh: "未来的难民", base: {atk: 40, def: 22, hp: 250, spd: 5, critChance: 0.12}, skillIds: [] },
  calibration_drone: { id: "calibration_drone", name: "Calibration Drone", nameZh: "校准无人机", base: {atk: 42, def: 20, hp: 220, spd: 7, critChance: 0.1}, skillIds: ["slow"] },
  time_displaced_soul: { id: "time_displaced_soul", name: "Time Displaced Soul", nameZh: "时间错位的灵魂", base: {atk: 45, def: 24, hp: 270, spd: 4, critChance: 0.15}, skillIds: [] },
  worldline_echo: { id: "worldline_echo", name: "Worldline Echo", nameZh: "世界线的回声", base: {atk: 48, def: 26, hp: 290, spd: 4, critChance: 0.15}, skillIds: [] },
  linnaria_shade: { id: "linnaria_shade", name: "Linnaria Shade", nameZh: "琳娜利亚的阴影", base: {atk: 52, def: 30, hp: 340, spd: 3, critChance: 0.18}, skillIds: [] },

  institute_guard: { id: "institute_guard", name: "Institute Guard", nameZh: "学院守卫", base: {atk: 45, def: 25, hp: 280, spd: 4, critChance: 0.15}, skillIds: ["fortify"] },
  research_clone: { id: "research_clone", name: "Research Clone", nameZh: "研究克隆体", base: {atk: 48, def: 22, hp: 260, spd: 5, critChance: 0.18}, skillIds: [] },
  calibration_fragment: { id: "calibration_fragment", name: "Calibration Fragment", nameZh: "校准的碎片", base: {atk: 50, def: 28, hp: 300, spd: 4, critChance: 0.15}, skillIds: [] },
  time_anomaly: { id: "time_anomaly", name: "Time Anomaly", nameZh: "时间异常", base: {atk: 52, def: 30, hp: 320, spd: 3, critChance: 0.18}, skillIds: [] },
  worldline_remnant: { id: "worldline_remnant", name: "Worldline Remnant", nameZh: "世界线的残骸", base: {atk: 58, def: 35, hp: 380, spd: 4, critChance: 0.2}, skillIds: [] },

  future_echo2: { id: "future_echo2", name: "Future Echo", nameZh: "未来的回声", base: {atk: 48, def: 26, hp: 300, spd: 5, critChance: 0.15}, skillIds: [] },
  synthetic_spirit2: { id: "synthetic_spirit2", name: "Synthetic Spirit", nameZh: "合成精神体", base: {atk: 50, def: 28, hp: 320, spd: 4, critChance: 0.18}, skillIds: [] },
  three_worlds_shade2: { id: "three_worlds_shade2", name: "Three Worlds Shade", nameZh: "三界的阴影", base: {atk: 52, def: 30, hp: 340, spd: 4, critChance: 0.18}, skillIds: [] },
  calibration_entity: { id: "calibration_entity", name: "Calibration Entity", nameZh: "校准实体", base: {atk: 55, def: 32, hp: 360, spd: 3, critChance: 0.2}, skillIds: [] },
  linnaria_guardian: { id: "linnaria_guardian", name: "Linnaria Guardian", nameZh: "琳娜利亚守护者", base: {atk: 62, def: 38, hp: 420, spd: 4, critChance: 0.22}, skillIds: [] },

  memory_fragment2: { id: "memory_fragment2", name: "Memory Fragment", nameZh: "记忆的碎片", base: {atk: 50, def: 28, hp: 320, spd: 5, critChance: 0.15}, skillIds: [] },
  possibility_shade2: { id: "possibility_shade2", name: "Possibility Shade", nameZh: "可能性的阴影", base: {atk: 52, def: 30, hp: 340, spd: 4, critChance: 0.18}, skillIds: [] },
  worldline_walker3: { id: "worldline_walker3", name: "Worldline Walker", nameZh: "世界线行者", base: {atk: 55, def: 32, hp: 360, spd: 4, critChance: 0.18}, skillIds: [] },
  convergence_entity2: { id: "convergence_entity2", name: "Convergence Entity", nameZh: "汇聚实体", base: {atk: 58, def: 35, hp: 390, spd: 3, critChance: 0.2}, skillIds: [] },
  temporal_anchor: { id: "temporal_anchor", name: "Temporal Anchor", nameZh: "时间的锚点", base: {atk: 65, def: 42, hp: 450, spd: 4, critChance: 0.22}, skillIds: [] },

  institute_director: { id: "institute_director", name: "Institute Director", nameZh: "学院主管", base: {atk: 55, def: 32, hp: 360, spd: 4, critChance: 0.18}, skillIds: [] },
  calibration_master: { id: "calibration_master", name: "Calibration Master", nameZh: "校准大师", base: {atk: 58, def: 35, hp: 390, spd: 4, critChance: 0.2}, skillIds: [] },
  worldline_controller: { id: "worldline_controller", name: "Worldline Controller", nameZh: "世界线控制者", base: {atk: 60, def: 38, hp: 410, spd: 3, critChance: 0.2}, skillIds: [] },
  three_worlds_fragment: { id: "three_worlds_fragment", name: "Three Worlds Fragment", nameZh: "三界的碎片", base: {atk: 62, def: 40, hp: 440, spd: 4, critChance: 0.22}, skillIds: [] },
  linnaria_core_guardian: { id: "linnaria_core_guardian", name: "Linnaria Core Guardian", nameZh: "琳娜利亚核心守护者", base: {atk: 70, def: 48, hp: 520, spd: 4, critChance: 0.25}, skillIds: [] },

  // Stage 31-40: Eternal Slumber Remnants
  slumber_soldier: { id: "slumber_soldier", name: "Slumber Soldier", nameZh: "沉睡士兵", base: {atk: 55, def: 25, hp: 280, spd: 4, critChance: 0.12}, skillIds: ["slow", "power_strike"] },
  slumber_preacher: { id: "slumber_preacher", name: "Slumber Preacher", nameZh: "沉睡传道者", base: {atk: 50, def: 30, hp: 300, spd: 3, critChance: 0.08}, skillIds: ["weaken", "curse_of_withering"] },
  void_acolyte: { id: "void_acolyte", name: "Void Acolyte", nameZh: "虚空侍僧", base: {atk: 52, def: 22, hp: 260, spd: 5, critChance: 0.1}, skillIds: ["soul_drain", "weaken"] },
  historical_fragment: { id: "historical_fragment", name: "Historical Fragment", nameZh: "历史残片", base: {atk: 48, def: 35, hp: 350, spd: 2, critChance: 0.05}, skillIds: ["slow", "fortify"] },
  slumber_knight: { id: "slumber_knight", name: "Slumber Knight", nameZh: "沉睡骑士", base: {atk: 62, def: 40, hp: 450, spd: 3, critChance: 0.15}, skillIds: ["battle_cry", "double_strike"] },
  temporal_echo2: { id: "temporal_echo2", name: "Temporal Echo", nameZh: "时间回声", base: {atk: 54, def: 28, hp: 290, spd: 6, critChance: 0.1}, skillIds: ["time_distortion", "slow"] },
  slumber_lord: { id: "slumber_lord", name: "Slumber Lord", nameZh: "沉睡领主", base: {atk: 75, def: 50, hp: 550, spd: 3, critChance: 0.2}, skillIds: ["dark_healing", "soul_revival", "execute"] },

  // Stage 41-50: Institute and Prison Camp
  compliance_officer: { id: "compliance_officer", name: "Compliance Officer", nameZh: "合规官员", base: {atk: 78, def: 50, hp: 500, spd: 3, critChance: 0.1}, skillIds: ["weaken", "curse_of_withering"] },
  prison_commander: { id: "prison_commander", name: "Prison Commander", nameZh: "监狱指挥官", base: {atk: 92, def: 60, hp: 650, spd: 3, critChance: 0.22}, skillIds: ["battle_cry", "execute", "soul_revival"] },
  reformation_warden: { id: "reformation_warden", name: "Reformation Warden", nameZh: "改革监督", base: {atk: 98, def: 65, hp: 700, spd: 3, critChance: 0.22}, skillIds: ["soul_drain", "dark_healing"] },
  exam_guard: { id: "exam_guard", name: "Exam Guard", nameZh: "考试守卫", base: {atk: 88, def: 60, hp: 600, spd: 3, critChance: 0.15}, skillIds: ["fortify", "power_strike"] },

  // Stage 51-60: Star God Remnants
  constellation_shade: { id: "constellation_shade", name: "Constellation Shade", nameZh: "星座幽影", base: {atk: 105, def: 55, hp: 650, spd: 6, critChance: 0.18}, skillIds: ["slow", "light_heal"] },
  symphonie_echo: { id: "symphonie_echo", name: "Symphonie Echo", nameZh: "乐章回声", base: {atk: 100, def: 45, hp: 550, spd: 7, critChance: 0.2}, skillIds: ["multi_attack_random", "buff_all"] },
  starlight_wraith: { id: "starlight_wraith", name: "Starlight Wraith", nameZh: "星光幽魂", base: {atk: 108, def: 50, hp: 600, spd: 6, critChance: 0.22}, skillIds: ["soul_drain", "execute"] },
  loom_guardian: { id: "loom_guardian", name: "Loom Guardian", nameZh: "织机守护者", base: {atk: 115, def: 75, hp: 800, spd: 3, critChance: 0.2}, skillIds: ["fortify", "barrier", "group_heal"] },
  star_god_fragment: { id: "star_god_fragment", name: "Star God Fragment", nameZh: "星神残片", base: {atk: 125, def: 65, hp: 700, spd: 5, critChance: 0.28}, skillIds: ["dark_healing", "soul_revival", "buff_all"] },
  thanatos_fragment: { id: "thanatos_fragment", name: "Thanatos Fragment", nameZh: "塔纳托斯残片", base: {atk: 170, def: 110, hp: 1200, spd: 5, critChance: 0.4}, skillIds: ["death_sentence", "soul_revival", "dark_healing"] },

  // Stage 61-70: Music Spirits
  melody_fragment: { id: "melody_fragment", name: "Melody Fragment", nameZh: "旋律碎片", base: {atk: 150, def: 70, hp: 850, spd: 7, critChance: 0.28}, skillIds: ["slow", "multi_attack_random"] },
  harmony_shade: { id: "harmony_shade", name: "Harmony Shade", nameZh: "和谐幽影", base: {atk: 145, def: 80, hp: 950, spd: 5, critChance: 0.25}, skillIds: ["buff_all", "shield_all"] },
  dissonance_entity: { id: "dissonance_entity", name: "Dissonance Entity", nameZh: "不协和实体", base: {atk: 155, def: 65, hp: 800, spd: 6, critChance: 0.3}, skillIds: ["weaken", "curse_of_withering"] },
  symphony_guardian: { id: "symphony_guardian", name: "Symphony Guardian", nameZh: "交响乐守护者", base: {atk: 160, def: 95, hp: 1100, spd: 4, critChance: 0.3}, skillIds: ["barrier", "group_heal", "execute"] },
  lyre_spirit: { id: "lyre_spirit", name: "Lyre Spirit", nameZh: "竖琴精灵", base: {atk: 165, def: 85, hp: 1000, spd: 6, critChance: 0.35}, skillIds: ["buff_all", "light_heal", "shield_all"] },
  meteor_entity: { id: "meteor_entity", name: "Meteor Entity", nameZh: "陨星实体", base: {atk: 215, def: 120, hp: 1350, spd: 6, critChance: 0.48}, skillIds: ["meteor_strike", "ancient_wrath", "execute"] },

  // Stage 71-100: Hope and Future
  future_echo3: { id: "future_echo3", name: "Future Echo", nameZh: "未来回声", base: {atk: 185, def: 100, hp: 1150, spd: 7, critChance: 0.38}, skillIds: ["time_distortion", "buff_all"] },
  memory_fragment3: { id: "memory_fragment3", name: "Memory Fragment", nameZh: "记忆碎片", base: {atk: 188, def: 90, hp: 1050, spd: 6, critChance: 0.4}, skillIds: ["soul_drain", "slow"] },
  possibility_shade3: { id: "possibility_shade3", name: "Possibility Shade", nameZh: "可能性幽影", base: {atk: 192, def: 115, hp: 1350, spd: 4, critChance: 0.38}, skillIds: ["shield_all", "fortify"] },
  eternal_harmony: { id: "eternal_harmony", name: "Eternal Harmony", nameZh: "永恒和谐", base: {atk: 198, def: 130, hp: 1500, spd: 5, critChance: 0.42}, skillIds: ["group_heal", "buff_all", "execute"] },
  origin_compass: { id: "origin_compass", name: "Origin Compass", nameZh: "起源罗盘", base: {atk: 205, def: 140, hp: 1600, spd: 5, critChance: 0.45}, skillIds: ["fortify", "power_strike", "execute"] },
  synthesizer: { id: "synthesizer", name: "The Synthesizer", nameZh: "合成者", base: {atk: 300, def: 280, hp: 3500, spd: 7, critChance: 0.85}, skillIds: ["buff_all", "group_heal", "shield_all"] },
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

// ENEMIES - teams reference enemy type IDs
export const ENEMIES = [
  // Stage 1-10
  { id: "1", members: ["village_youth", "church_initiate", "port_worker", "merchants_guard", "temple_guardian"] },
  { id: "2", members: ["refugee_child", "fleeing_merchant", "wounded_soldier", "deserter", "war_orphan"] },
  { id: "3", members: ["confused_traveler", "displaced_priest", "rogue_soldier", "plundering_bandit", "desperate_survivor"] },
  { id: "4", members: ["wandering_ghost", "echo_of_fallen", "memorial_shade", "spectral_refugee", "grief_wraith"] },
  { id: "5", members: ["war_remnant", "destruction_echo", "burning_memory", "fallen_kingdom_fragment", "ash_guardian"] },
  { id: "6", members: ["temporal_rift_echo", "displaced_soul", "lost_traveler", "worldline_fragment_enemy", "rift_warden"] },
  { id: "7", members: ["future_echo_enemy", "possibility_shade_enemy", "timeline_remnant", "convergence_entity", "worldline_walker"] },
  { id: "8", members: ["merged_memory", "calibration_echo", "synthetic_spirit", "three_worlds_shade", "convergence_guardian"] },
  { id: "9", members: ["star_fragment", "constellation_echo", "faith_remnant", "symphony_shade", "star_god_whisper"] },
  { id: "10", members: ["faith_echo", "memory_keeper", "starstring_guardian", "harmony_fragment", "origin_compass_spirit"] },

  // Stage 11-20
  { id: "11", members: ["refugee_ghost", "island_shade", "drowned_memory", "sea_remnant", "hope_keeper"] },
  { id: "12", members: ["fisher_ghost", "village_elder_spirit", "island_child_shade", "healing_herb_spirit", "rigel_guardian"] },
  { id: "13", members: ["star_flower_spirit", "mushroom_grove_shade", "island_beast_echo", "forest_keeper_spirit", "rigel_forest_guardian"] },
  { id: "14", members: ["mountain_path_shade", "cliff_memory", "temple_ruin_spirit", "ancient_prayer_echo", "mountain_shrine_guardian"] },
  { id: "15", members: ["temple_guardian_shade", "sacred_artifact_spirit", "starlight_fragment", "prayer_echo", "star_condensation_remnant"] },
  { id: "16", members: ["refugee_memory", "separated_soul", "journey_echo", "separation_shade", "temporal_rift_phantom"] },
  { id: "17", members: ["future_memory", "linnaria_echo", "worldline_fragment2", "future_city_shade", "time_displaced_spirit"] },
  { id: "18", members: ["star_compass_fragment", "burned_journal_echo", "memory_fragment_enemy", "hope_shade", "lost_memory_guardian"] },
  { id: "19", members: ["temporal_echo_enemy", "worldline_walker2", "faith_remnant2", "hope_fragment", "rigel_temple_guardian"] },
  { id: "20", members: ["star_god_whisper2", "convergence_echo", "origin_compass_spirit2", "symphony_fragment", "rigel_temple_master"] },

  // Stage 21-30
  { id: "21", members: ["future_refugee", "calibration_drone", "time_displaced_soul", "worldline_echo", "linnaria_shade"] },
  { id: "22", members: ["institute_guard", "research_clone", "calibration_fragment", "time_anomaly", "worldline_remnant"] },
  { id: "23", members: ["future_echo2", "synthetic_spirit2", "three_worlds_shade2", "calibration_entity", "linnaria_guardian"] },
  { id: "24", members: ["memory_fragment2", "possibility_shade2", "worldline_walker3", "convergence_entity2", "temporal_anchor"] },
  { id: "25", members: ["institute_director", "calibration_master", "worldline_controller", "three_worlds_fragment", "linnaria_core_guardian"] },
  { id: "26", members: ["star_fragment", "constellation_echo", "faith_remnant", "symphony_shade", "star_god_whisper"] },
  { id: "27", members: ["merged_memory", "worldline_fragment2", "three_worlds_shade2", "convergence_echo", "origin_compass_spirit2"] },
  { id: "28", members: ["future_echo2", "future_memory", "separation_shade", "temporal_anchor", "eternal_harmony"] },
  { id: "29", members: ["starstring_guardian", "loose_fragment", "symphonie_echo", "harmony_shade", "star_god_fragment"] },
  { id: "30", members: ["worldline_anchor", "temporal_convergence", "three_worlds_keeper", "faith_echo", "linnaria_core"] },

  // Stage 31-40
  { id: "31", members: ["slumber_soldier", "slumber_preacher", "void_acolyte", "historical_fragment", "slumber_knight"] },
  { id: "32", members: ["temporal_echo2", "slumber_soldier", "void_acolyte", "historical_fragment", "slumber_preacher"] },
  { id: "33", members: ["slumber_soldier", "temporal_echo2", "void_acolyte", "historical_fragment", "slumber_knight"] },
  { id: "34", members: ["temporal_echo2", "slumber_preacher", "void_acolyte", "historical_fragment", "slumber_lord"] },
  { id: "35", members: ["slumber_soldier", "temporal_echo2", "void_acolyte", "historical_fragment", "slumber_knight"] },
  { id: "36", members: ["temporal_echo2", "slumber_soldier", "void_acolyte", "historical_fragment", "slumber_lord"] },
  { id: "37", members: ["slumber_soldier", "temporal_echo2", "void_acolyte", "historical_fragment", "slumber_knight"] },
  { id: "38", members: ["temporal_echo2", "slumber_preacher", "void_acolyte", "historical_fragment", "slumber_lord"] },
  { id: "39", members: ["slumber_soldier", "temporal_echo2", "void_acolyte", "historical_fragment", "slumber_knight"] },
  { id: "40", members: ["temporal_echo2", "slumber_soldier", "void_acolyte", "historical_fragment", "slumber_lord"] },

  // Stage 41-50
  { id: "41", members: ["institute_guard", "calibration_drone", "research_clone", "compliance_officer", "institute_director"] },
  { id: "42", members: ["calibration_drone", "institute_guard", "research_clone", "prison_commander", "institute_director"] },
  { id: "43", members: ["institute_guard", "calibration_drone", "research_clone", "compliance_officer", "reformation_warden"] },
  { id: "44", members: ["calibration_drone", "institute_guard", "research_clone", "exam_guard", "prison_commander"] },
  { id: "45", members: ["institute_guard", "calibration_drone", "research_clone", "compliance_officer", "institute_director"] },
  { id: "46", members: ["calibration_drone", "institute_guard", "research_clone", "exam_guard", "reformation_warden"] },
  { id: "47", members: ["institute_guard", "calibration_drone", "research_clone", "compliance_officer", "prison_commander"] },
  { id: "48", members: ["calibration_drone", "institute_guard", "research_clone", "exam_guard", "institute_director"] },
  { id: "49", members: ["institute_guard", "calibration_drone", "research_clone", "compliance_officer", "reformation_warden"] },
  { id: "50", members: ["calibration_drone", "institute_guard", "research_clone", "exam_guard", "prison_commander"] },

  // Stage 51-60
  { id: "51", members: ["constellation_shade", "symphonie_echo", "starlight_wraith", "loom_guardian", "star_god_fragment"] },
  { id: "52", members: ["symphonie_echo", "constellation_shade", "starlight_wraith", "star_god_fragment", "loom_guardian"] },
  { id: "53", members: ["constellation_shade", "symphonie_echo", "starlight_wraith", "loom_guardian", "star_god_fragment"] },
  { id: "54", members: ["symphonie_echo", "constellation_shade", "starlight_wraith", "star_god_fragment", "loom_guardian"] },
  { id: "55", members: ["constellation_shade", "symphonie_echo", "starlight_wraith", "loom_guardian", "star_god_fragment"] },
  { id: "56", members: ["symphonie_echo", "constellation_shade", "starlight_wraith", "star_god_fragment", "loom_guardian"] },
  { id: "57", members: ["constellation_shade", "symphonie_echo", "starlight_wraith", "loom_guardian", "star_god_fragment"] },
  { id: "58", members: ["symphonie_echo", "constellation_shade", "starlight_wraith", "star_god_fragment", "loom_guardian"] },
  { id: "59", members: ["constellation_shade", "symphonie_echo", "starlight_wraith", "loom_guardian", "star_god_fragment"] },
  { id: "60", members: ["symphonie_echo", "constellation_shade", "starlight_wraith", "star_god_fragment", "thanatos_fragment"] },

  // Stage 61-70
  { id: "61", members: ["melody_fragment", "harmony_shade", "dissonance_entity", "symphony_guardian", "lyre_spirit"] },
  { id: "62", members: ["harmony_shade", "melody_fragment", "dissonance_entity", "lyre_spirit", "symphony_guardian"] },
  { id: "63", members: ["melody_fragment", "harmony_shade", "dissonance_entity", "symphony_guardian", "lyre_spirit"] },
  { id: "64", members: ["harmony_shade", "melody_fragment", "dissonance_entity", "lyre_spirit", "symphony_guardian"] },
  { id: "65", members: ["melody_fragment", "harmony_shade", "dissonance_entity", "symphony_guardian", "lyre_spirit"] },
  { id: "66", members: ["harmony_shade", "melody_fragment", "dissonance_entity", "lyre_spirit", "symphony_guardian"] },
  { id: "67", members: ["melody_fragment", "harmony_shade", "dissonance_entity", "symphony_guardian", "lyre_spirit"] },
  { id: "68", members: ["harmony_shade", "melody_fragment", "dissonance_entity", "lyre_spirit", "symphony_guardian"] },
  { id: "69", members: ["melody_fragment", "harmony_shade", "dissonance_entity", "symphony_guardian", "lyre_spirit"] },
  { id: "70", members: ["harmony_shade", "melody_fragment", "dissonance_entity", "lyre_spirit", "meteor_entity"] },

  // Stage 71-100 (simplified - same enemy types with increasing difficulty)
  { id: "71", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "72", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "73", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "74", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "75", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "76", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "77", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "78", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "79", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "80", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "worldline_controller"] },
  { id: "81", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "82", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "83", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "84", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "85", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "86", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "87", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "88", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "89", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "90", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "synthesizer"] },
  { id: "91", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "92", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "93", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "94", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "95", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "96", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "97", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "98", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "origin_compass", "eternal_harmony"] },
  { id: "99", members: ["future_echo3", "memory_fragment3", "possibility_shade3", "eternal_harmony", "origin_compass"] },
  { id: "100", members: ["memory_fragment3", "future_echo3", "possibility_shade3", "eternal_harmony", "synthesizer"] }
]
