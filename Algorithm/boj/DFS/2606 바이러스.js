const fs = require("fs");
const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(inputs[0]);
const T = Number(inputs[1]);
const network = inputs.slice(2);
const networkMap = Array.from(new Array(N + 1), () => new Array(N + 1).fill(0));
const visited = new Array(N + 1).fill(false);

network.forEach((net) => {
  const nextNet = net.split(" ").map(Number);
  networkMap[nextNet[0]][nextNet[1]] = 1;
  networkMap[nextNet[1]][nextNet[0]] = 1;
});

function DFS(start) {
  visited[start] = true;
  for (let i = 1; i <= N; i++) {
    if (networkMap[start][i] === 1 && !visited[i]) {
      DFS(i);
    }
  }
}

function BFS(start) {
  let queue = [start];
  while (queue.length !== 0) {
    const nextV = queue.shift();
    for (let i = 1; i <= N; i++) {
      if (networkMap[nextV][i] === 1 && !visited[i]) {
        visited[i] = true;
        queue.push(i);
      }
    }
  }
}

BFS(1);
console.log(visited.filter((com) => com).length - 1);
