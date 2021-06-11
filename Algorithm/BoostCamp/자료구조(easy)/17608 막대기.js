function solve() {
  const answer = [];
  let max = stack[stack.length - 1];
  answer.push(stack.pop());

  for (let i = stack.length - 1; i >= 0; i--) {
    if (max < stack[i]) {
      answer.push(stack[i]);
      max = stack[i];
    }
  }

  return answer.length;
}
let tall = 6;
let stack = [6, 9, 7, 6, 4, 6];
console.log(solve());
