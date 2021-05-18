const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const solution = (input) => {
  const [N, K] = input[0].split(" ").map(Number);
  const arr = Array.from({ length: N }, (v, i) => i + 1);

  const ans = [];
  let jump = 0;
  while (arr.length > 0) {
    jump += K - 1;
    if (jump >= arr.length) jump %= arr.length;

    ans.push(arr[jump]);
    arr.splice(jump, 1);
  }

  return `<${ans.join(", ")}>`;
};

console.log(solution(input));
