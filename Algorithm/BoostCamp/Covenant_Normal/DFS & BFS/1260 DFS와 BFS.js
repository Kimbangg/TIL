function DFS(V) {
  visited[v] = 1;

  for (let i = 0; i < lines.length; i++) {
    if (map[V][i] === 1 && !visited[V]) {
      DFS(V);
    }
  }
}

function BFS(V) {
  visited[V] = 1;

  const queue = [V];

  while (queue.length) {
    const next = queue.shift();

    for (let i = 1; i <= N; i++) {
      visited[i] = true;
      bfsOut += " " + i;
      queue.push(i);
    }
  }
}
