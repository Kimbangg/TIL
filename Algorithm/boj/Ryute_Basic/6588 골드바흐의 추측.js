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
function solution(value) {
  let primeArr = [];
  let target = value;

  for (let i = 0; i < value; i++) {
    if (isPrime(i)) {
      primeArr.push(i);
    }
  }

  let left = 0;
  let right = primeArr.length - 1;

  while (left < right) {
    let sum = primeArr[left] + primeArr[right];

    if (sum === target) {
      console.log(target + " = " + primeArr[left] + " + " + primeArr[right]);
      break;
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
}

let nums = [8, 20, 42];
console.log(solution());

for (let i = 0; i < nums.length; i++) {
  solution(nums[i]);
}
