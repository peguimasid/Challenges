function makeArrayConsecutive2(statues) {
  const statuesSorted = statues.sort((a, b) => a - b);

  const shouldHave = statuesSorted[statuesSorted.length - 1] - statuesSorted[0] + 1;

  const weHave = statuesSorted.length;

  const necessariesAdditionalStatues = shouldHave - weHave;

  return necessariesAdditionalStatues;
}

console.log(makeArrayConsecutive2([6, 2, 3, 8]))