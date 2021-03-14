function d(n) {
  let tmp = n;
  let result = tmp;

  while (tmp > 0) {
    result += tmp % 10;
    tmp = parseInt(tmp / 10);
  }
  return result;
}

const N = 10000;
const selfNumberChecker = new Array(N);
selfNumberChecker.fill(false);

for (let i = 1; i < N; i++) {
  selfNumberChecker[d(i)] = true;
  if (!selfNumberChecker[i]) {
    console.log(i);
  }
}
