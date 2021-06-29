function solution(othello) {
  let [before, after] = othello;

  const wb_count = [];
  const map = {};
  let answer = -Infinity;

  before = before.split("");
  after = after.split("");

  for (let i = 0; i < before.length; i++) {
    if (before[i] !== after[i]) {
      wb_count.push(before[i]);
    }
  }

  for (let i = 0; i < wb_count.length; i++) {
    map[wb_count[i]] = (map[wb_count[i]] || 0) + 1;
  }

  for (const key in map) {
    if (map[key] > answer) {
      answer = map[key];
    }
  }

  console.log(answer);
}

const t = 3;

const othello = [
  ["WBBWW", "WBWBW"],
  ["BBBBBBB", "BWBWBWB"],
  ["WWBB", "BBWB"],
];

for (let i = 0; i < t; i++) {
  solution(othello[i]);
}

// function swapLocation(arr, i, j) {
//   let tmp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = tmp;

//   return arr;
// }

// // function solution(othello) {
// //   let count = 0;
// //   let [before, after] = othello;

// //   before = before.split("");
// //   after = after.split("");

// //   for (let i = 0; i < before.length; i++) {
// //     let swapFlag = false;
// //     if (before[i] !== after[i]) {
// //       for (let j = i + 1; j < before.length; j++) {
// //         if (before[j] !== after[j]) {
// //           swapLocation(before, i, j);
// //           swapLocation(after, i, j);
// //           swapFlag = true;
// //           count += 1;
// //           continue;
// //         }
// //       }
// //       if (swapFlag === false) {
// //         if (before[i] === "W") before[i] = "B";
// //         else before[i] = "W";
// //         count += 1;
// //       }

// //       if (before.join("") === after.join("")) {
// //         return console.log(count);
// //       }
// //     }
// //   }
// //   console.log(count);
// // }
