const n = 1;
let answer = 0;

for (let i = 0; i <= 30; i++) {
  if (Math.pow(2, i) === n) {
    answer = 1;
    break;
  }
}

console.log(answer);
