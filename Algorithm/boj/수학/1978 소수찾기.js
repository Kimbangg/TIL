let inputs = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let result = 0;

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
inputs = inputs[1].toString().split(" ");
for (let j = 0; j < inputs.length; j++) {
  let input = +inputs[j];
  if (isPrime(input)) {
    result += 1;
  }
}

console.log(result);
