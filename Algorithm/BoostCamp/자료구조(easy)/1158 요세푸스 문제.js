function solve() {
  let jump = 0;
  const answer = [];

  while (arr.length) {
    jump += k - 1;

    if (jump >= arr.length) jump %= arr.length;

    answer.push(arr[jump]);
    arr.splice(jump, 1);
  }
}

const [N, K] = [7, 3];
const arr = Array.from({ length: N }, (v, i) => i + 1);
solve();
