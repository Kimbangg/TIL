let numbers = [3, 29, 38, 12, 57, 74, 40, 85, 61];
let max = 0,
  maxIdx = 0;

for (let i = 0; i < numbers.length; i++) {
  if (max < numbers[i]) {
    max = numbers[i];
    maxIdx = i + 1;
  }
}

console.log(max);
console.log(maxIdx);
