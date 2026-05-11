export const SKILLS = {
  whirlwind: {
    id: 'whirlwind',
    name: 'Whirlwind',
    nameZh: '旋风斩',
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
    nameZh: '重击眩晕',
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
    nameZh: '振奋之歌',
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
    nameZh: '治愈之光',
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
    nameZh: '急速光环',
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
  },
  // 1. Random damage dealer - hits random enemies multiple times
  scatter_shot: {
    id: 'scatter_shot',
    name: 'Scatter Shot',
    nameZh: '散射',
    type: 'multi_attack_random',
    cooldown: 3,
    levels: {
      1:  { hits: 2, minDmgPct: 0.4, maxDmgPct: 0.7, cost: 0 },
      2:  { hits: 2, minDmgPct: 0.45, maxDmgPct: 0.75, cost: 5 },
      3:  { hits: 2, minDmgPct: 0.5, maxDmgPct: 0.8, cost: 10 },
      4:  { hits: 3, minDmgPct: 0.45, maxDmgPct: 0.75, cost: 20 },
      5:  { hits: 3, minDmgPct: 0.5, maxDmgPct: 0.8, cost: 40 },
      6:  { hits: 3, minDmgPct: 0.55, maxDmgPct: 0.85, cost: 80 },
      7:  { hits: 4, minDmgPct: 0.5, maxDmgPct: 0.8, cost: 160 },
      8:  { hits: 4, minDmgPct: 0.55, maxDmgPct: 0.85, cost: 320 },
      9:  { hits: 4, minDmgPct: 0.6, maxDmgPct: 0.9, cost: 640 },
      10: { hits: 5, minDmgPct: 0.6, maxDmgPct: 1.0, cost: 1280 }
    }
  },
  // 2. Tank - taunt enemies to attack her
  iron_will: {
    id: 'iron_will',
    name: 'Iron Will',
    nameZh: '钢铁意志',
    type: 'taunt',
    cooldown: 5,
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
  // 3. Heal % of lost HP to multiple allies
  blessing: {
    id: 'blessing',
    name: 'Blessing',
    nameZh: '祝福',
    type: 'heal_percent',
    cooldown: 4,
    levels: {
      1:  { targets: 2, pct: 0.2, cost: 0 },
      2:  { targets: 2, pct: 0.22, cost: 5 },
      3:  { targets: 2, pct: 0.25, cost: 10 },
      4:  { targets: 3, pct: 0.22, cost: 20 },
      5:  { targets: 3, pct: 0.25, cost: 40 },
      6:  { targets: 3, pct: 0.28, cost: 80 },
      7:  { targets: 4, pct: 0.25, cost: 160 },
      8:  { targets: 4, pct: 0.28, cost: 320 },
      9:  { targets: 4, pct: 0.3, cost: 640 },
      10: { targets: 5, pct: 0.35, cost: 1280 }
    }
  },
  // 4. Multiple buffs with lower rates
  battle_cry: {
    id: 'battle_cry',
    name: 'Battle Cry',
    nameZh: '战吼',
    type: 'multi_buff',
    cooldown: 5,
    levels: {
      1:  { duration: 2, atkMult: 1.1, defMult: 1.1, spdMult: 1.05, cost: 0 },
      2:  { duration: 2, atkMult: 1.12, defMult: 1.12, spdMult: 1.06, cost: 5 },
      3:  { duration: 2, atkMult: 1.15, defMult: 1.15, spdMult: 1.08, cost: 10 },
      4:  { duration: 3, atkMult: 1.12, defMult: 1.12, spdMult: 1.06, cost: 20 },
      5:  { duration: 3, atkMult: 1.15, defMult: 1.15, spdMult: 1.08, cost: 40 },
      6:  { duration: 3, atkMult: 1.18, defMult: 1.18, spdMult: 1.1, cost: 80 },
      7:  { duration: 4, atkMult: 1.15, defMult: 1.15, spdMult: 1.08, cost: 160 },
      8:  { duration: 4, atkMult: 1.18, defMult: 1.18, spdMult: 1.1, cost: 320 },
      9:  { duration: 4, atkMult: 1.2, defMult: 1.2, spdMult: 1.12, cost: 640 },
      10: { duration: 5, atkMult: 1.25, defMult: 1.25, spdMult: 1.15, cost: 1280 }
    }
  },
  // 5. Shield - blocks damage X times
  barrier: {
    id: 'barrier',
    name: 'Barrier',
    nameZh: '护盾',
    type: 'shield',
    cooldown: 5,
    levels: {
      1:  { targets: 1, blocks: 2, cost: 0 },
      2:  { targets: 1, blocks: 2, cost: 5 },
      3:  { targets: 1, blocks: 3, cost: 10 },
      4:  { targets: 2, blocks: 2, cost: 20 },
      5:  { targets: 2, blocks: 2, cost: 40 },
      6:  { targets: 2, blocks: 3, cost: 80 },
      7:  { targets: 3, blocks: 2, cost: 160 },
      8:  { targets: 3, blocks: 3, cost: 320 },
      9:  { targets: 3, blocks: 3, cost: 640 },
      10: { targets: 4, blocks: 4, cost: 1280 }
    }
  },
  // 6. Debuff enemy ATK and DEF
  weaken: {
    id: 'weaken',
    name: 'Weaken',
    nameZh: '虚弱',
    type: 'debuff',
    cooldown: 4,
    levels: {
      1:  { duration: 2, atkMult: 0.85, defMult: 0.85, cost: 0 },
      2:  { duration: 2, atkMult: 0.82, defMult: 0.82, cost: 5 },
      3:  { duration: 2, atkMult: 0.8, defMult: 0.8, cost: 10 },
      4:  { duration: 3, atkMult: 0.8, defMult: 0.8, cost: 20 },
      5:  { duration: 3, atkMult: 0.78, defMult: 0.78, cost: 40 },
      6:  { duration: 3, atkMult: 0.75, defMult: 0.75, cost: 80 },
      7:  { duration: 4, atkMult: 0.75, defMult: 0.75, cost: 160 },
      8:  { duration: 4, atkMult: 0.72, defMult: 0.72, cost: 320 },
      9:  { duration: 4, atkMult: 0.7, defMult: 0.7, cost: 640 },
      10: { duration: 5, atkMult: 0.65, defMult: 0.65, cost: 1280 }
    }
  },
  // 7. Debuff enemy speed
  slow: {
    id: 'slow',
    name: 'Slow',
    nameZh: '减速',
    type: 'slow',
    cooldown: 4,
    levels: {
      1:  { duration: 2, spdMult: 0.8, cost: 0 },
      2:  { duration: 2, spdMult: 0.78, cost: 5 },
      3:  { duration: 2, spdMult: 0.75, cost: 10 },
      4:  { duration: 3, spdMult: 0.75, cost: 20 },
      5:  { duration: 3, spdMult: 0.72, cost: 40 },
      6:  { duration: 3, spdMult: 0.7, cost: 80 },
      7:  { duration: 4, spdMult: 0.7, cost: 160 },
      8:  { duration: 4, spdMult: 0.65, cost: 320 },
      9:  { duration: 4, spdMult: 0.6, cost: 640 },
      10: { duration: 5, spdMult: 0.5, cost: 1280 }
    }
  },
  // 8. Resurrect dead ally
  revive: {
    id: 'revive',
    name: 'Revive',
    nameZh: '复活',
    type: 'resurrect',
    cooldown: 10,
    levels: {
      1:  { hpPct: 0.3, cost: 0 },
      2:  { hpPct: 0.32, cost: 5 },
      3:  { hpPct: 0.35, cost: 10 },
      4:  { hpPct: 0.38, cost: 20 },
      5:  { hpPct: 0.4, cost: 40 },
      6:  { hpPct: 0.45, cost: 80 },
      7:  { hpPct: 0.5, cost: 160 },
      8:  { hpPct: 0.55, cost: 320 },
      9:  { hpPct: 0.6, cost: 640 },
      10: { hpPct: 0.7, cost: 1280 }
    }
  },
  // 9. Increase ally critical chance
  focus: {
    id: 'focus',
    name: 'Focus',
    nameZh: '专注',
    type: 'crit_buff',
    cooldown: 4,
    levels: {
      1:  { duration: 2, critBonus: 0.1, cost: 0 },
      2:  { duration: 2, critBonus: 0.12, cost: 5 },
      3:  { duration: 2, critBonus: 0.15, cost: 10 },
      4:  { duration: 3, critBonus: 0.15, cost: 20 },
      5:  { duration: 3, critBonus: 0.18, cost: 40 },
      6:  { duration: 3, critBonus: 0.2, cost: 80 },
      7:  { duration: 4, critBonus: 0.2, cost: 160 },
      8:  { duration: 4, critBonus: 0.22, cost: 320 },
      9:  { duration: 4, critBonus: 0.25, cost: 640 },
      10: { duration: 5, critBonus: 0.3, cost: 1280 }
    }
  },
  // 10. Execute - passive, more damage to low HP enemies
  execute: {
    id: 'execute',
    name: 'Execute',
    nameZh: '处决',
    type: 'execute',
    cooldown: 0,
    levels: {
      1:  { hpThreshold: 0.5, dmgMult: 1.5, cost: 0 },
      2:  { hpThreshold: 0.5, dmgMult: 1.6, cost: 5 },
      3:  { hpThreshold: 0.5, dmgMult: 1.7, cost: 10 },
      4:  { hpThreshold: 0.45, dmgMult: 1.7, cost: 20 },
      5:  { hpThreshold: 0.45, dmgMult: 1.8, cost: 40 },
      6:  { hpThreshold: 0.45, dmgMult: 1.9, cost: 80 },
      7:  { hpThreshold: 0.4, dmgMult: 1.9, cost: 160 },
      8:  { hpThreshold: 0.4, dmgMult: 2.0, cost: 320 },
      9:  { hpThreshold: 0.35, dmgMult: 2.0, cost: 640 },
      10: { hpThreshold: 0.3, dmgMult: 2.5, cost: 1280 }
    }
  },
  // 11. Poison - damage over time
  venomous_strike: {
    id: 'venomous_strike',
    name: 'Venomous Strike',
    nameZh: '毒液打击',
    type: 'poison',
    cooldown: 3,
    levels: {
      1:  { duration: 3, dmgPct: 0.05, cost: 0 },
      2:  { duration: 3, dmgPct: 0.06, cost: 5 },
      3:  { duration: 3, dmgPct: 0.07, cost: 10 },
      4:  { duration: 4, dmgPct: 0.07, cost: 20 },
      5:  { duration: 4, dmgPct: 0.08, cost: 40 },
      6:  { duration: 4, dmgPct: 0.09, cost: 80 },
      7:  { duration: 5, dmgPct: 0.09, cost: 160 },
      8:  { duration: 5, dmgPct: 0.10, cost: 320 },
      9:  { duration: 5, dmgPct: 0.12, cost: 640 },
      10: { duration: 6, dmgPct: 0.15, cost: 1280 }
    }
  },
  // 12. Antiheal - reduces healing received
  curse_of_withering: {
    id: 'curse_of_withering',
    name: 'Curse of Withering',
    nameZh: '凋零诅咒',
    type: 'antiheal',
    cooldown: 4,
    levels: {
      1:  { duration: 3, healMult: 0.5, cost: 0 },
      2:  { duration: 3, healMult: 0.45, cost: 5 },
      3:  { duration: 3, healMult: 0.4, cost: 10 },
      4:  { duration: 4, healMult: 0.4, cost: 20 },
      5:  { duration: 4, healMult: 0.35, cost: 40 },
      6:  { duration: 4, healMult: 0.3, cost: 80 },
      7:  { duration: 5, healMult: 0.3, cost: 160 },
      8:  { duration: 5, healMult: 0.25, cost: 320 },
      9:  { duration: 5, healMult: 0.2, cost: 640 },
      10: { duration: 6, healMult: 0.1, cost: 1280 }
    }
  },

  // ============ NEW SKILLS FOR CHARACTERS 5-15 ============

  // 13. Star Compass - Lily's unique skill, ignores defense
  star_compass: {
    id: 'star_compass',
    name: 'Star Compass',
    nameZh: '星之指南针',
    type: 'pierce',
    cooldown: 4,
    levels: {
      1:  { ignoreDefPct: 0.3, cost: 0 },
      2:  { ignoreDefPct: 0.35, cost: 5 },
      3:  { ignoreDefPct: 0.4, cost: 10 },
      4:  { ignoreDefPct: 0.45, cost: 20 },
      5:  { ignoreDefPct: 0.5, cost: 40 },
      6:  { ignoreDefPct: 0.55, cost: 80 },
      7:  { ignoreDefPct: 0.6, cost: 160 },
      8:  { ignoreDefPct: 0.65, cost: 320 },
      9:  { ignoreDefPct: 0.7, cost: 640 },
      10: { ignoreDefPct: 0.8, cost: 1280 }
    }
  },

  // 14. Symphonie des Étoiles - Estelle's signature, damages enemies and heals allies
  symphonie: {
    id: 'symphonie',
    name: 'Symphonie des Étoiles',
    nameZh: '群星的乐章',
    type: 'symphonie',
    cooldown: 5,
    levels: {
      1:  { dmgPct: 0.8, healPct: 0.15, cost: 0 },
      2:  { dmgPct: 0.85, healPct: 0.17, cost: 5 },
      3:  { dmgPct: 0.9, healPct: 0.2, cost: 10 },
      4:  { dmgPct: 0.95, healPct: 0.22, cost: 20 },
      5:  { dmgPct: 1.0, healPct: 0.25, cost: 40 },
      6:  { dmgPct: 1.05, healPct: 0.28, cost: 80 },
      7:  { dmgPct: 1.1, healPct: 0.3, cost: 160 },
      8:  { dmgPct: 1.15, healPct: 0.32, cost: 320 },
      9:  { dmgPct: 1.2, healPct: 0.35, cost: 640 },
      10: { dmgPct: 1.3, healPct: 0.4, cost: 1280 }
    }
  },

  // 15. Star God's Voice - Iris's ultimate healing/cleanse skill
  star_gods_voice: {
    id: 'star_gods_voice',
    name: "Star God's Voice",
    nameZh: '星神之声',
    type: 'purify_heal',
    cooldown: 6,
    levels: {
      1:  { targets: 2, healPct: 0.3, cleanse: true, cost: 0 },
      2:  { targets: 2, healPct: 0.33, cleanse: true, cost: 5 },
      3:  { targets: 2, healPct: 0.36, cleanse: true, cost: 10 },
      4:  { targets: 3, healPct: 0.35, cleanse: true, cost: 20 },
      5:  { targets: 3, healPct: 0.38, cleanse: true, cost: 40 },
      6:  { targets: 3, healPct: 0.42, cleanse: true, cost: 80 },
      7:  { targets: 4, healPct: 0.4, cleanse: true, cost: 160 },
      8:  { targets: 4, healPct: 0.45, cleanse: true, cost: 320 },
      9:  { targets: 4, healPct: 0.5, cleanse: true, cost: 640 },
      10: { targets: 5, healPct: 0.6, cleanse: true, cost: 1280 }
    }
  },

  // 16. Voice of Regret - Vivian's debuff song
  voice_of_regret: {
    id: 'voice_of_regret',
    name: 'Voice of Regret',
    nameZh: '悔恨之音',
    type: 'multi_debuff',
    cooldown: 5,
    levels: {
      1:  { duration: 2, atkMult: 0.85, spdMult: 0.85, cost: 0 },
      2:  { duration: 2, atkMult: 0.82, spdMult: 0.82, cost: 5 },
      3:  { duration: 2, atkMult: 0.8, spdMult: 0.8, cost: 10 },
      4:  { duration: 3, atkMult: 0.78, spdMult: 0.78, cost: 20 },
      5:  { duration: 3, atkMult: 0.75, spdMult: 0.75, cost: 40 },
      6:  { duration: 3, atkMult: 0.72, spdMult: 0.72, cost: 80 },
      7:  { duration: 4, atkMult: 0.7, spdMult: 0.7, cost: 160 },
      8:  { duration: 4, atkMult: 0.68, spdMult: 0.68, cost: 320 },
      9:  { duration: 4, atkMult: 0.65, spdMult: 0.65, cost: 640 },
      10: { duration: 5, atkMult: 0.6, spdMult: 0.6, cost: 1280 }
    }
  },

  // 17. Worldline Calibration - Séraphine's time manipulation
  worldline_calibration: {
    id: 'worldline_calibration',
    name: 'Worldline Calibration',
    nameZh: '世界线校准',
    type: 'time_dilation',
    cooldown: 6,
    levels: {
      1:  { slowPct: 0.2, duration: 2, cost: 0 },
      2:  { slowPct: 0.22, duration: 2, cost: 5 },
      3:  { slowPct: 0.25, duration: 2, cost: 10 },
      4:  { slowPct: 0.28, duration: 3, cost: 20 },
      5:  { slowPct: 0.3, duration: 3, cost: 40 },
      6:  { slowPct: 0.32, duration: 3, cost: 80 },
      7:  { slowPct: 0.35, duration: 4, cost: 160 },
      8:  { slowPct: 0.38, duration: 4, cost: 320 },
      9:  { slowPct: 0.4, duration: 4, cost: 640 },
      10: { slowPct: 0.5, duration: 5, cost: 1280 }
    }
  },

  // 18. Nightingales Truth - Noelle's piercing truth attack
  nightingale_truth: {
    id: 'nightingale_truth',
    name: "Nightingale's Truth",
    nameZh: '夜莺的真相',
    type: 'true_strike',
    cooldown: 4,
    levels: {
      1:  { ignoreDefPct: 0.5, cost: 0 },
      2:  { ignoreDefPct: 0.55, cost: 5 },
      3:  { ignoreDefPct: 0.6, cost: 10 },
      4:  { ignoreDefPct: 0.65, cost: 20 },
      5:  { ignoreDefPct: 0.7, cost: 40 },
      6:  { ignoreDefPct: 0.75, cost: 80 },
      7:  { ignoreDefPct: 0.8, cost: 160 },
      8:  { ignoreDefPct: 0.85, cost: 320 },
      9:  { ignoreDefPct: 0.9, cost: 640 },
      10: { ignoreDefPct: 1.0, cost: 1280 }
    }
  },

  // 19. Harmony of Three Worlds - Alouette's triple shield
  harmony_three_worlds: {
    id: 'harmony_three_worlds',
    name: 'Harmony of Three Worlds',
    nameZh: '三界之和声',
    type: 'triple_shield',
    cooldown: 5,
    levels: {
      1:  { blocks: 3, targets: 3, cost: 0 },
      2:  { blocks: 3, targets: 3, cost: 5 },
      3:  { blocks: 4, targets: 3, cost: 10 },
      4:  { blocks: 4, targets: 4, cost: 20 },
      5:  { blocks: 5, targets: 4, cost: 40 },
      6:  { blocks: 5, targets: 4, cost: 80 },
      7:  { blocks: 6, targets: 5, cost: 160 },
      8:  { blocks: 6, targets: 5, cost: 320 },
      9:  { blocks: 7, targets: 5, cost: 640 },
      10: { blocks: 8, targets: 5, cost: 1280 }
    }
  },

  // 20. Stardust Melody - Solros's healing song
  stardust_melody: {
    id: 'stardust_melody',
    name: 'Stardust Melody',
    nameZh: '星屑旋律',
    type: 'dot_heal',
    cooldown: 4,
    levels: {
      1:  { targets: 2, hotPct: 0.08, duration: 3, cost: 0 },
      2:  { targets: 2, hotPct: 0.09, duration: 3, cost: 5 },
      3:  { targets: 2, hotPct: 0.1, duration: 3, cost: 10 },
      4:  { targets: 3, hotPct: 0.1, duration: 4, cost: 20 },
      5:  { targets: 3, hotPct: 0.12, duration: 4, cost: 40 },
      6:  { targets: 3, hotPct: 0.14, duration: 4, cost: 80 },
      7:  { targets: 4, hotPct: 0.15, duration: 5, cost: 160 },
      8:  { targets: 4, hotPct: 0.17, duration: 5, cost: 320 },
      9:  { targets: 4, hotPct: 0.2, duration: 5, cost: 640 },
      10: { targets: 5, hotPct: 0.25, duration: 6, cost: 1280 }
    }
  },

  // 21. Accumulated Faith - Agnès's ancient prayer power
  accumulated_faith: {
    id: 'accumulated_faith',
    name: 'Accumulated Faith',
    nameZh: '积累的信仰',
    type: 'faith_power',
    cooldown: 5,
    levels: {
      1:  { atkMult: 1.3, defMult: 1.1, duration: 3, cost: 0 },
      2:  { atkMult: 1.35, defMult: 1.12, duration: 3, cost: 5 },
      3:  { atkMult: 1.4, defMult: 1.15, duration: 3, cost: 10 },
      4:  { atkMult: 1.45, defMult: 1.18, duration: 4, cost: 20 },
      5:  { atkMult: 1.5, defMult: 1.2, duration: 4, cost: 40 },
      6:  { atkMult: 1.55, defMult: 1.22, duration: 4, cost: 80 },
      7:  { atkMult: 1.6, defMult: 1.25, duration: 5, cost: 160 },
      8:  { atkMult: 1.65, defMult: 1.28, duration: 5, cost: 320 },
      9:  { atkMult: 1.7, defMult: 1.3, duration: 5, cost: 640 },
      10: { atkMult: 1.8, defMult: 1.35, duration: 6, cost: 1280 }
    }
  },

  // 22. Rope Code Escape - Odette's survival shield burst
  rope_code_escape: {
    id: 'rope_code_escape',
    name: 'Rope Code Escape',
    nameZh: '绳索密码逃脱',
    type: 'burst_shield',
    cooldown: 5,
    levels: {
      1:  { blocks: 4, targets: 3, cost: 0 },
      2:  { blocks: 4, targets: 3, cost: 5 },
      3:  { blocks: 5, targets: 3, cost: 10 },
      4:  { blocks: 5, targets: 4, cost: 20 },
      5:  { blocks: 6, targets: 4, cost: 40 },
      6:  { blocks: 6, targets: 4, cost: 80 },
      7:  { blocks: 7, targets: 5, cost: 160 },
      8:  { blocks: 7, targets: 5, cost: 320 },
      9:  { blocks: 8, targets: 5, cost: 640 },
      10: { blocks: 10, targets: 5, cost: 1280 }
    }
  },

  // 23. Memory of Music - Äelovar's memory-based attack
  memory_of_music: {
    id: 'memory_of_music',
    name: 'Memory of Music',
    nameZh: '音乐的记忆',
    type: 'memory_attack',
    cooldown: 4,
    levels: {
      1:  { targets: 2, atkPct: 1.0, cost: 0 },
      2:  { targets: 2, atkPct: 1.05, cost: 5 },
      3:  { targets: 2, atkPct: 1.1, cost: 10 },
      4:  { targets: 3, atkPct: 1.1, cost: 20 },
      5:  { targets: 3, atkPct: 1.15, cost: 40 },
      6:  { targets: 3, atkPct: 1.2, cost: 80 },
      7:  { targets: 4, atkPct: 1.2, cost: 160 },
      8:  { targets: 4, atkPct: 1.25, cost: 320 },
      9:  { targets: 4, atkPct: 1.3, cost: 640 },
      10: { targets: 5, atkPct: 1.4, cost: 1280 }
    }
  },

  // 24. Guilt's Price - Marcelline's redemption strike
  guilts_price: {
    id: 'guilts_price',
    name: "Guilt's Price",
    nameZh: '愧疚的代价',
    type: 'guilt_strike',
    cooldown: 5,
    levels: {
      1:  { dmgMult: 1.5, cost: 0 },
      2:  { dmgMult: 1.55, cost: 5 },
      3:  { dmgMult: 1.6, cost: 10 },
      4:  { dmgMult: 1.7, cost: 20 },
      5:  { dmgMult: 1.8, cost: 40 },
      6:  { dmgMult: 1.9, cost: 80 },
      7:  { dmgMult: 2.0, cost: 160 },
      8:  { dmgMult: 2.2, cost: 320 },
      9:  { dmgMult: 2.4, cost: 640 },
      10: { dmgMult: 2.8, cost: 1280 }
    }
  },

  // 25. Prayer of Millennia - Tulranda's accumulated prayers
  prayer_of_millennia: {
    id: 'prayer_of_millennia',
    name: 'Prayer of Millennia',
    nameZh: '千年的祈祷',
    type: 'millennia_prayer',
    cooldown: 7,
    levels: {
      1:  { healPct: 0.5, revivePct: 0.3, cost: 0 },
      2:  { healPct: 0.52, revivePct: 0.32, cost: 5 },
      3:  { healPct: 0.55, revivePct: 0.35, cost: 10 },
      4:  { healPct: 0.58, revivePct: 0.38, cost: 20 },
      5:  { healPct: 0.6, revivePct: 0.4, cost: 40 },
      6:  { healPct: 0.65, revivePct: 0.45, cost: 80 },
      7:  { healPct: 0.7, revivePct: 0.5, cost: 160 },
      8:  { healPct: 0.75, revivePct: 0.55, cost: 320 },
      9:  { healPct: 0.8, revivePct: 0.6, cost: 640 },
      10: { healPct: 0.9, revivePct: 0.7, cost: 1280 }
    }
  },

  // 26. First Light - Orgašija's primordial power
  first_light: {
    id: 'first_light',
    name: 'First Light',
    nameZh: '最初之光',
    type: 'primordial_strike',
    cooldown: 4,
    levels: {
      1:  { dmgMult: 1.8, cost: 0 },
      2:  { dmgMult: 1.9, cost: 5 },
      3:  { dmgMult: 2.0, cost: 10 },
      4:  { dmgMult: 2.15, cost: 20 },
      5:  { dmgMult: 2.3, cost: 40 },
      6:  { dmgMult: 2.5, cost: 80 },
      7:  { dmgMult: 2.7, cost: 160 },
      8:  { dmgMult: 2.9, cost: 320 },
      9:  { dmgMult: 3.2, cost: 640 },
      10: { dmgMult: 3.5, cost: 1280 }
    }
  },

  // 27. Eternal Bond - Leorard's love-pierced strike
  eternal_bond: {
    id: 'eternal_bond',
    name: 'Eternal Bond',
    nameZh: '永恒的羁绊',
    type: 'love_strike',
    cooldown: 4,
    levels: {
      1:  { dmgMult: 2.0, cost: 0 },
      2:  { dmgMult: 2.1, cost: 5 },
      3:  { dmgMult: 2.2, cost: 10 },
      4:  { dmgMult: 2.4, cost: 20 },
      5:  { dmgMult: 2.6, cost: 40 },
      6:  { dmgMult: 2.8, cost: 80 },
      7:  { dmgMult: 3.0, cost: 160 },
      8:  { dmgMult: 3.3, cost: 320 },
      9:  { dmgMult: 3.6, cost: 640 },
      10: { dmgMult: 4.0, cost: 1280 }
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
    nameZh: skill.nameZh,
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
    case 'multi_attack_random':
      return `${data.hits}x random hits (${Math.round(data.minDmgPct * 100)}-${Math.round(data.maxDmgPct * 100)}% ATK)`
    case 'stun':
      return `Stun for ${data.duration} turns`
    case 'taunt':
      return `Taunt enemies for ${data.duration} turns`
    case 'buff':
      if (data.atkMult) return `${(data.atkMult * 100).toFixed(0)}% ATK/DEF for ${data.duration} turns`
      if (data.spdMult) return `${(data.spdMult * 100).toFixed(0)}% SPD for ${data.duration} turns`
      return ''
    case 'multi_buff':
      return `${(data.atkMult * 100).toFixed(0)}% ATK/DEF/SPD for ${data.duration} turns`
    case 'heal':
      return `Heal for ${data.amount} HP`
    case 'heal_percent':
      return `Heal ${Math.round(data.pct * 100)}% lost HP to ${data.targets} allies`
    case 'shield':
      return `Shield: ${data.blocks} blocks to ${data.targets} allies`
    case 'debuff':
      return `${(data.atkMult * 100).toFixed(0)}% ATK/DEF to enemies for ${data.duration} turns`
    case 'slow':
      return `${(data.spdMult * 100).toFixed(0)}% SPD to enemies for ${data.duration} turns`
    case 'resurrect':
      return `Revive ally at ${Math.round(data.hpPct * 100)}% HP`
    case 'crit_buff':
      return `+${Math.round(data.critBonus * 100)}% Crit for ${data.duration} turns`
    case 'execute':
      return `+${Math.round((data.dmgMult - 1) * 100)}% dmg to enemies <${Math.round((1 - data.hpThreshold) * 100)}% HP`
    case 'poison':
      return `Poison: ${Math.round(data.dmgPct * 100)}% HP/turn for ${data.duration} turns`
    case 'antiheal':
      return `Antiheal: heals reduced to ${Math.round(data.healMult * 100)}% for ${data.duration} turns`
    // New skill types for characters 5-15
    case 'pierce':
      return `Pierce: Ignore ${Math.round(data.ignoreDefPct * 100)}% enemy defense`
    case 'symphonie':
      return `Damages all enemies (${Math.round(data.dmgPct * 100)}% ATK), heals allies (${Math.round(data.healPct * 100)}% HP)`
    case 'purify_heal':
      return `Heals ${data.targets} allies (${Math.round(data.healPct * 100)}% HP), removes debuffs`
    case 'multi_debuff':
      return `${Math.round((1 - data.atkMult) * 100)}% ATK/SPD to enemies for ${data.duration} turns`
    case 'time_dilation':
      return `Slow all enemies by ${Math.round(data.slowPct * 100)}% for ${data.duration} turns`
    case 'true_strike':
      return `True Strike: Ignore ${Math.round(data.ignoreDefPct * 100)}% defense, high damage`
    case 'triple_shield':
      return `Triple Shield: ${data.blocks} blocks to ${data.targets} allies`
    case 'dot_heal':
      return `Heals ${data.targets} allies ${Math.round(data.hotPct * 100)}% HP/turn for ${data.duration} turns`
    case 'faith_power':
      return `${(data.atkMult * 100).toFixed(0)}% ATK, ${(data.defMult * 100).toFixed(0)}% DEF for ${data.duration} turns`
    case 'burst_shield':
      return `Burst Shield: ${data.blocks} blocks to ${data.targets} allies instantly`
    case 'memory_attack':
      return `Hits ${data.targets} targets at ${Math.round(data.atkPct * 100)}% ATK`
    case 'guilt_strike':
      return `High damage attack (${Math.round(data.dmgMult * 100)}% ATK) with guaranteed crit`
    case 'millennia_prayer':
      return `Heals all allies (${Math.round(data.healPct * 100)}% HP), chance to revive fallen (${Math.round(data.revivePct * 100)}%)`
    case 'primordial_strike':
      return `Primordial Strike: ${Math.round(data.dmgMult * 100)}% ATK damage`
    case 'love_strike':
      return `Love Strike: ${Math.round(data.dmgMult * 100)}% ATK, ignores defense`
    default:
      return ''
  }
}

// Character-related skill helpers (dual skill system)
export function getCharSkill(char, slot = 1) {
  if (!char) return null
  const skillId = slot === 1 ? char.skill1Id : char.skill2Id
  const skillLevel = slot === 1 ? (char.skill1Level || 1) : (char.skill2Level || 1)
  if (!skillId) return null
  return getSkillAtLevel(skillId, skillLevel)
}

export function getCharSkillEffect(char, slot = 1) {
  if (!char) return ''
  const skillId = slot === 1 ? char.skill1Id : char.skill2Id
  const skillLevel = slot === 1 ? (char.skill1Level || 1) : (char.skill2Level || 1)
  if (!skillId) return ''
  return getSkillDescription(skillId, skillLevel)
}

export function getCharSkillInfo(char, slot = 1) {
  if (!char) return null
  const skillId = slot === 1 ? char.skill1Id : char.skill2Id
  const skillLevel = slot === 1 ? (char.skill1Level || 1) : (char.skill2Level || 1)
  if (!skillId) return null
  const cost = getSkillUpgradeCost(skillId, skillLevel)
  if (cost === null) return null
  return {
    level: skillLevel + 1,
    cost: cost
  }
}

export function getCharNextSkillEffect(char, slot = 1) {
  if (!char) return ''
  const upgrade = getCharSkillInfo(char, slot)
  if (!upgrade) return ''
  const skillId = slot === 1 ? char.skill1Id : char.skill2Id
  return getSkillDescription(skillId, upgrade.level)
}

export function getSkillType(skillId) {
  const skill = SKILLS[skillId]
  return skill ? skill.type : null
}

export function canAddSkill(char, skillId, slot = 2) {
  // Check if skill type already exists
  const newType = getSkillType(skillId)
  if (!newType) return false

  // Check existing skill types
  const existing1 = char.skill1Id ? getSkillType(char.skill1Id) : null
  const existing2 = char.skill2Id ? getSkillType(char.skill2Id) : null

  if (existing1 === newType || existing2 === newType) return false
  return true
}
