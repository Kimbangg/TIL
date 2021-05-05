function solution() {
  meetings.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    }
    return a[1] - b[1];
  });

  meetings.forEach((e) => {
    if (end <= e[0]) {
      count += 1;
      end = e[1];
    }
  });

  console.log(count);
}

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().split("\n");

let count = 0;
let end = 0;
const N = +input[0];
const meetings = [];

for (let i = 1; i <= N; i++) {
  const [start, end] = input[i].split(" ");
  meetings.push([+start, +end]);
}

solution();
