/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// 배열 내부에서 특정한 값을 찾아 내려고 하는 경우는 투포인터로 해결이 가능하다.
// 간혹, 지금처럼 3개 이상의 포인터를 요구할 때가 있는데 이는 루프가 포인터가 되어 준다고 생각을 하면된다.
// 다만, 예외처리에 신경을 써줘야할 것 같다.
var threeSum = function (nums) {
  const ans = []
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum > 0) {
        right -= 1
      } else if (sum < 0) {
        left += 1
      } else {
        ans.push([nums[i], nums[left], nums[right]])

        while (nums[left] === nums[left + 1]) {
          left += 1
        }

        while (nums[right] === nums[right - 1]) {
          right -= 1
        }

        left += 1
        right -= 1
      }
    }
  }

  return ans
}
