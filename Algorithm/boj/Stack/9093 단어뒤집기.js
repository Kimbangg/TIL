let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
const tc = pasreInt(input[0]);

for (let i = 1; i <= tc; i++) {
  const cases = input[i];
  const stack = [];
  let result = "YES";

  for (let j = 0; j < cases.length; j++) {
    // (인 경우에만 push를 한다.
    if (cases[j] === "(") {
      stack.push(1);
    } else {
      // 만약에 ()))) 와 같이 ( 1개에 ))만 가득하다면 pop의 값이 false로 출력된다.
      if (!stack.pop()) {
        result = "NO";
        break;
      }
    }
  }
  // )가 없어서 pop이 안되면 stack의 길이가 0이 아니기에 NO를 출력.
  if (stack.length !== 0) {
    result = "NO";
  }
  console.log(result);
}
