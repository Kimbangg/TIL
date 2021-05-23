function solution(priorities, location) {
  let answer = 0;
  let target_index = location;

  while (priorities) {
    if (priorities.some((each) => each > priorities[0])) {
      priorities.push(priorities.shift());
    } else {
      priorities.shift();
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

let priorities = [2, 1, 3, 2];
let location = 2;

console.log(solution(priorities, location));
