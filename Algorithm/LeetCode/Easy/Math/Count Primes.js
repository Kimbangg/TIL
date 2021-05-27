// 프로그래머스였으면, 이렇게 풀었을텐데 흠.
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

function solution(n) {
  let count = 0;

  if (n === 2) {
    return 0;
  }

  for (let i = 2; i < n; i++) {
    if (isPrimeNumber(i)) {
      count++;
    }
  }
  return count;
}

console.log(solution(2));
