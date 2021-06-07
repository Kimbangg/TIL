function solution() {
  dp[0] = stairs[0];
  dp[1] = stairs[0] + stairs[1];
  dp[2] = Math.max(stairs[1] + stairs[2], stairs[0] + stairs[2]);

  for (let i = 3; i < stairs.length; i++) {
    dp[i] = Math.max(
      dp[i - 3] + stairs[i - 1] + stairs[i],
      dp[i - 2] + stairs[i]
    );
  }

  console.log(dp[stairs.length - 1]);
}

let stairs = [10, 20, 15, 25, 10, 20];
let dp = Array(stairs.length).fill(0);
solution();
