function solution() {
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= target; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  return dp[target];
}

let coins = [1, 2, 5];
let target = 10;
let dp = Array(target + 1).fill(0);
dp[0] = 1;
console.log(solution());
