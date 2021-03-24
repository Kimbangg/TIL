const combination = function (idx) {
  if (idx === N / 2) {
    if (teamStart[0] > Math.ceil(N / 4)) {
      return;
    }
    let teamLink = [];
    for (let j = 0; j < N; j++) {
      if (check[j] === 0) {
        teamLink.push(j);
      }
    }

    let teamTempStart = 0;
    let teamTempLink = 0;
    for (let k = 0; k < teamStart.length; k++) {
      for (let l = k + 1; l < teamStart.length; l++) {
        startY = teamStart[k];
        startX = teamStart[l];
        linkY = teamLink[k];
        linkX = teamLink[l];
        teamTempStart += arr[startY][startX] + arr[startX][startY];
        teamTempLink += arr[linkY][linkX] + arr[linkX][linkY];
      }
    }
    minDifference = Math.min(
      minDifference,
      Math.abs(teamTempStart - teamTempLink)
    );
  } else {
    for (let i = 0; i < N; i++) {
      if (teamStart.length === 0) {
        if (check[i] === 0) {
          check[i] = 1;
          teamStart.push(i);
          combination(idx + 1);
          check[i] = 0;
          teamStart.pop();
        }
      } else {
        const lastNum = teamStart[teamStart.length - 1];
        if (check[i] === 0 && i > lastNum) {
          check[i] = 1;
          teamStart.push(i);
          combination(idx + 1);
          check[i] = 0;
          teamStart.pop();
        }
      }
    }
  }
};

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = parseInt(input[0]);
let arr = new Array(N).fill(0).map((v) => {
  return new Array(N).fill(0);
});
for (let i = 0; i < N; i++) {
  const lst = input[i + 1].split(" ").map((v) => Number(v));
  for (let j = 0; j < N; j++) {
    arr[i][j] = lst[j];
  }
}

let minDifference = Infinity;
let teamStart = [];
let check = new Array(N).fill(0);
combination(0);
console.log(minDifference);

// https://www.acmicpc.net/source/27290515
