function solution(food) {
  let answer = 0;
  const dp = Array(food.length).fill(0);
  dp[0] = food[0];
  dp[1] = Math.max(food[0], food[1]);

  for (let i = 2; i < food.length; i++) {
    dp[i] = Math.max(dp[i - 1], food[i] + dp[i - 2]);
  }

  return dp[dp.length - 1];
}

const food = [1, 3, 1, 5];
console.log(solution(food));
