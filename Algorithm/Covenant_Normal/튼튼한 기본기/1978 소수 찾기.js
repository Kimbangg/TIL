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

function solution(nums) {
  let answer = [];

  answer = nums.filter((each) => isPrimeNumber(each));

  return answer.length;
}

const nums = [1, 3, 5, 7];
console.log(solution(nums));
