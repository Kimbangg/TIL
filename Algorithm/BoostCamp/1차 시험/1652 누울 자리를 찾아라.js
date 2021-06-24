function solution() {
  let horizon_count = 0;
  let vertical_count = 0;

  for (let i = 0; i < n; i++) {
    let stack = [];
    for (let j = 0; j < n; j++) {
      if (location[i][j] === ".") {
        stack.push(1);
      } else {
        if (stack.length >= 2) {
          horizon_count += 1;
          break;
        }
        stack = [];
      }
    }
  }

  stack = [];

  for (let i = 0; i < n; i++) {
    let stack = [];
    for (let j = 0; j < n; j++) {
      if (stack.length >= 2) {
        vertical_count += 1;
        break;
      }

      if (location[j][i] === ".") {
        stack.push(1);
      } else {
        stack = [];
      }
    }
  }

  console.log(horizon_count);
  console.log(vertical_count);
}

const n = 5;
const location = ["....X", "..XX.", ".....", ".XX..", "X...."];
solution(location);
