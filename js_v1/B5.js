// Viết hàm camelize(str) để thay đổi các từ được phân tách bằng dấu gạch ngang như “my-short-string” thành “myShortString” được viết bằng camel.

// 	[Output]:
// 	camelize("background-color") == 'backgroundColor';
// 	camelize("list-style-image") == 'listStyleImage';
// 	camelize("-webkit-transition") == 'WebkitTransition';

function camelize(str) {
  let words = str.split("-");
  if (!str.includes("-")) return str;
  for (let i = 1; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  return words.join("");
}

console.log(camelize("webkittransition"));
