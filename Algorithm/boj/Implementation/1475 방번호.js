function solution(params) {
  const input = params;
  const len = input.length;
  const count = new Array(10).fill(0);

  for (let i = 0; i < len; i++) {
    const elem = input[i];
    if (elem == 6) {
      count[9] += 1;
    } else {
      count[elem] += 1;
    }
  }

  const temp = parseInt(count[9] / 2);
  count[6] = temp;
  count[9] = temp;

  let max = 0;
  for (let i = 0; i < count.length; i++) {
    if (max < count[i]) {
      max = count[i];
    }
  }
  console.log(max);
}

let room = require("fs").readFileSync("/dev/stdin").toString().split("\n");
solution(`${room}`);
