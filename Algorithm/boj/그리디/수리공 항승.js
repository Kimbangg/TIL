function solve() {
  let fix = 0;
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    if (fix < pipe[i]) {
      cnt += 1;
      fix = pipe[i] + L - 1;
    }
  }
  console.log(cnt);
}

const [N, L] = [4, 2];
let pipe = [1, 2, 100, 101];
solve();
