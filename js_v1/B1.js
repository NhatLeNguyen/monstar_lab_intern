// Viết code, một dòng cho mỗi yêu cầu sau:
// Tạo một đối tượng User trống.
// Thêm thuộc tính name với giá trị Hoang.
// Thêm thuộc tính surname với giá trị Viet.
// Thay đổi giá trị của name thành Nguyen.
// Xóa thuộc tính name khỏi đối tượng.

const User = {};
User.name = "Hoang";
User.surname = "Viet";
User.name = "Nguyen";
delete User.name;
