// Character unlock data
// Characters with unlockStage: 0 are available from the start
// Others unlock when the specified stage is cleared

export const CHARACTER_UNLOCKS = [
  { charId: 1, unlockStage: 0 },   // Lily - starter
  { charId: 2, unlockStage: 0 },   // Estelle - starter
  { charId: 3, unlockStage: 0 },   // Iris - starter
  { charId: 4, unlockStage: 0 },   // Vivian - starter
  { charId: 5, unlockStage: 11 },  // Séraphine (29) - Rigel Ferry
  { charId: 6, unlockStage: 14 },  // Noelle (Nightingale) - Solros's Shop
  { charId: 7, unlockStage: 17 },  // Alouette (Skylark) - World Tree Path
  { charId: 9, unlockStage: 25 },  // Agnès - The Examination
  { charId: 10, unlockStage: 30 }, // Odette - Victoria Reunited (Ch3 Boss)
  { charId: 11, unlockStage: 32 }, // Äelovar - The Léïger Lyre
  { charId: 12, unlockStage: 40 }, // Marcelline (53) - The Sky-Ship (Ch4 Boss)
  { charId: 13, unlockStage: 50 }, // Tulranda - The Scattering (Ch5 Boss)
  { charId: 14, unlockStage: 60 }, // Orgašija - Eternal Symphony (Ch6 Boss)
  { charId: 15, unlockStage: 70 }, // Leorard - The Eternal Rest (Ch7 Boss)
]

// Check if a character is unlocked at a given stage
export function isCharUnlocked(charId, currentStage) {
  const unlock = CHARACTER_UNLOCKS.find(u => u.charId === charId)
  if (!unlock) return false
  return currentStage >= unlock.unlockStage
}

// Get the unlock stage for a character
export function getCharUnlockStage(charId) {
  const unlock = CHARACTER_UNLOCKS.find(u => u.charId === charId)
  return unlock ? unlock.unlockStage : 0
}
