function readInputLines() {
  return require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
}

function makeTeam() {
  for (let i = 0; i < N; i++) {
    const tmpInput = input[i + 1].split(" ").map((v) => Number(v));
    for (let j = 0; j < N; j++) {
      arr[i][j] = tmpInput[j];
    }
  }
}

const input = readInputLines();
const N = parseInt(input[0]);
let arr = [];
let teamA = 0,
  teamB = 0;

makeTeam();

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    teamA = arr[i][j] + arr[j][i];
  }
}
