
exports.min = function min (array) {
  if (!array || !array.length) return 0;

  let minNum = array[0];
  for (let currentNum of array) {
      if (currentNum < minNum) {
        minNum = currentNum
      }
  }

  return minNum;
}

exports.max = function max (array) {
    if (!array || !array.length) return 0;

    let maxNum = array[0];
    for (let currentNum of array) {
        if (currentNum > maxNum) {
          maxNum = currentNum
        }
    }
  
    return maxNum;
}

exports.avg = function avg (array) {
    if (!array || !array.length) return 0;

  let sum = 0;
  for (let currentNum of array) {
      sum += currentNum;
  }

  return sum / array.length;
}
