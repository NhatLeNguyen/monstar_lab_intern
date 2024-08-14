let salaries = {
  Food: 1200,
  Rice: 1600,
  Breed: 1350,
};

//   Viết code để tính tổng tất cả các khoản lương và lưu trữ trong biến tổng.

let sum = 0;

for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum);
