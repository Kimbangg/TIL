function solution(nums) {
  const answer = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let left = i + 1,
      right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum > 0) {
        right -= 1;
      } else if (sum < 0) {
        left += 1;
      } else {
        answer.push([nums[i], nums[left], nums[right]]);

        while (nums[left] === nums[left + 1]) {
          left++;
        }

        while (nums[right] === nums[right - 1]) {
          right--;
        }

        left += 1;
        right -= 1;
      }
    }
  }
  return answer;
}

let nums = [-1, 0, 1, 2, -1, 4];
console.log(solution(nums));

// [-1, -1, 0, 1, 2, 4]
// -1 -1  2
