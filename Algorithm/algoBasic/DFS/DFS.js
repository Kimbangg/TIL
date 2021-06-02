function DFS(graph, v, visited) {
  visited[v] = true;
  console.log(v);

  for (const i in graph[v]) {
    if (visited[graph[v][i]] === false) {
      DFS(graph, graph[v][i], visited);
    }
  }
}

const graph = [
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

const visited = Array(graph.length + 1).fill(false);

DFS(graph, 1, visited);
