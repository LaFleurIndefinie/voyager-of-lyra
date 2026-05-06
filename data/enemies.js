// Helper function to scale enemy stats based on stage
function scaleEnemy(base, stage) {
  const multiplier = 1 + (stage - 1) * 0.12
  return {
    atk: Math.round(base.atk * multiplier),
    def: Math.round(base.def * multiplier),
    hp: Math.round(base.hp * multiplier),
    spd: Math.max(1, Math.round(base.spd * (1 + (stage - 1) * 0.05)))
  }
}

export const ENEMIES = [
  // Stage 1-10: Beginning Journey
  {
    id: "1",
    members: [
      { id: "e1_1", name: "Slime A", nameZh: "史莱姆 A", ...scaleEnemy({atk: 5, def: 2, hp: 30, spd: 3}, 1) },
      { id: "e1_2", name: "Slime B", nameZh: "史莱姆 B", ...scaleEnemy({atk: 5, def: 2, hp: 30, spd: 2}, 1) },
      { id: "e1_3", name: "Slime C", nameZh: "史莱姆 C", ...scaleEnemy({atk: 6, def: 3, hp: 35, spd: 2}, 1) },
      { id: "e1_4", name: "Slime D", nameZh: "史莱姆 D", ...scaleEnemy({atk: 4, def: 1, hp: 25, spd: 4}, 1) },
      { id: "e1_5", name: "Slime King", nameZh: "史莱姆之王", ...scaleEnemy({atk: 8, def: 4, hp: 50, spd: 1}, 1) }
    ]
  },
  {
    id: "2",
    members: [
      { id: "e2_1", name: "Forest Bat", nameZh: "", ...scaleEnemy({atk: 7, def: 2, hp: 35, spd: 4}, 2) },
      { id: "e2_2", name: "Wood Spider", nameZh: "", ...scaleEnemy({atk: 6, def: 3, hp: 40, spd: 3}, 2) },
      { id: "e2_3", name: "Root Sprite", nameZh: "", ...scaleEnemy({atk: 5, def: 4, hp: 45, spd: 2}, 2) },
      { id: "e2_4", name: "Feral Wolf", nameZh: "", ...scaleEnemy({atk: 8, def: 3, hp: 38, spd: 5}, 2) },
      { id: "e2_5", name: "Mire Toad", nameZh: "", ...scaleEnemy({atk: 6, def: 2, hp: 50, spd: 2}, 2) }
    ]
  },
  {
    id: "3",
    members: [
      { id: "e3_1", name: "Goblin Scout", nameZh: "", ...scaleEnemy({atk: 9, def: 3, hp: 45, spd: 4}, 3) },
      { id: "e3_2", name: "Goblin Archer", nameZh: "", ...scaleEnemy({atk: 10, def: 2, hp: 40, spd: 5}, 3) },
      { id: "e3_3", name: "Goblin Fighter", nameZh: "", ...scaleEnemy({atk: 11, def: 4, hp: 50, spd: 3}, 3) },
      { id: "e3_4", name: "Goblin Shaman", nameZh: "", ...scaleEnemy({atk: 8, def: 3, hp: 45, spd: 4}, 3) },
      { id: "e3_5", name: "Goblin Chief", nameZh: "", ...scaleEnemy({atk: 12, def: 5, hp: 60, spd: 3}, 3) }
    ]
  },
  {
    id: "4",
    members: [
      { id: "e4_1", name: "Bandit Thief", nameZh: "", ...scaleEnemy({atk: 11, def: 4, hp: 55, spd: 4}, 4) },
      { id: "e4_2", name: "Bandit Archer", nameZh: "", ...scaleEnemy({atk: 12, def: 3, hp: 50, spd: 5}, 4) },
      { id: "e4_3", name: "Bandit Brute", nameZh: "", ...scaleEnemy({atk: 13, def: 5, hp: 60, spd: 3}, 4) },
      { id: "e4_4", name: "Bandit Mage", nameZh: "", ...scaleEnemy({atk: 10, def: 2, hp: 45, spd: 4}, 4) },
      { id: "e4_5", name: "Bandit Leader", nameZh: "", ...scaleEnemy({atk: 14, def: 6, hp: 70, spd: 4}, 4) }
    ]
  },
  {
    id: "5",
    members: [
      { id: "e5_1", name: "Forest Spider", nameZh: "", ...scaleEnemy({atk: 12, def: 4, hp: 60, spd: 4}, 5) },
      { id: "e5_2", name: "Giant Spider", nameZh: "", ...scaleEnemy({atk: 14, def: 5, hp: 70, spd: 3}, 5) },
      { id: "e5_3", name: "Spider Nurse", nameZh: "", ...scaleEnemy({atk: 10, def: 3, hp: 55, spd: 5}, 5) },
      { id: "e5_4", name: "Web Weaver", nameZh: "", ...scaleEnemy({atk: 13, def: 4, hp: 65, spd: 4}, 5) },
      { id: "e5_5", name: "Spider Queen", nameZh: "", ...scaleEnemy({atk: 16, def: 7, hp: 90, spd: 3}, 5) }
    ]
  },
  {
    id: "6",
    members: [
      { id: "e6_1", name: "Orc Grunt", nameZh: "", ...scaleEnemy({atk: 14, def: 6, hp: 75, spd: 3}, 6) },
      { id: "e6_2", name: "Orc Warrior", nameZh: "", ...scaleEnemy({atk: 16, def: 7, hp: 85, spd: 3}, 6) },
      { id: "e6_3", name: "Orc Shaman", nameZh: "", ...scaleEnemy({atk: 12, def: 4, hp: 65, spd: 4}, 6) },
      { id: "e6_4", name: "Orc Hunter", nameZh: "", ...scaleEnemy({atk: 15, def: 5, hp: 70, spd: 5}, 6) },
      { id: "e6_5", name: "Orc Warchief", nameZh: "", ...scaleEnemy({atk: 18, def: 8, hp: 100, spd: 3}, 6) }
    ]
  },
  {
    id: "7",
    members: [
      { id: "e7_1", name: "Dark Spriggan", nameZh: "", ...scaleEnemy({atk: 15, def: 6, hp: 75, spd: 4}, 7) },
      { id: "e7_2", name: "Shadow Wisp", nameZh: "", ...scaleEnemy({atk: 14, def: 4, hp: 60, spd: 6}, 7) },
      { id: "e7_3", name: "Dark Dryad", nameZh: "", ...scaleEnemy({atk: 16, def: 5, hp: 70, spd: 4}, 7) },
      { id: "e7_4", name: "Corrupted Treant", nameZh: "", ...scaleEnemy({atk: 18, def: 8, hp: 90, spd: 2}, 7) },
      { id: "e7_5", name: "Forest Demon", nameZh: "", ...scaleEnemy({atk: 20, def: 7, hp: 85, spd: 4}, 7) }
    ]
  },
  {
    id: "8",
    members: [
      { id: "e8_1", name: "Toxic Mushroom", nameZh: "", ...scaleEnemy({atk: 16, def: 5, hp: 70, spd: 2}, 8) },
      { id: "e8_2", name: "Spore Cloud", nameZh: "", ...scaleEnemy({atk: 15, def: 3, hp: 55, spd: 5}, 8) },
      { id: "e8_3", name: "Giant Fungus", nameZh: "", ...scaleEnemy({atk: 17, def: 7, hp: 85, spd: 2}, 8) },
      { id: "e8_4", name: "Mushroom Knight", nameZh: "", ...scaleEnemy({atk: 18, def: 8, hp: 90, spd: 3}, 8) },
      { id: "e8_5", name: "Myconid Elder", nameZh: "", ...scaleEnemy({atk: 20, def: 6, hp: 80, spd: 4}, 8) }
    ]
  },
  {
    id: "9",
    members: [
      { id: "e9_1", name: "Forest Witch", nameZh: "", ...scaleEnemy({atk: 17, def: 5, hp: 75, spd: 5}, 9) },
      { id: "e9_2", name: "Hex Caster", nameZh: "", ...scaleEnemy({atk: 19, def: 4, hp: 65, spd: 5}, 9) },
      { id: "e9_3", name: "Witch Familiar", nameZh: "", ...scaleEnemy({atk: 15, def: 3, hp: 55, spd: 6}, 9) },
      { id: "e9_4", name: "Cursed Oak", nameZh: "", ...scaleEnemy({atk: 20, def: 9, hp: 100, spd: 2}, 9) },
      { id: "e9_5", name: "Hermit Witch", nameZh: "", ...scaleEnemy({atk: 22, def: 7, hp: 90, spd: 4}, 9) }
    ]
  },
  {
    id: "10",
    members: [
      { id: "e10_1", name: "Guardian Sprite", nameZh: "", ...scaleEnemy({atk: 20, def: 8, hp: 90, spd: 5}, 10) },
      { id: "e10_2", name: "Ancient Treant", nameZh: "", ...scaleEnemy({atk: 24, def: 12, hp: 130, spd: 2}, 10) },
      { id: "e10_3", name: "Forest Wyrm", nameZh: "", ...scaleEnemy({atk: 26, def: 10, hp: 110, spd: 4}, 10) },
      { id: "e10_4", name: "Elder Dryad", nameZh: "", ...scaleEnemy({atk: 22, def: 9, hp: 100, spd: 5}, 10) },
      { id: "e10_5", name: "Forest Guardian", nameZh: "", ...scaleEnemy({atk: 30, def: 15, hp: 180, spd: 3}, 10) }
    ]
  },
  // Stage 11-20: Ruined Kingdom
  {
    id: "11",
    members: [
      { id: "e11_1", name: "Ghostly Child", nameZh: "", ...scaleEnemy({atk: 18, def: 5, hp: 70, spd: 5}, 11) },
      { id: "e11_2", name: "Phantom Scholar", nameZh: "", ...scaleEnemy({atk: 20, def: 6, hp: 80, spd: 4}, 11) },
      { id: "e11_3", name: "Village Specter", nameZh: "", ...scaleEnemy({atk: 22, def: 7, hp: 90, spd: 4}, 11) },
      { id: "e11_4", name: "Abandoned Doll", nameZh: "", ...scaleEnemy({atk: 16, def: 4, hp: 65, spd: 6}, 11) },
      { id: "e11_5", name: "Village Phantom", nameZh: "", ...scaleEnemy({atk: 24, def: 8, hp: 100, spd: 4}, 11) }
    ]
  },
  {
    id: "12",
    members: [
      { id: "e12_1", name: "Ghost Soldier", nameZh: "", ...scaleEnemy({atk: 20, def: 7, hp: 85, spd: 5}, 12) },
      { id: "e12_2", name: "Spectral Knight", nameZh: "", ...scaleEnemy({atk: 24, def: 10, hp: 110, spd: 3}, 12) },
      { id: "e12_3", name: "Phantom Captain", nameZh: "", ...scaleEnemy({atk: 26, def: 11, hp: 120, spd: 4}, 12) },
      { id: "e12_4", name: "Ghost Mage", nameZh: "", ...scaleEnemy({atk: 22, def: 6, hp: 80, spd: 5}, 12) },
      { id: "e12_5", name: "Spirit Commander", nameZh: "", ...scaleEnemy({atk: 28, def: 12, hp: 140, spd: 4}, 12) }
    ]
  },
  {
    id: "13",
    members: [
      { id: "e13_1", name: "Skeleton Warrior", nameZh: "", ...scaleEnemy({atk: 22, def: 8, hp: 90, spd: 4}, 13) },
      { id: "e13_2", name: "Skeleton Archer", nameZh: "", ...scaleEnemy({atk: 24, def: 6, hp: 75, spd: 5}, 13) },
      { id: "e13_3", name: "Skeleton Mage", nameZh: "", ...scaleEnemy({atk: 26, def: 5, hp: 70, spd: 4}, 13) },
      { id: "e13_4", name: "Skeleton Champion", nameZh: "", ...scaleEnemy({atk: 28, def: 10, hp: 110, spd: 3}, 13) },
      { id: "e13_5", name: "Bone Lord", nameZh: "", ...scaleEnemy({atk: 30, def: 12, hp: 140, spd: 4}, 13) }
    ]
  },
  {
    id: "14",
    members: [
      { id: "e14_1", name: "Cursed Soldier", nameZh: "", ...scaleEnemy({atk: 24, def: 9, hp: 100, spd: 5}, 14) },
      { id: "e14_2", name: "Cursed Paladin", nameZh: "", ...scaleEnemy({atk: 28, def: 12, hp: 130, spd: 3}, 14) },
      { id: "e14_3", name: "Blight Knight", nameZh: "", ...scaleEnemy({atk: 30, def: 10, hp: 110, spd: 4}, 14) },
      { id: "e14_4", name: "Doom Bringer", nameZh: "", ...scaleEnemy({atk: 32, def: 11, hp: 120, spd: 4}, 14) },
      { id: "e14_5", name: "Cursed Knight", nameZh: "", ...scaleEnemy({atk: 34, def: 14, hp: 160, spd: 4}, 14) }
    ]
  },
  {
    id: "15",
    members: [
      { id: "e15_1", name: "Fallen Angel", nameZh: "", ...scaleEnemy({atk: 26, def: 10, hp: 110, spd: 5}, 15) },
      { id: "e15_2", name: "Corrupted Cleric", nameZh: "", ...scaleEnemy({atk: 24, def: 8, hp: 100, spd: 4}, 15) },
      { id: "e15_3", name: "Dark Acolyte", nameZh: "", ...scaleEnemy({atk: 28, def: 7, hp: 90, spd: 5}, 15) },
      { id: "e15_4", name: "Unholy Bishop", nameZh: "", ...scaleEnemy({atk: 30, def: 11, hp: 120, spd: 4}, 15) },
      { id: "e15_5", name: "Cathedral Guardian", nameZh: "", ...scaleEnemy({atk: 32, def: 13, hp: 150, spd: 4}, 15) }
    ]
  },
  {
    id: "16",
    members: [
      { id: "e16_1", name: "Crypt Crawler", nameZh: "", ...scaleEnemy({atk: 28, def: 10, hp: 110, spd: 5}, 16) },
      { id: "e16_2", name: "Grave Stalker", nameZh: "", ...scaleEnemy({atk: 30, def: 11, hp: 120, spd: 5}, 16) },
      { id: "e16_3", name: "Death Watcher", nameZh: "", ...scaleEnemy({atk: 26, def: 9, hp: 100, spd: 6}, 16) },
      { id: "e16_4", name: "Tomb Horror", nameZh: "", ...scaleEnemy({atk: 32, def: 13, hp: 140, spd: 3}, 16) },
      { id: "e16_5", name: "Crypt Horror", nameZh: "", ...scaleEnemy({atk: 36, def: 15, hp: 180, spd: 4}, 16) }
    ]
  },
  {
    id: "17",
    members: [
      { id: "e17_1", name: "Minor Wraith", nameZh: "", ...scaleEnemy({atk: 28, def: 8, hp: 100, spd: 6}, 17) },
      { id: "e17_2", name: "Soul Wraith", nameZh: "", ...scaleEnemy({atk: 32, def: 10, hp: 120, spd: 5}, 17) },
      { id: "e17_3", name: "Death Wraith", nameZh: "", ...scaleEnemy({atk: 34, def: 11, hp: 130, spd: 5}, 17) },
      { id: "e17_4", name: "Phantom Swarm", nameZh: "", ...scaleEnemy({atk: 30, def: 9, hp: 110, spd: 7}, 17) },
      { id: "e17_5", name: "Wraith Lord", nameZh: "", ...scaleEnemy({atk: 38, def: 14, hp: 170, spd: 5}, 17) }
    ]
  },
  {
    id: "18",
    members: [
      { id: "e18_1", name: "Stone Guardian", nameZh: "", ...scaleEnemy({atk: 30, def: 14, hp: 140, spd: 3}, 18) },
      { id: "e18_2", name: "Golem Sentry", nameZh: "", ...scaleEnemy({atk: 34, def: 16, hp: 160, spd: 2}, 18) },
      { id: "e18_3", name: "Runic Guardian", nameZh: "", ...scaleEnemy({atk: 32, def: 15, hp: 150, spd: 3}, 18) },
      { id: "e18_4", name: "Ancient Construct", nameZh: "", ...scaleEnemy({atk: 36, def: 18, hp: 180, spd: 2}, 18) },
      { id: "e18_5", name: "Bone Golem", nameZh: "", ...scaleEnemy({atk: 40, def: 20, hp: 200, spd: 3}, 18) }
    ]
  },
  {
    id: "19",
    members: [
      { id: "e19_1", name: "Skeleton Lord", nameZh: "", ...scaleEnemy({atk: 34, def: 14, hp: 150, spd: 4}, 19) },
      { id: "e19_2", name: "Death Knight", nameZh: "", ...scaleEnemy({atk: 38, def: 16, hp: 170, spd: 4}, 19) },
      { id: "e19_3", name: "Dread Knight", nameZh: "", ...scaleEnemy({atk: 40, def: 17, hp: 180, spd: 4}, 19) },
      { id: "e19_4", name: "Grave King", nameZh: "", ...scaleEnemy({atk: 42, def: 18, hp: 190, spd: 4}, 19) },
      { id: "e19_5", name: "Undead King", nameZh: "", ...scaleEnemy({atk: 46, def: 22, hp: 230, spd: 4}, 19) }
    ]
  },
  {
    id: "20",
    members: [
      { id: "e20_1", name: "Lich Apprentice", nameZh: "", ...scaleEnemy({atk: 36, def: 12, hp: 140, spd: 5}, 20) },
      { id: "e20_2", name: "Death Mage", nameZh: "", ...scaleEnemy({atk: 40, def: 14, hp: 160, spd: 5}, 20) },
      { id: "e20_3", name: "Bone Colossus", nameZh: "", ...scaleEnemy({atk: 44, def: 20, hp: 200, spd: 3}, 20) },
      { id: "e20_4", name: "Soul Harvester", nameZh: "", ...scaleEnemy({atk: 42, def: 16, hp: 180, spd: 5}, 20) },
      { id: "e20_5", name: "Lich Lord", nameZh: "", ...scaleEnemy({atk: 50, def: 25, hp: 280, spd: 5}, 20) }
    ]
  },
  // Stage 21-30: Mountain Pass
  {
    id: "21",
    members: [
      { id: "e21_1", name: "Mountain Bandit", nameZh: "", ...scaleEnemy({atk: 36, def: 14, hp: 150, spd: 5}, 21) },
      { id: "e21_2", name: "Rock Thrower", nameZh: "", ...scaleEnemy({atk: 38, def: 15, hp: 160, spd: 4}, 21) },
      { id: "e21_3", name: "Cliff Leaper", nameZh: "", ...scaleEnemy({atk: 34, def: 12, hp: 140, spd: 6}, 21) },
      { id: "e21_4", name: "Trail Guardian", nameZh: "", ...scaleEnemy({atk: 40, def: 16, hp: 170, spd: 4}, 21) },
      { id: "e21_5", name: "Mountain Chief", nameZh: "", ...scaleEnemy({atk: 44, def: 18, hp: 190, spd: 4}, 21) }
    ]
  },
  {
    id: "22",
    members: [
      { id: "e22_1", name: "Stone Golem", nameZh: "", ...scaleEnemy({atk: 40, def: 20, hp: 200, spd: 2}, 22) },
      { id: "e22_2", name: "Rock Sentinel", nameZh: "", ...scaleEnemy({atk: 42, def: 22, hp: 210, spd: 2}, 22) },
      { id: "e22_3", name: "Granite Guardian", nameZh: "", ...scaleEnemy({atk: 44, def: 24, hp: 220, spd: 2}, 22) },
      { id: "e22_4", name: "Mountain Troll", nameZh: "", ...scaleEnemy({atk: 46, def: 18, hp: 200, spd: 3}, 22) },
      { id: "e22_5", name: "Ancient Golem", nameZh: "", ...scaleEnemy({atk: 50, def: 28, hp: 260, spd: 2}, 22) }
    ]
  },
  {
    id: "23",
    members: [
      { id: "e23_1", name: "Harpy Scout", nameZh: "", ...scaleEnemy({atk: 38, def: 12, hp: 140, spd: 7}, 23) },
      { id: "e23_2", name: "Cliff Harpy", nameZh: "", ...scaleEnemy({atk: 42, def: 14, hp: 160, spd: 6}, 23) },
      { id: "e23_3", name: "Sky Hunter", nameZh: "", ...scaleEnemy({atk: 40, def: 13, hp: 150, spd: 7}, 23) },
      { id: "e23_4", name: "Storm Harpy", nameZh: "", ...scaleEnemy({atk: 44, def: 15, hp: 170, spd: 6}, 23) },
      { id: "e23_5", name: "Harpy Matriarch", nameZh: "", ...scaleEnemy({atk: 48, def: 17, hp: 190, spd: 6}, 23) }
    ]
  },
  {
    id: "24",
    members: [
      { id: "e24_1", name: "Minotaur Warrior", nameZh: "", ...scaleEnemy({atk: 44, def: 18, hp: 180, spd: 4}, 24) },
      { id: "e24_2", name: "Labyrinth Guardian", nameZh: "", ...scaleEnemy({atk: 46, def: 20, hp: 200, spd: 3}, 24) },
      { id: "e24_3", name: "Beast Master", nameZh: "", ...scaleEnemy({atk: 42, def: 16, hp: 170, spd: 5}, 24) },
      { id: "e24_4", name: "Cave Troll", nameZh: "", ...scaleEnemy({atk: 48, def: 22, hp: 220, spd: 3}, 24) },
      { id: "e24_5", name: "Minotaur Lord", nameZh: "", ...scaleEnemy({atk: 52, def: 24, hp: 250, spd: 4}, 24) }
    ]
  },
  {
    id: "25",
    members: [
      { id: "e25_1", name: "Ice Sprite", nameZh: "", ...scaleEnemy({atk: 40, def: 14, hp: 150, spd: 6}, 25) },
      { id: "e25_2", name: "Frozen Sentry", nameZh: "", ...scaleEnemy({atk: 44, def: 18, hp: 180, spd: 4}, 25) },
      { id: "e25_3", name: "Ice Elemental", nameZh: "", ...scaleEnemy({atk: 46, def: 20, hp: 190, spd: 4}, 25) },
      { id: "e25_4", name: "Frost Guardian", nameZh: "", ...scaleEnemy({atk: 48, def: 22, hp: 210, spd: 3}, 25) },
      { id: "e25_5", name: "Ice Wyrm", nameZh: "", ...scaleEnemy({atk: 54, def: 25, hp: 260, spd: 5}, 25) }
    ]
  },
  {
    id: "26",
    members: [
      { id: "e26_1", name: "Stone Basilisk", nameZh: "", ...scaleEnemy({atk: 46, def: 18, hp: 180, spd: 4}, 26) },
      { id: "e26_2", name: "Petrify Serpent", nameZh: "", ...scaleEnemy({atk: 48, def: 20, hp: 200, spd: 4}, 26) },
      { id: "e26_3", name: "Cave Serpent", nameZh: "", ...scaleEnemy({atk: 50, def: 19, hp: 190, spd: 5}, 26) },
      { id: "e26_4", name: "Reptile Horror", nameZh: "", ...scaleEnemy({atk: 52, def: 22, hp: 220, spd: 4}, 26) },
      { id: "e26_5", name: "Basilisk Alpha", nameZh: "", ...scaleEnemy({atk: 56, def: 24, hp: 250, spd: 4}, 26) }
    ]
  },
  {
    id: "27",
    members: [
      { id: "e27_1", name: "Cyclops Grunt", nameZh: "", ...scaleEnemy({atk: 50, def: 24, hp: 250, spd: 2}, 27) },
      { id: "e27_2", name: "Mountain Cyclops", nameZh: "", ...scaleEnemy({atk: 54, def: 26, hp: 270, spd: 2}, 27) },
      { id: "e27_3", name: "Stone Thrower", nameZh: "", ...scaleEnemy({atk: 52, def: 22, hp: 240, spd: 3}, 27) },
      { id: "e27_4", name: "Peak Guardian", nameZh: "", ...scaleEnemy({atk: 56, def: 28, hp: 280, spd: 2}, 27) },
      { id: "e27_5", name: "Cyclops Chief", nameZh: "", ...scaleEnemy({atk: 60, def: 30, hp: 320, spd: 3}, 27) }
    ]
  },
  {
    id: "28",
    members: [
      { id: "e28_1", name: "Thunder Sprite", nameZh: "", ...scaleEnemy({atk: 48, def: 14, hp: 170, spd: 7}, 28) },
      { id: "e28_2", name: "Storm Elemental", nameZh: "", ...scaleEnemy({atk: 52, def: 18, hp: 190, spd: 6}, 28) },
      { id: "e28_3", name: "Lightning Wisp", nameZh: "", ...scaleEnemy({atk: 50, def: 15, hp: 180, spd: 7}, 28) },
      { id: "e28_4", name: "Thunder Guardian", nameZh: "", ...scaleEnemy({atk: 54, def: 20, hp: 210, spd: 5}, 28) },
      { id: "e28_5", name: "Storm Titan", nameZh: "", ...scaleEnemy({atk: 58, def: 24, hp: 260, spd: 5}, 28) }
    ]
  },
  {
    id: "29",
    members: [
      { id: "e29_1", name: "Young Eagle", nameZh: "", ...scaleEnemy({atk: 48, def: 16, hp: 180, spd: 7}, 29) },
      { id: "e29_2", name: "Sky Eagle", nameZh: "", ...scaleEnemy({atk: 52, def: 18, hp: 200, spd: 7}, 29) },
      { id: "e29_3", name: "War Eagle", nameZh: "", ...scaleEnemy({atk: 54, def: 20, hp: 220, spd: 6}, 29) },
      { id: "e29_4", name: "Thunder Eagle", nameZh: "", ...scaleEnemy({atk: 56, def: 22, hp: 240, spd: 6}, 29) },
      { id: "e29_5", name: "Giant Eagle", nameZh: "", ...scaleEnemy({atk: 60, def: 24, hp: 280, spd: 6}, 29) }
    ]
  },
  {
    id: "30",
    members: [
      { id: "e30_1", name: "Dragon Whelp", nameZh: "", ...scaleEnemy({atk: 55, def: 22, hp: 250, spd: 5}, 30) },
      { id: "e30_2", name: "Drake Adult", nameZh: "", ...scaleEnemy({atk: 58, def: 25, hp: 280, spd: 5}, 30) },
      { id: "e30_3", name: "Scale Guardian", nameZh: "", ...scaleEnemy({atk: 60, def: 28, hp: 300, spd: 4}, 30) },
      { id: "e30_4", name: "Elder Drake", nameZh: "", ...scaleEnemy({atk: 62, def: 30, hp: 320, spd: 4}, 30) },
      { id: "e30_5", name: "Ancient Dragon", nameZh: "", ...scaleEnemy({atk: 70, def: 35, hp: 400, spd: 5}, 30) }
    ]
  },
  // Generate stages 31-100 with scaled enemies
  ...generateEnemyTeams(31, 100)
]

