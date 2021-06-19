function checkValidRange(left, right) {
  if (
    1 <= nums[left] <= n &&
    1 <= nums[right] <= n &&
    nums[left] + nums[right] === max
  ) {
    return true;
  }
  return false;
}

function solve() {
  let count = 0;
  let left = 0;
  let right = nums.length - 1;
  console.log(nums);

  while (left < right) {
    if (checkValidRange(left, right)) {
      console.log(nums[left]);
      console.log(nums[right]);
      console.log();
      count += 1;
    }
    left++;
    right--;
  }
  console.log(count);
}

const n = 9;
const max = 13;
const nums = [5, 12, 7, 10, 9, 1, 2, 3, 11];

nums.sort((a, b) => a - b);

solve();
