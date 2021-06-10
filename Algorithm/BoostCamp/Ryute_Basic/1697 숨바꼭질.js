function solution(N, K) {
  const q = [];
  queue.push(N);

  while (q.length) {
    let node = q.shift();
    if (node === K) return visited[K];
    for (let i of [node - 1, node + 1, node * 2]) {
      if (i >= 0 && i <= 10001 && visited[i] === 0) {
        visited[i] += visited[node] + 1;
        q.push(i);
      }
    }
  }
}

let [N, K] = [5, 17];
let visited = Array(10001).fill(0);
solution(N, K);
