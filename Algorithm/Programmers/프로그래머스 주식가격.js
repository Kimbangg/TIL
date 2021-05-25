function solution(prices) {
  const answer = [];
  let stack = [];

  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] <= prices[j]) {
        stack.push(1);
      }
    }

    answer.push(stack.length);
    stack = [];
  }
  return answer;
}

let prices = [1, 2, 3, 2, 3];
console.log(solution(prices));

// 그래서 효율을 더 올릴 수 있는 방법은 없을까 ?
