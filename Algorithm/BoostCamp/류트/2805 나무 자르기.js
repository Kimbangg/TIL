function solve(trees, N, M) {
  trees.sort((a, b) => a - b);
  const target = M;

  let start = trees[0];
  let end = trees[N - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let log = 0;
    for (let i = 0; i < trees.length; i++) {
      if (mid > trees[i]) {
        continue;
      }
      log += trees[i] - mid;
    }

    if (log >= target) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return end;
}

let [N, M] = [4, 7];
const trees = [20, 15, 10, 17];
console.log(solve(trees, N, M));
