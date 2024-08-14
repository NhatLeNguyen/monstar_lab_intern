// Viết một hàm filterRangeInPlace(arr, a, b) lấy một mảng arr và loại bỏ khỏi nó tất cả các giá trị ngoại trừ những giá trị nằm giữa a và b.
// Nghiệm là: a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
  return arr.reduce((result, item) => {
    if (item >= a && item <= b) {
      result.push(item);
    }
    return result;
  }, []);
}

let arr = [5, 3, 8, 1, 2, 3, 5, 6, 1];
console.log(filterRangeInPlace(arr, 1, 3));
