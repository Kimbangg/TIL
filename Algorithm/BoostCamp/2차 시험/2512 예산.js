function solution() {
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

    if (tmp <= M) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
}

const budget = [110, 120, 150, 140];
solution();
