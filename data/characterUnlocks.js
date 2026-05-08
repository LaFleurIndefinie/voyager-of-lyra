// Character unlock system - updated stages
// Characters 1-4 are available from the start (Lily, Estelle, Iris, Vivian)
// Characters 5+ are unlocked by completing specific stages

export const CHARACTER_UNLOCKS = [
  { charId: 5, stageId: 11, name: "Séraphine", nameZh: "塞拉芬" },       // Rigel Ferry
  { charId: 6, stageId: 14, name: "Noelle", nameZh: "诺艾尔" },              // Solros's Shop
  { charId: 7, stageId: 17, name: "Alouette", nameZh: "阿鲁埃特" },         // World Tree Path
  { charId: 9, stageId: 25, name: "Agnès", nameZh: "艾格西斯" },              // The Examination
  { charId: 10, stageId: 30, name: "Odette", nameZh: "奥黛特" },             // Victoria Reunited (Ch3 Boss)
  { charId: 11, stageId: 32, name: "Ælovar", nameZh: "艾洛瓦尔" },            // The Léïger Lyre
  { charId: 12, stageId: 40, name: "Marcelline", nameZh: "玛瑞玛" },        // The Sky-Ship (Ch4 Boss)
  { charId: 13, stageId: 50, name: "Tulranda", nameZh: "图拉兰达" },          // The Scattering (Ch5 Boss)
  { charId: 14, stageId: 60, name: "Orgašija", nameZh: "奥尔加西雅" },       // Eternal Symphony (Ch6 Boss)
  { charId: 15, stageId: 70, name: "Leorard", nameZh: "苞欧拉德" },          // The Eternal Rest (Ch7 Boss)
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
