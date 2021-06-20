const find = (parent, x) => {
  if (parent[x] !== x) {
    parent[x] = find(parent, parent[x]);
  }
  return parent[x];
};

const union = (parent, a, b) => {
  a = find(parent, a);
  b = find(parent, b);

  return a > b ? (parent[a] = b) : (parent[b] = a);
};

function solve(n, costs) {
  const parent = Array.from({ length: n + 1 }, (v, i) => i);
  costs.sort((a, b) => a[2] - b[2]);

  let sum_cost = 0;

  costs.forEach((cost) => {
    if (find(parent, cost[0]) !== find(parent, cost[1])) {
      union(parent, cost[0], cost[1]);
      console.log(parent);
      sum_cost += cost[2];
    }
  });
  return sum_cost;
}

const [vertex, edge] = [3, 3];

const costs = [
  [1, 2, 1],
  [2, 3, 2],
  [1, 3, 3],
];

console.log(solve(3, costs));
