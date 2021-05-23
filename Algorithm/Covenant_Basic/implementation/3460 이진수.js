let num = 13;
let to2 = num
  .toString(2)
  .split("")
  .reverse()
  .map((e) => +e);
const answer = [];

for (let i = 0; i < to2.length; i++) {
  if (to2[i] === 1) {
    answer.push(i);
  }
}

console.log(answer);
