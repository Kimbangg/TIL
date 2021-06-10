function solve() {
  for (let i = 0; i < N; i++) {
    const [time, pay] = tp[i];
    const end = i + time;

    if (end > N) {
      continue;
    }

    dp[end] = Math.max(dp[i] + pay, dp[end]);
  }

  console.log(dp[N - 1]);
}

const N = 7;

let tp = [
  [3, 10],
  [5, 20],
  [1, 10],
  [1, 20],
  [2, 15],
  [4, 40],
  [2, 200],
];

const dp = Array(N).fill(0);

solve();
