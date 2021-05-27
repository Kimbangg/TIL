function solution(height) {
  let left = 0;
  let right = height.length - 1;
  let maxLeft = 0;
  let maxRight = 0;
  let answer = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      if (height[left] >= maxLeft) {
        maxLeft = height[left];
      } else {
        answer += maxLeft - height[left];
      }

      left++;
    } else {
      if (height[right] >= maxRight) {
        maxRight = height[right];
      } else {
        answer += maxRight - height[right];
      }

      right--;
    }
  }
  return answer;
}

let height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(solution(height));
