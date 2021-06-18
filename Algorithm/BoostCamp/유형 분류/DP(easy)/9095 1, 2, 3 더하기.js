function solve(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  console.log(dp[n]);
}

const T = 3;
const targets = [4, 7, 10];

for (let i = 0; i < T; i++) {
  solve(targets[i]);
}
