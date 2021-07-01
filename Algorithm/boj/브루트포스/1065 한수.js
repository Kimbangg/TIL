function solution(n) {
  let count = 0;
  for (i = 1; i <= n; i++) {
    let j = i.toString();
    if (j.length <= 2) {
      count++;
    } else if (j[0] - j[1] === j[1] - j[2]) {
      count++;
    }
  }
  console.log(count);
}

let h = require("fs").readFileSync("/dev/stdin").toString();
let num = +h;

solution(num);
