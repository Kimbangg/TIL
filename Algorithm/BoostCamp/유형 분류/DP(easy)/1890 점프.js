function solve() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (i === N - 1 && j === N - 1) {
        count += 1;
        break;
      }

      let cur = map[i][j];

      if (i + cur < N) {
        dp[i + cur][j] += dp[i][j];
      }

      if (j + cur < N) {
        dp[i][j + cur] += dp[i][j];
      }
    }
  }
}

let count = 0;
const N = 4;

const map = [
  [2, 3, 3, 1],
  [1, 2, 1, 3],
  [1, 2, 3, 1],
  [3, 1, 1, 0],
];

const dp = [
  [1, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

solve();
console.log(dp[N - 1][N - 1]);

// function bfs(x, y) {
//   const queue = [x, y];

//   while (queue.length) {
//     visited[x][y] = 1;

//     x = queue.shift();
//     y = queue.shift();

//     nx = x + map[x][y];
//     ny = y + map[x][y];

//     if (x === n - 1 && y === n - 1) {
//       count += 1;
//       continue;
//     }

//     if (nx < n) {
//       queue.push(nx, y);
//     }

//     if (ny < n) {
//       queue.push(x, ny);
//     }
//   }
// }
