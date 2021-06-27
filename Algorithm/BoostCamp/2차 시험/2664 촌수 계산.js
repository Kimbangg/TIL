function makeConnection(n, relation) {
  const arr = Array.from(Array(n + 1), () => Array(n + 1).fill(0));

  for (let i = 0; i < relation.length; i++) {
    const [prev, next] = relation[i];

    arr[prev][next] = 1;
    arr[next][prev] = 1;
  }

  return arr;
}

function bfs(start, end, visited, connection, answer) {
  const queue = [start, 0];
  visited[start] = 1;

  while (queue.length) {
    start = queue.shift();
    let count = queue.shift();

    if (start === end) {
      answer = count;
      break;
    } else {
      for (let i = 1; i <= n; i++) {
        if (connection[start][i] === 1 && !visited[i]) {
          visited[i] = 1;
          queue.push(i, count + 1);
        }
      }
    }
  }
  return answer;
}

function solution(n, relation) {
  let answer = 0;
  const [a, b] = [7, 3];
  const connection = makeConnection(n, relation);
  const visited = Array(n + 1).fill(0);

  answer = bfs(a, b, visited, connection, answer);

  answer === 0 ? console.log(-1) : console.log(answer);
}

// const n = 9;
// const m = 7;
// const relation = [
//   [1, 2],
//   [1, 3],
//   [2, 7],
//   [2, 8],
//   [2, 9],
//   [4, 5],
//   [4, 6],
// ];

// solution(n, relation);
