function solution(prices) {
  let min = prices[0];
  let answer = 0;

  prices.forEach((price) => {
    if (price < min) {
      min = price;
    }
    answer = answer > price - min ? answer : price - min;
  });

  return answer;
}
