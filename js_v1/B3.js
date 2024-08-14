// [Input]:
// let menu = {
//   width: 200,
//   height: 300,
//   name: "Nguyễn Van A"
// };

// Tạo function multiplyNumeric(obj) nhân tất cả các thuộc tính số của object menu với 2.

// [Output]:
// menu = {
//   width: 400,
//   height: 600,
//   name: "Nguyễn Van A"
// };

let menu = {
  width: 200,
  height: 300,
  name: "Nguyễn Van A",
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] *= 2;
    }
  }
  return obj;
}

console.log(multiplyNumeric(menu));
