function solve() {
  budget.sort((a, b) => a - b);

  let start = budget[0];
  let end = budget[budget.length - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let tmp = 0;

    for (let i = 0; i < budget.length; i++) {
      if (budget[i] >= mid) {
        tmp += mid;
      } else {
        tmp += budget[i];
      }
    }

    if (tmp <= sum) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  console.log(end);
}

const n = 4;
const budget = [120, 110, 140, 150];
const sum = 485;
console.log(solve());
