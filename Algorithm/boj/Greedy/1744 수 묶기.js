const fs = require("fs");
const stdin = fs.readFileSync("/dev/stdin").toString().split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

function solution(numArray) {
  let sum = 0;
  const positiveArray = numArray.filter((num) => num > 0);
  const negaitveArray = numArray.filter((num) => num < 0);
  const hasZero = numArray.includes(0);

  positiveArray.sort((a, b) => b - a);
  for (let i = 0; i < positiveArray.length; i++) {
    const current = positiveArray[i];
    const next = positiveArray[++i];

    if (next) {
      if (current === 1 || next === 1) {
        sum += current + next;
      } else {
        sum += current * next;
      }
    } else {
      sum += current;
    }
  }

  negaitveArray.sort((a, b) => a - b);
  for (let j = 0; j < negaitveArray.length; j++) {
    const current = negaitveArray[j];
    const next = negaitveArray[++j];

    if (next) {
      sum += current * next;
    } else {
      if (hasZero) {
        continue;
      } else {
        sum += current;
      }
    }
  }
  return sum;
}

const count = input();
const array = [];
for (let i = 0; i < count; i++) {
  array.push(parseInt(input()));
}
console.log(solution(array));
