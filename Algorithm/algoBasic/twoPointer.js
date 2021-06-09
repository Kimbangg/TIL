function solution(data, target) {
  let count = 0;
  let sum = 0;
  let end = 0;

  for (let start = 0; start < length; start++) {
    // target 보다 sum이 작거나 End가 범위에서 벗어나지 않으면
    while (sum < target && end < length) {
      sum += data[end];
      end += 1;
    }

    if (sum === target) {
      count += 1;
    }

    sum -= data[start];
  }

  return count;
}

let [length, target] = [5, 5];
const data = [1, 2, 3, 2, 5];
console.log(solution(data, target));
