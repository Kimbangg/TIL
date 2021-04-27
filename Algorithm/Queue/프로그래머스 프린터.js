function solution(priorities, location) {
  let answer = 0;
  let target_index = location;

  while (priorities.length) {
    if (priorities.some((num) => num > priorities[0])) {
      priorities.push(priorities[0]);
      priorities.shift(priorities[0]);

      if (target_index === 0) {
        target_index = priorities.length - 1;
      } else {
        target_index -= 1;
      }
    } else {
      priorities.shift(priorities[0]);
      answer += 1;

      if (target_index === 0) {
        break;
      } else {
        target_index -= 1;
      }
    }
  }

  return answer;
}

// input : [2,1,3,2]
