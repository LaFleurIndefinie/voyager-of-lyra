export const SKILLS = {
  whirlwind: {
    id: 'whirlwind',
    name: 'Whirlwind',
    type: 'multi_attack',
    cooldown: 3,
    levels: {
      1:  { targets: 2, cost: 0 },
      2:  { targets: 2, cost: 5 },
      3:  { targets: 2, cost: 10 },
      4:  { targets: 3, cost: 20 },
      5:  { targets: 3, cost: 40 },
      6:  { targets: 3, cost: 80 },
      7:  { targets: 4, cost: 160 },
      8:  { targets: 4, cost: 320 },
      9:  { targets: 4, cost: 640 },
      10: { targets: 5, cost: 1280 }
    }
  },
  stunning_strike: {
    id: 'stunning_strike',
    name: 'Stunning Strike',
    type: 'stun',
    cooldown: 4,
    levels: {
      1:  { duration: 2, cost: 0 },
      2:  { duration: 2, cost: 5 },
      3:  { duration: 2, cost: 10 },
      4:  { duration: 3, cost: 20 },
      5:  { duration: 3, cost: 40 },
      6:  { duration: 3, cost: 80 },
      7:  { duration: 4, cost: 160 },
      8:  { duration: 4, cost: 320 },
      9:  { duration: 5, cost: 640 },
      10: { duration: 5, cost: 1280 }
    }
  },
  inspiring_chant: {
    id: 'inspiring_chant',
    name: 'Inspiring Chant',
    type: 'buff',
    cooldown: 4,
    levels: {
      1:  { duration: 2, atkMult: 1.3, defMult: 1.3, cost: 0 },
      2:  { duration: 2, atkMult: 1.35, defMult: 1.35, cost: 5 },
      3:  { duration: 2, atkMult: 1.4, defMult: 1.4, cost: 10 },
      4:  { duration: 3, atkMult: 1.4, defMult: 1.4, cost: 20 },
      5:  { duration: 3, atkMult: 1.45, defMult: 1.45, cost: 40 },
      6:  { duration: 3, atkMult: 1.5, defMult: 1.5, cost: 80 },
      7:  { duration: 4, atkMult: 1.5, defMult: 1.5, cost: 160 },
      8:  { duration: 4, atkMult: 1.55, defMult: 1.55, cost: 320 },
      9:  { duration: 4, atkMult: 1.6, defMult: 1.6, cost: 640 },
      10: { duration: 5, atkMult: 1.7, defMult: 1.7, cost: 1280 }
    }
  },
  healing_light: {
    id: 'healing_light',
    name: 'Healing Light',
    type: 'heal',
    cooldown: 3,
    levels: {
      1:  { amount: 10, cost: 0 },
      2:  { amount: 15, cost: 5 },
      3:  { amount: 20, cost: 10 },
      4:  { amount: 25, cost: 20 },
      5:  { amount: 30, cost: 40 },
      6:  { amount: 35, cost: 80 },
      7:  { amount: 45, cost: 160 },
      8:  { amount: 55, cost: 320 },
      9:  { amount: 70, cost: 640 },
      10: { amount: 100, cost: 1280 }
    }
  },
  haste_aura: {
    id: 'haste_aura',
    name: 'Haste Aura',
    type: 'buff',
    cooldown: 4,
    levels: {
      1:  { duration: 2, spdMult: 1.1, cost: 0 },
      2:  { duration: 2, spdMult: 1.15, cost: 5 },
      3:  { duration: 2, spdMult: 1.2, cost: 10 },
      4:  { duration: 3, spdMult: 1.2, cost: 20 },
      5:  { duration: 3, spdMult: 1.25, cost: 40 },
      6:  { duration: 3, spdMult: 1.3, cost: 80 },
      7:  { duration: 4, spdMult: 1.3, cost: 160 },
      8:  { duration: 4, spdMult: 1.35, cost: 320 },
      9:  { duration: 4, spdMult: 1.4, cost: 640 },
      10: { duration: 5, spdMult: 1.5, cost: 1280 }
    }
  }
}

export const MAX_SKILL_LEVEL = 10

export function getSkillAtLevel(skillId, level) {
  const skill = SKILLS[skillId]
  if (!skill) return null
  const levelData = skill.levels[level]
  if (!levelData) return null
  return {
    id: skill.id,
    name: skill.name,
    type: skill.type,
    cooldown: skill.cooldown,
    ...levelData
  }
}

export function getSkillUpgradeCost(skillId, currentLevel) {
  const skill = SKILLS[skillId]
  if (!skill) return null
  const nextLevel = currentLevel + 1
  if (nextLevel > MAX_SKILL_LEVEL) return null
  return skill.levels[nextLevel]?.cost || 1280
}

export function getSkillDescription(skillId, level) {
  const skill = SKILLS[skillId]
  if (!skill) return ''
  const data = skill.levels[level]
  if (!data) return ''

  switch (skill.type) {
    case 'multi_attack':
      return `Hits ${data.targets} targets`
    case 'stun':
      return `Stun for ${data.duration} turns`
    case 'buff':
      if (data.atkMult) return `${(data.atkMult * 100).toFixed(0)}% ATK/DEF for ${data.duration} turns`
      if (data.spdMult) return `${(data.spdMult * 100).toFixed(0)}% SPD for ${data.duration} turns`
      return ''
    case 'heal':
      return `Heal for ${data.amount} HP`
    default:
      return ''
  }
}
