// Get max() và min()
// [input]: [12, 45, 21, 65, 38, 76, 108, 43];
// [output]: Max(arr); // 108
//           Min(arr); // 12

function getMax(arr) {
  return arr.reduce((max, curr) => (curr > max ? curr : max), arr[0]);
}
function getMin(arr) {
  return arr.reduce((min, curr) => (curr < min ? curr : min), arr[0]);
}

const input = [12, 45, 21, 65, 38, 76, 108, 43];
console.log("Max: " + getMax(input));
console.log("Min: " + getMin(input));
