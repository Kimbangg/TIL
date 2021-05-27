function solution(n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

let n = 20;
console.log(solution(n));
// 1 => 1
// 2 => 1+1, 2
// 3 => 1+1+1, 1+2, 2+1
// 4 => 1+1+1+1 1+2+1, 1+2+2, 2+1+1, 2+2
