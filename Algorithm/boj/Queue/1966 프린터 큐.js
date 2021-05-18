function solution(priorities, location) {
  let answer = 0;
  let target_index = location;

  while (priorities.length) {
    if (priorities.some((num) => num > priorities[0])) {
      priorities.push(priorities[0]);
      priorities.shift(priorities[0]);
    } else {
      priorities.shift(priorities[0]);
      answer += 1;

      if (target_index === 0) {
        break;
      }
    }

    target_index -= 1;

    if (target_index === -1) {
      target_index = priorities.length - 1;
    }
  }

  return answer;
}

const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);

for (let i = 0; i < N; i++) {
  let [T, location] = input[i].split(" ").map(Number);

  for (let j = 0; j < T; j++) {
    priorities.push(Number(input[i]));
  }

  let answer = solution(priorities, location);
  console.log(answer);
}
