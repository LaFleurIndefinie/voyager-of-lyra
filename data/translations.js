// UI Translations for Voyager of Lyra
// Key: English text, Value: { en: English, zh: Chinese }

export const UI_TRANSLATIONS = {
  // Header
  'Voyager of Lyra': { en: 'Voyager of Lyra: 2157', zh: '天琴旅人：2157' },
  'Gold': { en: 'Gold', zh: '金币' },
  'Exp': { en: 'Exp', zh: '经验' },
  'Diamond': { en: 'Diamond', zh: '钻石' },
  'Save Game': { en: 'Save Game', zh: '保存游戏' },
  'Load Game': { en: 'Load Game', zh: '读取存档' },
  'Reset Game': { en: 'Reset Game', zh: '重置游戏' },
  'Reset Confirm': { en: 'Are you sure you want to reset? All progress will be lost!', zh: '确定要重置游戏吗？所有进度将丢失！' },
  'Yes': { en: 'Yes', zh: '是' },
  'No': { en: 'No', zh: '否' },

  // Left Panel - Team
  'Team': { en: 'Team', zh: '队伍' },
  'Slot': { en: 'Slot', zh: '队员' },
  'Empty': { en: 'Empty', zh: '空' },
  'Characters': { en: 'Characters', zh: '角色' },
  'Add to Team': { en: 'Add to Team', zh: '加入队伍' },
  'Remove': { en: 'Remove from Team', zh: '移出队伍' },

  // Character Info Panel
  'Character Info': { en: 'Character Info', zh: '角色信息' },
  'Background': { en: 'Background', zh: '背景故事' },
  'Name': { en: 'Name', zh: '名称' },
  'Lv': { en: 'Lv', zh: '等级' },
  'Battle Force': { en: 'Battle Force', zh: '战斗力' },
  'Total Battle Force': { en: 'Total Battle Force', zh: '总战斗力' },
  'HP': { en: 'HP', zh: '生命' },
  'ATK': { en: 'ATK', zh: '攻击' },
  'DEF': { en: 'DEF', zh: '防御' },
  'SPD': { en: 'SPD', zh: '速度' },
  'CRITCHANCE': { en: 'CRIT', zh: '暴击' },
  'DEFREDUCE': { en: 'DEF REDUCE', zh: '破防' },
  'EXP': { en: 'EXP', zh: '经验' },
  'Max': { en: 'Max', zh: '满级' },
  'None': { en: 'None', zh: '无' },
  'MAX': { en: 'MAX', zh: '满级' },
  'Skills': { en: 'Skills', zh: '技能' },
  'Equipment': { en: 'Equipment', zh: '装备' },
  'Level Up': { en: 'Level Up', zh: '升级' },
  'Upgrade': { en: 'Upgrade', zh: '升级' },
  'Upgrade Skill': { en: 'Upgrade Skill', zh: '升级技能' },
  'G': { en: 'G', zh: '金币' },

  // Equipment Slots
  'weapon': { en: 'Weapon', zh: '武器' },
  'helmet': { en: 'Helmet', zh: '头盔' },
  'armor': { en: 'Armor', zh: '护甲' },
  'vambraces': { en: 'Vambraces', zh: '护腕' },
  'boots': { en: 'Boots', zh: '靴子' },
  'accessories': { en: 'Accessories', zh: '饰品' },

  // Stages Panel
  'Stages': { en: 'Stages', zh: '关卡' },
  'In Battle': { en: 'In Battle', zh: '战斗中' },
  'AFK': { en: 'AFK', zh: '挂机' },

  // Battle Panel
  'Battle': { en: 'Battle', zh: '战斗' },
  'Stage': { en: 'Stage', zh: '关卡' },
  'Start Battle': { en: 'Start Battle', zh: '开始战斗' },
  'All stages completed!': { en: 'All stages completed!', zh: '所有关卡已完成！' },
  'Player Team': { en: 'Player Team', zh: '玩家队伍' },
  'Enemies': { en: 'Enemies', zh: '敌人' },

  // Battle Status
  'VICTORY': { en: 'VICTORY', zh: '胜利' },
  'DEFEAT': { en: 'DEFEAT', zh: '失败' },
  'Continue': { en: 'Continue', zh: '继续' },

  // Buff/Debuff Tags
  'TAUNT': { en: 'TAUNT', zh: '嘲讽' },
  'SHIELD': { en: 'SHIELD', zh: '护盾' },
  'STUN': { en: 'STUN', zh: '眩晕' },

  // Language Toggle
  'ToggleLang': { en: '中文', zh: 'EN' },

  // Error Messages
  'Failed to load save file. Please pick a valid game save.': { en: 'Failed to load save file. Please pick a valid game save.', zh: '读取存档失败，请选择有效的游戏存档。' },
}

