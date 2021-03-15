function readInputLines() {
  return require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
}

function splitAndParseInt(string) {
  return string.split(" ").map((value) => parseInt(value));
}

function initialConnection(matrix, n, m) {
  // 인접 행렬을 위한 초기화 작업을 수행ㅂ
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      matrix[i][j] = 0;
    }
  }
}

function setConnection(matrix, n, m) {
  matrix[n][m] = 1;
  matrix[m][n] = 1;
}

function dfs(v) {
  console.log(v);
  visit
}

function bfs(v) {}

let matrix = [];
const lines = readInputLines();
// n,m,v 입력 받기
const [n, m, v] = splitAndParseInt(lines[0]);
// 0으로 초기화
initialConnection(matrix, start, end);
// 인접행렬 방문 처리
for (let i = 0; i < m; i++) {
  let [x, y] = splitAndParseInt(lines[i]);
  setConnection(x, y);
}

dfs(v);
