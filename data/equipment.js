// Equipment upgrades with 20 levels - balanced for stage 100
// Linear interpolation for smooth progression

function generateEquipmentUpgrades(stat, baseBonus, baseCost, bonusPerLevel, costPerLevel) {
  const upgrades = []
  for (let level = 1; level <= 20; level++) {
    upgrades.push({
      level,
      cost: Math.round(baseCost + (level - 1) * costPerLevel),
      bonus: Math.round(baseBonus + (level - 1) * bonusPerLevel)
    })
  }
  return upgrades
}

export const EQUIPMENT_UPGRADES = {
  weapon: {
    name: "Weapon",
    stat: "atk",
    upgrades: generateEquipmentUpgrades("atk", 10, 50, 15, 50)
  },
  helmet: {
    name: "Helmet",
    stat: "def",
    upgrades: generateEquipmentUpgrades("def", 5, 40, 10, 40)
  },
  armor: {
    name: "Armor",
    stat: "hp",
    upgrades: generateEquipmentUpgrades("hp", 30, 60, 40, 60)
  },
  vambraces: {
    name: "Vambraces",
    stat: "critChance",
    upgrades: generateEquipmentUpgrades("critChance", 1, 70, 2, 70)
  },
  boots: {
    name: "Boots",
    stat: "spd",
    upgrades: generateEquipmentUpgrades("spd", 1, 45, 2, 45)
  },
  accessories: {
    name: "Accessories",
    stat: "defReduce",
    upgrades: generateEquipmentUpgrades("defReduce", 2, 55, 2, 55)
  }
}
