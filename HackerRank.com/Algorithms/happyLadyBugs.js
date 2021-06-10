function happyLadybugs(b) {
  let happy = false;

  for (let i = 0; i < b.length; i++) {
    let ladybug = b[i];

    if (b.indexOf(ladybug) === b.lastIndexOf(ladybug) && ladybug !== '_') {
      return 'NO';
    }

    happy = ladybug === b[i - 1] || ladybug === b[i + 1];

    if (!happy && b.indexOf('_') === -1) return 'NO';
  }

  return 'YES';
}

console.log(happyLadybugs('RGY_YGR'));
