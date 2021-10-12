/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  //[-2, -3, -2, -4]

  // 0으로 시작점을 두게 되면, 최초 값이 음수로 나왔을 때 0이 더 큰 값으로 배정이 될 가능성이 존재한다.
  let cur_min = nums[0]
  let cur_max = nums[0]
  let result = nums[0]

  for (let i = 1; i < nums.length; i++) {
    cur_min *= nums[i]
    cur_max *= nums[i]

    if (nums[i] < 0) {
      let tmp = cur_min
      cur_min = cur_max
      cur_max = tmp
    }

    cur_min = Math.min(cur_min, nums[i])
    cur_max = Math.max(cur_max, nums[i])

    result = Math.max(result, cur_max)
  }

  return result
}
