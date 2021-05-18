function readInputLines() {
  return require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
}

function splitAndParseInt(string) {
  return string.split(" ").map((value) => parseInt(value));
}

// 1 ~ 1000 까지 122333 수열을 만드는 function
function makeSequence() {
  queue.push(0);
  for (let i = 1; i <= 1000; i++) {
    for (let j = 0; j < i; j++) {
      queue.push(i);
    }
  }
}

const input = readInputLines();
const [A, B] = splitAndParseInt(input[0]);
let queue = [];
let sum = 0;
makeSequence();

for (let i = A; i <= B; i++) {
  sum += queue[i];
}

console.log(sum);
