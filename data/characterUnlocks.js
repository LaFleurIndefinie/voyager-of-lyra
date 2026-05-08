// Character unlock system
// Characters 1-4 are available from the start (Lily, Estelle, Iris, Vivian)
// Characters 5+ are unlocked by completing specific stages

export const CHARACTER_UNLOCKS = [
  { charId: 5, stageId: 11 },  // Rigel Ferry
  { charId: 6, stageId: 14 },  // Solros's Shop
  { charId: 7, stageId: 17 },  // World Tree Path
  { charId: 8, stageId: 20 },  // World Tree Path
  { charId: 9, stageId: 25 },  // The Examination
  { charId: 10, stageId: 30 },  // Victoria Reunited (Ch3 Boss)
  { charId: 11, stageId: 32 }, // The Léïger Lyre
  { charId: 12, stageId: 40 }, // The Sky-Ship (Ch4 Boss)
  { charId: 13, stageId: 50 }, // The Scattering (Ch5 Boss)
  { charId: 14, stageId: 60 }, // Eternal Symphony (Ch6 Boss)
  { charId: 15, stageId: 70 }, // The Eternal Rest (Ch7 Boss)
]

// Check if a character is unlocked given the current stage progress
export function isCharacterUnlocked(charId, currentStage) {
  // Characters 1-4 are always unlocked
  if (charId <= 4) return true

  const unlock = CHARACTER_UNLOCKS.find(u => u.charId === charId)
  if (!unlock) return true // If no unlock requirement found, default to unlocked

  return currentStage >= unlock.stageId
}

// Get unlock info for a character
export function getCharacterUnlockInfo(charId) {
  if (charId <= 4) return null // Already unlocked
  return CHARACTER_UNLOCKS.find(u => u.charId === charId) || null
}
