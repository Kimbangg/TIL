/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // 높이가 매우 높은데, 넓이가 1인 경우가 존재할 수도 있기 때문에
  // 모든 케이스를 반드시 검사 해야한다.
  let left = 0
  let right = height.length - 1

  let current = 0
  let max = 0

  while (left < right) {
    current = (right - left) * Math.min(height[left], height[right])
    max = Math.max(max, current)

    if (height[left] < height[right]) {
      left += 1
    } else {
      right -= 1
    }
  }

  return max
}
