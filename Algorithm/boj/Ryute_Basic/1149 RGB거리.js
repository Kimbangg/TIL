function solution(N, cost, dp) {
  const house_count = cost.length;
  const color_count = cost[0].length;

  for (let i = 1; i < house_count; i++) {
    for (let j = 0; j < color_count; j++) {
      if (j === 0) {
        dp[i][j] = cost[i][j] + Math.min(dp[i - 1][1], dp[i - 1][2]);
      } else if (j === 1) {
        dp[i][j] = cost[i][j] + Math.min(dp[i - 1][0], dp[i - 1][2]);
      } else {
        dp[i][j] = cost[i][j] + Math.min(dp[i - 1][0], dp[i - 1][1]);
      }
    }
  }

  console.log(Math.min(...dp[N - 1]));
}

let N = 3;

let cost = [
  [26, 40, 83],
  [49, 60, 57],
  [13, 89, 99],
];

const dp = Array.from(new Array(N), () => new Array(N).fill(0));
dp[0][0] = cost[0][0];
dp[0][1] = cost[0][1];
dp[0][2] = cost[0][2];

solution(N, cost, dp);