// Generate enemy teams for stages 31-100
function generateEnemyTeams(startStage, endStage) {
  const enemies = []
  const enemyTypes = [
    { prefix: "Desert", prefixZh: "沙漠", names: ["Sand Lizard", "Camel Rider", "Dune Stalker", "Mirage Spirit", "Sphinx"], namesZh: ["", "", "", "", ""] },
    { prefix: "Swamp", prefixZh: "沼泽", names: ["Bog Crawler", "Mire Beast", "Bog Witch", "Gator King", "Swamp Dragon"], namesZh: ["", "", "", "", ""] },
    { prefix: "Volcanic", prefixZh: "火山", names: ["Magma Golem", "Fire Imp", "Flame Sprite", "Inferno Beast", "Lava Wyrm"], namesZh: ["", "", "", "", ""] },
    { prefix: "Frozen", prefixZh: "冰霜", names: ["Ice Wolf", "Frost Giant", "Snow Beast", "Blizzard Spirit", "Ice Dragon"], namesZh: ["", "", "", "", ""] },
    { prefix: "Shadow", prefixZh: "暗影", names: ["Shadow Beast", "Void Walker", "Dark Knight", "Night Terror", "Shadow Dragon"], namesZh: ["", "", "", "", ""] },
    { prefix: "Celestial", prefixZh: "天界", names: ["Star Guardian", "Sky Seraph", "Light Bearer", "Divine Beast", "Divine Dragon"], namesZh: ["", "", "", "", ""] },
    { prefix: "Void", prefixZh: "虚空", names: ["Chaos Spawn", "Void Entity", "Reality Breaker", "Dimension Walker", "World Serpent"], namesZh: ["", "", "", "", ""] }
  ]

  for (let i = startStage; i <= endStage; i++) {
    const typeIndex = Math.floor((i - startStage) / 10) % enemyTypes.length
    const type = enemyTypes[typeIndex]
    const memberIndex = i % 5
    const baseStats = {
      atk: 50 + (i - 30) * 3,
      def: 20 + (i - 30) * 2,
      hp: 250 + (i - 30) * 15,
      spd: 4 + Math.floor((i - 30) / 20)
    }

    enemies.push({
      id: String(i),
      members: [
        { id: `e${i}_1`, name: `${type.prefix} Scout`, nameZh: "", ...scaleEnemy({atk: baseStats.atk, def: baseStats.def, hp: baseStats.hp, spd: baseStats.spd}, i) },
        { id: `e${i}_2`, name: `${type.prefix} Warrior`, nameZh: "", ...scaleEnemy({atk: baseStats.atk + 4, def: baseStats.def + 2, hp: baseStats.hp + 20, spd: baseStats.spd}, i) },
        { id: `e${i}_3`, name: `${type.names[memberIndex]}`, nameZh: "", ...scaleEnemy({atk: baseStats.atk + 8, def: baseStats.def + 4, hp: baseStats.hp + 40, spd: baseStats.spd}, i) },
        { id: `e${i}_4`, name: `${type.prefix} Champion`, nameZh: "", ...scaleEnemy({atk: baseStats.atk + 12, def: baseStats.def + 6, hp: baseStats.hp + 60, spd: baseStats.spd}, i) },
        { id: `e${i}_5`, name: `${type.names[4]}`, nameZh: "", ...scaleEnemy({atk: baseStats.atk + 20, def: baseStats.def + 10, hp: baseStats.hp + 100, spd: baseStats.spd}, i) }
      ]
    })
  }
  return enemies
}
