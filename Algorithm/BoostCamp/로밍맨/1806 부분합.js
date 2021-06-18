function solution(data, target) {
  let length = data.length;
  let min = 0;
  const countArr = [];
  let count = 0;
  let sum = 0;
  let end = 0;

  for (let start = 0; start < length; start++) {
    // target 보다 sum이 작거나 End가 범위에서 벗어나지 않으면
    while (sum < target && end < length) {
      sum += data[end];
      end += 1;
      count += 1;
    }

    if (sum === target) {
      countArr.push(count);
    }

    sum -= data[start];
    count--;
  }

  return countArr.length === 0 ? 0 : Math.min(...countArr);
}

const fs = require("fs");
const inputs = fs.readFileSync("./dev/stdin").toString().split("\n");

const [n, target] = inputs[0].split(" ").map((v) => +v);
const data = inputs[1].split(" ").map((v) => +v);

// let [n, target] = [10, 15];
// const data = [5, 1, 3, 5, 10, 7, 4, 9, 2, 8];

console.log(solution(data, target));
