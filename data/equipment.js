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
    nameZh: "武器",
    stat: "atk",
    upgrades: generateEquipmentUpgrades("atk", 10, 50, 15, 50)
  },
  helmet: {
    name: "Helmet",
    nameZh: "头盔",
    stat: "def",
    upgrades: generateEquipmentUpgrades("def", 5, 40, 10, 40)
  },
  armor: {
    name: "Armor",
    nameZh: "护甲",
    stat: "hp",
    upgrades: generateEquipmentUpgrades("hp", 30, 60, 40, 60)
  },
  vambraces: {
    name: "Vambraces",
    nameZh: "护腕",
    stat: "critChance",
    upgrades: generateEquipmentUpgrades("critChance", 1, 70, 2, 70)
  },
  boots: {
    name: "Boots",
    nameZh: "靴子",
    stat: "spd",
    upgrades: generateEquipmentUpgrades("spd", 1, 45, 2, 45)
  },
  accessories: {
    name: "Accessories",
    nameZh: "饰品",
    stat: "defReduce",
    upgrades: generateEquipmentUpgrades("defReduce", 2, 55, 2, 55)
  }
}
