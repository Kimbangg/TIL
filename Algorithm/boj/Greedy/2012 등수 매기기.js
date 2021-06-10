function solve() {
  let answer = 0;
  rank.sort((a, b) => a - b);
  const arr = Array.from({ length: rank.length }, (v, i) => i + 1);

  for (let i = 0; i < rank.length; i++) {
    answer += arr[i] - rank[i];
  }

  console.log(answer);
}

const n = 5;
const rank = [1, 5, 3, 1, 2];
solve();
