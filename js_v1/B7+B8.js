let initArray = [
  { name: "Dung", age: 25 },
  { name: "Viet", age: 26 },
  { name: "Hoang", age: 27 },
  { name: "Long" },
  { age: 20 },
  { name: "Duong", age: 18 },
];

// Viết code chuyển đổi sang 1 mảng chỉ chứa name.

let nameArr = [];
initArray.forEach((item) => {
  if (item.name) {
    nameArr.push(item.name);
  }
});

console.log(nameArr);

// Viết function getAverageAge(arr) trả về tuổi trung bình.
function getAverageAge(arr) {
  let sum = 0;
  let count = 0;
  arr.forEach((item) => {
    if (item.age) {
      sum += item.age;
      count++;
    }
  });

  if (count === 0) {
    return 0;
  }

  return sum / count;
}

console.log(getAverageAge(initArray));
