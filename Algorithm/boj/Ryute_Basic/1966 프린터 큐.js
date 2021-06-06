function solution(priorities, target) {
  let tmpIndex = target;
  let count = 1;
  let first = -1;

  while (priorities.length) {
    first = priorities.shift();

    if (priorities.some((each) => each > first)) {
      priorities.push(first);
    }
    // 큰 값이 존재 하지 않는다면
    else {
      if (tmpIndex === 0) {
        return count;
      } else {
        count++;
      }
    }
    tmpIndex - 1 >= 0 ? (tmpIndex -= 1) : (tmpIndex = priorities.length - 1);
  }
}

const priorities = [1, 2, 3, 4];
const target = 2;
console.log(solution(priorities, target));
