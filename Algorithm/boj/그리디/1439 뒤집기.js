function flip(str) {
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] !== str[i]) {
      count += 1;
    }
  }
  return Math.ceil(count / 2);
}

let count = 0;
const input = require("fs").readFileSync("/dev/stdin").toString().trim();
console.log(flip(input));
