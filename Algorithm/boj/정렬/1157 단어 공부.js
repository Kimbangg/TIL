let input = require("fs").readFileSync("/dev/stdin").toString().toLowerCase();

let isSame = false;
const arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  arr[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...arr);
const index = arr.indexOf(max);

for (let j = 0; j < 26; j++) {
  if (arr[j] === max && index != j) {
    isSame = true;
    break;
  }
}

console.log(isSame ? "?" : String.fromCharCode(index + 65));
