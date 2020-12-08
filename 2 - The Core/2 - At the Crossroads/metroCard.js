function metroCard(lastNumberOfDays) {
  return lastNumberOfDays < 31 ? [31] : [28, 30, 31]
}