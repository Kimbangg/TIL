function DFS(cnt, total) {
  if (total > sum) {
    return;
  }

  if (cnt === k) {
    if (0 < total && total <= sum) {
      stages[total] = 1;
    }
  } else {
    DFS(cnt + 1, total + weight[cnt]);
    DFS(cnt + 1, total - weight[cnt]);
    DFS(cnt + 1, total);
  }
}

let answer = 0;
const k = 3;
const weight = [1, 5, 7];
const sum = weight.reduce((acc, value) => acc + value);
const stages = Array(sum + 1).fill(0);

DFS(0, 0);

for (let i = 1; i <= sum; i++) {
  if (stages[i] === 0) answer += 1;
}

console.log(answer);
