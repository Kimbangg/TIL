function solution() {
  let maxSoFar = nums[0];
  let minSoFar = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxSoFar *= nums[i];
    minSoFar *= nums[i];

    if (nums[i] < 0) {
      let tmp = maxSoFar;
      maxSoFar = minSoFar;
      minSoFar = tmp;
    }

    maxSoFar = Math.max(maxSoFar, nums[i]);
    minSoFar = Math.min(minSoFar, nums[i]);
    result = Math.max(result, maxSoFar);
  }
  return result;
}

let nums = [0, 2];

console.log(solution());
