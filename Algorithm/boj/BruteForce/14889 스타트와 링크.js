function dfs(index) {
  if (index === half) {
    let startSum = 0;
    let linkSum = 0;

    for (let i = 1; i <= N; i++) {
      if (start.indexOf(i) === -1) {
        link.push(i);
      }
    }

    for (let j = 0; j < half - 1; j++) {
      for (let k = j + 1; k < half; k++) {
        startSum +=
          point[start[j] - 1][start[k] - 1] + point[start[k] - 1][start[j] - 1];
        linkSum +=
          point[link[j] - 1][link[k] - 1] + point[link[k] - 1][link[j] - 1];
      }
    }

    let diff = Math.abs(linkSum - startSum);

    if (min > diff) {
      min = diff;
    }

    link = [];
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i] === 1) continue;

    visited[i] = 1;
    start.push(i + 1);
    dfs(index + 1);

    start.pop();
    visited[i] = 0;
  }
}

const N = 4;

const point = [
  [0, 1, 2, 3],
  [4, 0, 5, 6],
  [7, 1, 0, 2],
  [3, 4, 5, 0],
];

const start = [];
let link = [];
const half = Math.floor(N / 2);

const visited = Array(N).fill(0);

let min = Infinity;

dfs(0);
console.log(min);
