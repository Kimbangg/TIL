function solve() {
  pos.sort((a, b) => a - b);
  const dist = [];

  for (let i = 1; i < n; i++) {
    dist.push(pos[i] - pos[i - 1]);
  }

  dist.sort((a, b) => b - a);

  for (let i = 0; i < k - 1; i++) {
    dist.shift();
  }

  const answer = dist.reduce((acc, value) => acc + value);

  return answer;
}

const [n, k] = [6, 2];
const pos = [1, 6, 9, 3, 6, 7];
console.log(solve());
