const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const bar = input[0];
let answer = 0;
let stack = [];

for (let i = 0; i < bar.length; i++) {
  if (bar[i] === "(") {
    stack.push(bar[i]);
  } else {
    // () 과 같이 된 경우에는 자를 철근이 없다는 것을 의미한다.
    // 그리하여 ) 인 상태에서 자신의 전에 (가 있었어도 stack은 비어있기에 0이 증가한다.
    if (bar[i - 1] === "(") {
      stack.pop();
      answer += stack.length;
    } else {
      stack.pop();
      answer += 1;
    }
  }
}

console.log(answer);
