function solution(num) {
  for (let i = 3; i < num + 1; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % 796796;
  }
}

let num = 3;
const dp = Array(1001).fill(0);
dp[1] = 1;
dp[2] = 3;
console.log(solution(num));
