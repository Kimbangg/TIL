function readInputLines() {
  return require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
}

function splitAndParseInt(string) {
  return string.split(" ").map((value) => parseInt(value));
}

function setConnection(graph, start, end) {
  if (start in graph) {
    graph[start].push(end);
  } else {
    graph[start] = [end];
  }
}

function dfs(graph, start, visited) {
  const result = [];
  const stack = [start];
  while (stack.length !== 0) {
    const node = stack.pop();
    if (visited[node]) {
      continue;
    }
    result.push(node);
    visited[node] = true;
    if (!(node in graph)) {
      continue;
    }
    const connected = graph[node].sort((a, b) => b - a);
    for (const v of connected) {
      stack.push(v);
    }
  }
  return result;
}

function bfs(graph, start, visited) {
  const result = [];
  const queue = [start];
  while (queue.length !== 0) {
    const node = queue.shift();
    if (visited[node]) {
      continue;
    }
    result.push(node);
    visited[node] = true;
    if (!(node in graph)) {
      continue;
    }
    const connected = graph[node].sort((a, b) => a - b);
    for (const v of connected) {
      queue.push(v);
    }
  }
  return result;
}

const lines = readInputLines();
const [n, m, v] = splitAndParseInt(lines[0]);

const graph = {};
for (let i = 1; i <= m; ++i) {
  const [v1, v2] = splitAndParseInt(lines[i]);
  setConnection(graph, v1, v2);
  setConnection(graph, v2, v1);
}
const visited = Array(n + 1);
console.log(dfs(graph, v, visited.fill(false)).join(" "));
console.log(bfs(graph, v, visited.fill(false)).join(" "));
