function clickFirst() {
  let cnt = 1;
  before[0] = 1 - before[0];
  before[1] = 1 - before[1];

  for (let i = 1; i < n; i++) {
    if (before[i - 1] !== after[i - 1]) {
      cnt += 1;
      before[i - 1] = 1 - before[i - 1];
      before[i] = 1 - before[i];
      if (i !== n - 1) {
        before[i + 1] = 1 - before[i + 1];
      }
    }
  }

  if (before.join("") === after.join("")) {
    return cnt;
  } else {
    return -1;
  }
}

function clickNone(before) {
  let cnt = 0;

  for (let i = 1; i < n; i++) {
    if (before[i - 1] !== after[i - 1]) {
      cnt += 1;
      before[i - 1] = 1 - before[i - 1];
      before[i] = 1 - before[i];

      if (i !== n - 1) before[i + 1] = 1 - before[i + 1];
    }
  }
  if (before.join("") === after.join("")) {
    return cnt;
  } else {
    return -1;
  }
}

function solve() {
  let res1 = clickFirst(before);
  let res2 = clickNone(before);

  console.log(res1);
  console.log(res2);
}

const n = 3;
const before = [0, 0, 0];
const after = [0, 1, 0];
solve();

// [1,1,0] => [0,0,1] => [0,1,0];
// [0,0,0] = > [0,0,0] => [0,1,1] =>
