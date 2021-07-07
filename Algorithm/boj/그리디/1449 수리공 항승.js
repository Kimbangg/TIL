function solution() {
  let fix = 0;
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    if (fix < pipes[i]) {
      cnt += 1;
      fix = pipes[i] + l - 1;
    }
  }

  console.log(cnt);
}

const [n, l] = [4, 2];
const pipes = [1, 2, 100, 101];
solution();
