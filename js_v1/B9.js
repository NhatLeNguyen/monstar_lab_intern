// let flattened = [[1, 2], [3, 4], [5, 6]];
// 	Viết function trả về mảng đã được làm phẳng.
// 	[Output]: [1, 2, 3, 4, 5, 6]

let flattened = [
  [1, 2],
  [3, 4],
  [5, 6],
];

function flattenArray(arr) {
  return arr.reduce((result, val) => result.concat(val), []);
}

console.log(flattenArray(flattened));
