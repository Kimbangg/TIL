function DFS(x, y) {
  if (x <= -1 || x >= N || y <= -1 || y >= N) {
    return false;
  }

  if (iced[x][y] === 0) {
    iced[x][y] = 1;

    DFS(x - 1, y);
    DFS(x, y - 1);
    DFS(x + 1, y);
    DFS(x, y + 1);
    return true;
  }

  return false;
}

function solution() {
  let answer = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < K; j++) {
      if (DFS(i, j) === true) {
        answer += 1;
      }
    }
  }
  return answer;
}

let [N, K] = [3, 3];

const iced = [
  [0, 0, 1],
  [0, 1, 0],
  [1, 0, 1],
];

console.log(solution());
