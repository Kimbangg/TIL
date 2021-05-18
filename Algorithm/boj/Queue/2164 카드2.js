const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const N = input[0];
const arr = Array.from({ length: N }, (v, i) => i + 1);

while (arr.length > 1) {
  if (arr.length % 2) {
    arr.shift();
    arr.push(arr.shift());
  } else {
    arr = arr.filter((e, i) => i % 2);
  }
}

console.log(arr[0]);
