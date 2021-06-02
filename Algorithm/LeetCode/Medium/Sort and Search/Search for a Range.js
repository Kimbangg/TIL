function solution(nums, target) {
  let n = nums.length;

  const binarySearch = function (isLeft) {
    let left = 0;
    let right = n;

    while (left < right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] > target || (isLeft && nums[mid] == target)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return isLeft ? left : right - 1;
  };

  let leftBoundary = binarySearch(true);
  let rightBoundary = binarySearch(false);

  if (nums[leftBoundary] != target || nums[rightBoundary] != target) {
    return [-1, -1];
  } else {
    return [leftBoundary, rightBoundary];
  }
}

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;
console.log(solution(nums, target));
