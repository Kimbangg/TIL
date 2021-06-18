function solution() {
  for (let i = 2; i < dp.length; i++) {
    dp[i] = dp[i - 1] + 1;

    if (i % 2 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    }

    if (i % 3 === 0) {
      dp[i] = Math.min(dp[i], dp[i / 3] + 1);
    }
  }
  console.log(dp[number]);
}

let number = 10;
const dp = Array(number + 1).fill(0);
solution();
