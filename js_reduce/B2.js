// Tìm phần tử khác nhau giữa 2 mảng.
// 	[input]: arr1 = [1, 2, 3, 4, 5];
// 			 arr2 = [2, 3, 6];

// 	Difference(arr1, arr2);
// 	[output]: [1, 4, 5];

function Difference(arr1, arr2) {
  return arr1.reduce((result, item) => {
    if (!arr2.includes(item)) {
      result.push(item);
    }
    return result;
  }, []);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6];
console.log(Difference(arr1, arr2));
