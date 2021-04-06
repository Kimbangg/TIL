function solution(priorities, location) {
  var answer = 0;
  var target_index = location;

  while (priorities.length > 0) {
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
      answer = answer + 1;

      if (target_index === 0) {
        break;
      } else {
        target_index -= 1;
      }
    }
  }

  return answer;
}
