// 투포인터
function twoPointer() {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let sum = nums[left] + nums[right];

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      console.log(left, right);
      break;
    }
  }
}

// 이전 값을 저장.
function solution() {
  const prev = [];

  for (let i = 0; i < nums.length; i++) {
    const tmp = target - nums[i];

    if (tmp in prev) {
      return [prev[tmp], i];
    }

    prev[nums[i]] = i;
  }
}

let nums = [3, 2, 3];
let target = 6;
console.log(solution());
console.log(twoPointer());
