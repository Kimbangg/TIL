function DFS(index, visited, computers) {
  visited[index] = true;

  for (let i = 0; i < computers.length; i++) {
    if (computers[index][i] === 1 && !visited[i]) {
      DFS(i, visited, computers);
    }
  }
}

function solution(n, computers) {
  let answer = 0;
  const visited = [];

  for (const computer in computers) {
    visited.push(false);
  }

  for (let i = 0; i < computers.length; i++) {
    if (!visited[i]) {
      DFS(i, visited, computers);
      answer++;
    }
  }

  return answer;
}

let n = 3;
let computers = [
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
];

console.log(solution(n, computers));
