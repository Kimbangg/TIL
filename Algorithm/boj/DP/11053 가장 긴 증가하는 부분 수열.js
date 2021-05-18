let input = require("fs").readFileSync("dev/stdin").toString().split("\n");
let n = Number(input[0]);
let seq = input[1].split(" ").map((num) => parseInt(num));
const dp = Array(n + 1).fill(0);
seq.unshift(0);

for (let i = 0; i < n; i++) {
  for (let j = 0; j < i; j++) {
    if (seq[i] > seq[j] && dp[i] < dp[j]) {
      dp[i] = dp[j];
    }
  }
  dp[i] += 1;
}

console.log(Math.max(dp));
