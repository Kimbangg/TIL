function solution(prices) {
  const stack = [];
  const answer = Array(prices.length).fill(0);

  for (let i = 0; i < prices.length; i++) {
    // 주식 가격이 이전보다 낮음.
    while (stack.length && prices[i] < prices[stack[stack.length - 1]]) {
      // 이전에 저장 해놓은 idx 중 가장 위의 값을 뺸다.
      // 그 이유는, 가장 위 == 가장 뒤에 등장한 녀석.
      let temp = stack.pop();

      // 현재 인덱스 값에서 뺀 인덱스를 값에 넣어 주면
      // 몇 초 동안 유지 됬는지 알 수 있음.
      answer[temp] = i - temp;
    }
    stack.push(i);
  }

  // 남아 있다는건, 자신보다 작아진 경우가 없다는 것.
  // 최대 길이에서 자신의 인덱스를 제외
  while (stack.length) {
    let temp = stack.pop();
    answer[temp] = prices.length - temp - 1;
  }

  console.log(answer);
}

let prices = [1, 2, 0, 0, 0];
console.log(solution(prices));

// 그래서 효율을 더 올릴 수 있는 방법은 없을까 ?
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
