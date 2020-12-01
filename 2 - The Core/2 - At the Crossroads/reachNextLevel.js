function reachNextLevel(experience, threshold, reward) {
    if (experience + reward >= threshold) {
      return true
    }

    return false
}

// BETTER SULUTION
function reachNextLevel(experience, threshold, reward) {
  return experience + reward >= threshold
}