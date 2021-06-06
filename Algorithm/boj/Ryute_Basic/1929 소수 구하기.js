function isPrime(n) {
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
  const primeArr = [];

  for (let i = N; i <= M; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }

  return primeArr;
}

let [N, M] = [3, 16];
console.log(solution(N, M));
