function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function solution(nums) {
  let answer = 0;

  for (let i = 0; i < nums.length; i++) {
    if (isPrime(nums[i])) {
      answer += 1;
    }
  }

  return answer;
}

let nums = [1, 3, 5, 7];
console.log(solution(nums));
