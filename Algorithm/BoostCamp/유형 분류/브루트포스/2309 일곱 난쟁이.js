function solve() {
  talls.sort((a, b) => a - b);
  const total = talls.reduce((acc, value) => acc + value);
  const over = total - 100;

  let left = 0;
  let right = talls.length - 1;

  while (left < right) {
    const sum = talls[left] + talls[right];

    if (sum === over) {
      talls.splice(left, 1);
      talls.splice(right, 1);
      console.log(talls);
      return;
    } else if (sum < over) {
      left += 1;
    } else {
      right -= 1;
    }
  }
}

const talls = [20, 7, 23, 19, 10, 15, 25, 8, 13];
solve();
