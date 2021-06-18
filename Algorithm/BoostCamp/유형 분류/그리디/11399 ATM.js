function solve() {
  for (let i = 1; i < n; i++) {
    wait_copy[i] = wait_copy[i] + wait_copy[i - 1];
  }

  let sum = wait_copy.reduce((acc, value) => acc + value);
  console.log(sum);
}

const n = 5;
const wait_time = [3, 1, 4, 3, 2];
const wait_copy = wait_time.slice();
wait_copy.sort((a, b) => a - b);
solve();
