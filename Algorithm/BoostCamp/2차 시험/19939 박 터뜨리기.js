function solution() {
  const [n, k] = [5, 3];

  const numberOfCase = (k * (k + 1)) / 2;

  if (numberOfCase > n) {
    return -1;
  } else if ((n - numberOfCase) % k === 0) {
    return k - 1;
  } else {
    return k;
  }
}

console.log(solution());
