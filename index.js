function produceDrivingRange(blockRange) {
  return function(beginBlock, endBlock) {
    let begin = parseInt(beginBlock);
    let end = parseInt(endBlock);
    let distance = Math.abs(end - begin);
    let difference = blockRange - distance;
      if (difference > 0) {
        return `within range by ${difference}`;
      } else {
        return `${Math.abs(difference)} blocks out of range`;
      }
  }
};

function produceTipCalculator(percentage) {
  return function(fare) {
    return fare * percentage;
  }
};