// Translation helper function
export function t(key, lang = 'en') {
  const translation = UI_TRANSLATIONS[key]
  if (!translation) {
    console.warn(`Missing translation for key: "${key}"`)
    return key
  }
  return translation[lang] || key
}

// Create a Vue plugin for translations
export const i18n = {
  install(app, options) {
    const lang = options?.lang || 'en'

    app.config.globalProperties.$t = (key) => t(key, lang)
    app.config.globalProperties.$lang = lang

    app.provide('lang', lang)
    app.provide('t', (key) => t(key, lang))
  }
}

// Skill descriptions translation
export const SKILL_DESCRIPTIONS = {
  en: {
    multi_attack: (data) => `Hits ${data.targets} targets`,
    multi_attack_random: (data) => `${data.hits}x random hits (${Math.round(data.minDmgPct * 100)}-${Math.round(data.maxDmgPct * 100)}% ATK)`,
    stun: (data) => `Stun for ${data.duration} turns`,
    taunt: (data) => `Taunt enemies for ${data.duration} turns`,
    buff: (data) => {
      if (data.atkMult) return `${(data.atkMult * 100).toFixed(0)}% ATK/DEF for ${data.duration} turns`
      if (data.spdMult) return `${(data.spdMult * 100).toFixed(0)}% SPD for ${data.duration} turns`
      return ''
    },
    multi_buff: (data) => `${(data.atkMult * 100).toFixed(0)}% ATK/DEF/SPD for ${data.duration} turns`,
    heal: (data) => `Heal for ${data.amount} HP`,
    heal_percent: (data) => `Heal ${Math.round(data.pct * 100)}% lost HP to ${data.targets} allies`,
    shield: (data) => `Shield: ${data.blocks} blocks to ${data.targets} allies`,
    debuff: (data) => `${(data.atkMult * 100).toFixed(0)}% ATK/DEF to enemies for ${data.duration} turns`,
    slow: (data) => `${(data.spdMult * 100).toFixed(0)}% SPD to enemies for ${data.duration} turns`,
    resurrect: (data) => `Revive ally at ${Math.round(data.hpPct * 100)}% HP`,
    crit_buff: (data) => `+${Math.round(data.critBonus * 100)}% Crit for ${data.duration} turns`,
    execute: (data) => `+${Math.round((data.dmgMult - 1) * 100)}% dmg to enemies <${Math.round((1 - data.hpThreshold) * 100)}% HP`
  },
  zh: {
    multi_attack: (data) => `攻击 ${data.targets} 个目标`,
    multi_attack_random: (data) => `${data.hits}次随机攻击 (${Math.round(data.minDmgPct * 100)}-${Math.round(data.maxDmgPct * 100)}% 攻击力)`,
    stun: (data) => `眩晕 ${data.duration} 回合`,
    taunt: (data) => `嘲讽敌人 ${data.duration} 回合`,
    buff: (data) => {
      if (data.atkMult) return `${(data.atkMult * 100).toFixed(0)}% 攻击/防御 ${data.duration} 回合`
      if (data.spdMult) return `${(data.spdMult * 100).toFixed(0)}% 速度 ${data.duration} 回合`
      return ''
    },
    multi_buff: (data) => `${(data.atkMult * 100).toFixed(0)}% 攻击/防御/速度 ${data.duration} 回合`,
    heal: (data) => `治疗 ${data.amount} 生命值`,
    heal_percent: (data) => `治疗 ${data.targets} 名队友已损失生命的 ${Math.round(data.pct * 100)}%`,
    shield: (data) => `护盾: 为 ${data.targets} 名队友提供 ${data.blocks} 次护盾`,
    debuff: (data) => `敌人 ${data.duration} 回合内 -${Math.round((1 - data.atkMult) * 100)}% 攻击/防御`,
    slow: (data) => `敌人 ${data.duration} 回合内 -${Math.round((1 - data.spdMult) * 100)}% 速度`,
    resurrect: (data) => `复活队友，恢复 ${Math.round(data.hpPct * 100)}% 生命值`,
    crit_buff: (data) => `${data.duration} 回合内 +${Math.round(data.critBonus * 100)}% 暴击率`,
    execute: (data) => `对生命值低于 ${Math.round(data.hpThreshold * 100)}% 的敌人 +${Math.round((data.dmgMult - 1) * 100)}% 伤害`
  }
}

export function getSkillDescription(skillType, data, lang = 'en') {
  const desc = SKILL_DESCRIPTIONS[lang]
  if (!desc || !desc[skillType]) return ''
  return desc[skillType](data)
}
