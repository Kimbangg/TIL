function solution(numCoin, money, coins) {
  for (let i = 0; i < numCoin; i++) {
    for (let j = coins[i]; j <= money; j++) {
      dp[j] += dp[j - coins[i]];
    }
  }
  console.log(dp[money]);
}

const numCoin = 3;
const money = 10;
const coins = [1, 2, 5];

// const [numCoin, money] = input[0].split(" ").map((x) => +x);
// const coins = input[1].split(" ").map((x) => +x);

const dp = Array(10001).fill(0);
dp[0] = 1;

console.log(solution(numCoin, money, coins));

// 1 2 3 4 5 6 7 8 9 10
// 1 1 1 1 1 1 1 1 1 1 1
// 2 0 1 1 2 2 3 3 4 4 5
