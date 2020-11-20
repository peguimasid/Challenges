function validTime(time) {
  const regexp = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/

  return regexp.test(time);
}