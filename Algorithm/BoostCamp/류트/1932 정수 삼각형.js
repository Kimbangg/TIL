function solution(triangle) {
  for (let i = 0; i < triangle.length; i++) {
    for (let j = 0; j <= i + 1; j++) {
      if (j === 0) {
        dp[i][j] += dp[i - 1][j];
      } else if (i === j) {
        dp[i][j] += dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.max(dp[i][j] + dp[i - 1][j], dp);
      }
    }
  }
}

const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
const dp = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));
dp[0][0] = triangle[0][0];

console.log(solution(triangle));
