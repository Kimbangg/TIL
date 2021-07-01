function solution() {
  let count = 0;
  const visited = Array(100001).fill(false);
  const queue = [[N, count]];

  while (queue.length) {
    const [start, count] = queue.shift();

    if (visited[start]) {
      continue;
    }

    visited[start] = true;

    if (start === K) {
      return count;
    }

    if (start * 2 <= 100000) {
      queue.push([start * 2, count + 1]);
    }

    if (start + 1 <= 100000) {
      queue.push([start + 1, count + 1]);
    }

    if (start - 1 >= 0) {
      queue.push([start - 1, count + 1]);
    }
  }
}

let N = 5;
let K = 17;

console.log(solution(N, K));
