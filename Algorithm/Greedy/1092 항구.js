function solution() {
  let answer = 0;

  if (cranes[0] < boxes[0]) {
    console.log(-1);
    return;
  }

  while (boxes.length) {
    answer += 1;

    for (let crane of cranes) {
      if (!boxes.length) break;
      for (let box of boxes) {
        if (crane >= box) {
          boxes.splice(boxes.indexOf(box), 1);
          break;
        }
      }
    }
  }
  console.log(answer);
}

const fs = require("fs");
const stdin = (process.platform === "linux"
  ? fs.readFileSync("/dev/stdin").toString().trim()
  : `3 99 1 7 99 99 99 99 1`
).split("\n");

const input = (() => {
  let line = 0;
  return () => stdin[line++];
})();

let N = input();

let cranes = input()
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => b - a);

let M = input();

let boxes = input()
  .split(" ")
  .map((e) => +e)
  .sort((a, b) => b - a);

solution();

// function solution() {
//   let answer = 0;

//   if (boxes[0] > cranes[0]) {
//     return -1;
//   }

//   while (boxes.length > 0) {
//     answer += 1;

//     for (let crane of cranes) {
//       for (let box of boxes) {
//         if (crane >= box) {
//           boxes.shift();
//           break;
//         }
//       }
//     }
//   }

//   return answer;
// }

// const cranes = [9, 8, 6];
// const boxes = [7, 5, 4, 2, 2];

// const input = require("fs")
//   .readFileSync("/dev/stdin", "utf8")
//   .trim()
//   .split("\n");

// const n = Number(input[0]);

// const cranes = input[1]
//   .split(" ")
//   .map((a) => +a)
//   .sort((a, b) => b - a);

// const m = Number(input[2]);

// const boxes = input[3]
//   .split(" ")
//   .map((a) => +a)
//   .sort((a, b) => b - a);

// console.log(solution());
