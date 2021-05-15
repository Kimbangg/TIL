function solution(height) {
  let max = 0;
  let tmpIndex = 0;
  let ttmpIndex = 0;

  for (let i = 0; i < height.length - 1; i++) {
    let left = i;
    let right = height.length - 1;
    let container = (right - left) * Math.min(height[right], height[left]);

    if (max < container) {
      max = container;
      tmpIndex = i;
    }
  }

  for (let j = height.length - 1; j > tmpIndex; j--) {
    let left = tmpIndex;
    let right = j;
    let container = (right - left) * Math.min(height[right], height[left]);

    if (max <= container) {
      max = container;
      ttmpIndex = j;
    }
  }

  return max;
}

let height = [2, 3, 4, 5, 18, 17, 6];
