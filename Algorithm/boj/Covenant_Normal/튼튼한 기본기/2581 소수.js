function isPrimeNumber(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function solution(N, M) {
  let total = 0;
  let min = 0;
  const primeArr = [];

  for (let i = N; i <= M; i++) {
    if (isPrimeNumber(i)) {
      primeArr.push(i);
    }
  }

  total = primeArr.reduce((acc, value) => acc + value);
  min = Math.min(...primeArr);

  console.log(total);
  console.log(min);
}

let N = 60;
let M = 100;

solution(N, M);
