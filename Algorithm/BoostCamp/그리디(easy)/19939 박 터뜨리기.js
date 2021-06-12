function solve() {
  let min_sum = Math.floor((k * (k + 1)) / 2);

  if (min_sum > n) {
    return -1;
  }

  if ((n - min_sum) % k === 0) {
    return k - 1;
  } else {
    return k;
  }
}

let [n, k] = [6, 3];
console.log(solve());

// 20 5

// [2,3,4,5,6]
