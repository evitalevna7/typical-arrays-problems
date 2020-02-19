
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let minNum = array[0];
  array.forEach(element => {
    if (element < minNum) {
      minNum = element;
    }
  });
  return minNum;
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let maxNum = array[0];
  array.forEach(element => {
    if (element > maxNum) {
      maxNum = element;
    }
  });
  return maxNum;
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  }
  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum / array.length;
}
