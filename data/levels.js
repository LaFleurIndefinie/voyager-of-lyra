// Linear interpolation: exp for level n = base * n
// Total exp to reach level n = base * (1 + 2 + ... + n) = base * n * (n + 1) / 2
// For smoother progression, use increasing base per level
export const LEVELS = []

const BASE_EXP = 50 // Base exp per level, increases linearly

for (let level = 1; level <= 30; level++) {
  // Cumulative exp: sum of (BASE_EXP + (level-1)*5) for all levels 1 to current
  let totalExp = 0
  for (let i = 1; i <= level; i++) {
    totalExp += BASE_EXP + (i - 1) * 5
  }
  LEVELS.push({ level, exp: totalExp })
}

// Verify: Level 1 = 50, Level 2 = 50+55=105, Level 30 = 50+195=245 avg, total ~4425
