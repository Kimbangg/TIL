function solution(number, k) {
  let answer = "";
  const stack = [];

  for (let i = 0; i < number.length; i++) {
    let cur = number[i];

    while (k > 0 && stack[stack.length - 1] < cur) {
      stack.pop();
      k -= 1;
    }

    stack.push(cur);
  }

  // k가 남아 있는 예외 처리를 위한 splice
  stack.splice(stack.length - k, k);
  return stack.join("");
}
