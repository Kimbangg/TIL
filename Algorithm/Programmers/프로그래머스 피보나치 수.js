function solution(n) {
  const divider = 1234567;
  const dp = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % divider;
  }
  return dp[n];
}

let n = 3;
