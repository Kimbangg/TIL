function solution() {
  for (let i = 0; i < N; i++) {
    let time = TP[i][0];
    let pay = TP[i][1];
    let end = time + i;

    if (end > N + 1) {
      continue;
    }

    for (let j = end; j <= N; j++) {
      dp[j] = Math.max(dp[i] + pay, dp[j]);
    }
  }
  console.log(dp[N]);
}

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = input.shift();
let dp = new Array(N + 1).fill(0);
const TP = input.map((tp) => tp.split(" ").map((e) => +e));

solution();
