function jumpingOnClouds(c) {
  let result = 0;

  for (let i = 0; i < c.length; i++) {
    let afterNextCloud = c[i + 2];
    let afterNextCloudExists = afterNextCloud !== undefined;

    if (afterNextCloudExists && afterNextCloud !== 1) i++;

    result++;
  }

  return result - 1;
}

console.log(jumpingOnClouds([0, 0, 0, 1, 0, 0]));
