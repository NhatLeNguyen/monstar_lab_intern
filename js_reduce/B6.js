// Group by.
// [input]: arr = [
//             { area: "GZ", name: "YZW", age: 27 },
//             { area: "GZ", name: "TYJ", age: 25 },
//             { area: "SZ", name: "AAA", age: 23 },
//             { area: "FS", name: "BBB", age: 21 },
//             { area: "SZ", name: "CCC", age: 19 }
//         ];
// [output]: Group(arr, "area"); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }.

function groupBy(arr, key) {
  return arr.reduce((result, item) => {
    const keyValue = item[key];
    if (!result[keyValue]) {
      result[keyValue] = [];
    }
    result[keyValue].push(item);
    return result;
  }, {});
}

const arr = [
  { area: "GZ", name: "AAA", age: 27 },
  { area: "GZ", name: "TYJ", age: 25 },
  { area: "SZ", name: "AAA", age: 23 },
  { area: "FS", name: "BBB", age: 21 },
  { area: "SZ", name: "CCC", age: 19 },
];
console.log(groupBy(arr, "area"));
