// Xây dựng chương trình có một ô input, một button.
// Sau khi nhập giá trị số vào ô input, click vào button thì in các số từ 1 tới giá trị của ô input ra màn hình.
// Nếu không nhập vào ô input, click button sẽ in số 1 + "Vui lòng nhập giá trị số vào ô input".

document.getElementById("printButton").addEventListener("click", function () {
  const input = document.getElementById("numberInput").value;
  const output = document.getElementById("output");
  output.innerHTML = "";

  if (isNaN(input) || input === "") {
    output.innerHTML = "1 Vui lòng nhập giá trị số vào ô input";
  } else {
    let numberLine = "";
    for (let i = 1; i <= input; i++) {
      numberLine += i + " ";
    }
    output.innerHTML = numberLine;
  }
});
