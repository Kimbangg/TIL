const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

function solution() {
  // 스택의 길이인 n을 입력 받습니다.
  const n = +input[0];
  // n의 길이만큼 스택의 값을 입력 받습니다.
  const numArr = input[1].split(" ").map((c) => +c);
  // 오큰수를 담을 수 있는 Arr을 -1으로 초기화 해둡니다.
  const ansArr = Array(n).fill(-1);
  // 비교 할 때, 사용 할 스택을 선언합니다.
  const stack = [];

  for (let i = 0; i < n; i += 1) {
    const current = numArr[i];
    for (let j = stack.length - 1; j >= 0; j -= 1) {
      const temp = numArr[stack[j]];
      if (temp < current) {
        ansArr[stack.pop()] = current;
      } else {
        break;
      }
    }

    stack.push(i);
  }

  return ansArr.join(" ");
}

console.log(solution());
