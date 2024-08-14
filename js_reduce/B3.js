// Bài 3. Uniq array. Loại bỏ phần tử bị lặp.
// 	[input]: [2, 1, 0, 3, 2, 1, 2];
// 	[output]: [2, 1, 0, 3];

function uniqArray(arr) {
  return arr.reduce((result, item) => {
    if (!result.includes(item)) {
      result.push(item);
    }
    return result;
  }, []);
}

const input = [2, 1, 0, 3, 2, 1, 2];
console.log(uniqArray(input));
