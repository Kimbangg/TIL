function solution(prices) {
  let answer = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      answer += prices[i] - prices[i - 1];
    }
  }
  return answer;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log(solution(prices));
