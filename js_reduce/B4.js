// Đếm số lượng giống nhau trong một array.
// 	[input]: [0, 1, 1, 2, 2, 2];
// 	[output]: { 0: 1, 1: 2, 2: 3 };

function Count(arr) {
  return arr.reduce((result, item) => {
    if (result[item]) {
      result[item] += 1;
    } else {
      result[item] = 1;
    }
    return result;
  }, {});
}

const input = [0, 1, 3, 2, 2, 2, 3];
console.log(Count(input));
