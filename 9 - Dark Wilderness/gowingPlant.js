function growingPlant(upSpeed, downSpeed, desiredHeight) {
  let daysCounter = 0;
  let plantHeight = 0;

  while(plantHeight < desiredHeight) {
    daysCounter++;
    plantHeight += upSpeed;
    
    if(plantHeight < desiredHeight) plantHeight -= downSpeed;
  }

  return daysCounter;
}

console.log(growingPlant(7, 3, 443))