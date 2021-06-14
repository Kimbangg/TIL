function solve() {
  const dp = Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    dp[i] = 0;
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + cards[j]);
    }
  }
  console.log(dp[n]);
}

const n = 4;
const cards = [0, 1, 5, 6, 7];
solve();
