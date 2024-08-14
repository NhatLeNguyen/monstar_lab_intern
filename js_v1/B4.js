// Tạo mảng có tên là styles với các mục “Jazz” và “Blues”.
// 	Thêm “Rock-n-Roll” vào cuối.
// 	Thay thế giá trị ở giữa bằng “Classics”. Code để tìm giá trị giữa sẽ hoạt động với bất kỳ mảng nào có độ dài lẻ.
// 	Tách giá trị đầu tiên của mảng và hiển thị nó.
// 	Thêm trước Rap và Reggae vào mảng.
// 	[Output]:
// 	Jazz, Blues
// 	Jazz, Blues, Rock-n-Roll
// 	Jazz, Classics, Rock-n-Roll
// 	Classics, Rock-n-Roll
// 	Rap, Reggae, Classics, Rock-n-Roll

let styles = ["Jazz", "Blues"];

styles.push("Rock-n-Roll");

let middle = Math.round(styles.length / 2) - 1;
styles[middle] = "Classics";

let first = styles.shift();

styles.splice(0, 0, "Rap", "Reggae");
console.log(styles);
