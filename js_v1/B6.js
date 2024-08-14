// Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b.
// Nghiệm là: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || arr[i] > b) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

let arr = [5, 3, 8, 1, 2, 3, 5, 6, 1];
console.log(filterRangeInPlace(arr, 1, 4));
