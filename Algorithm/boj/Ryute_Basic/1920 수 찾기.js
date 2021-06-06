function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] < pivot) {
        left++;
      }
      while (array[right] > pivot) {
        right--;
      }
      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
    }
    return left;
  }
  return array;
}

function solution() {
  const map = {};

  target = quickSort(target);

  for (let i = 0; i < target.length; i++) {
    map[target[i]] = (map[target[i]] || 0) + 1;
  }

  for (let j = 0; j < nums.length; j++) {
    if (map[nums[j]]) {
      console.log(1);
    } else {
      console.log(0);
    }
  }
}

let target = [4, 1, 5, 2, 3];
let nums = [1, 3, 7, 9, 5];
solution();

// 순서가 필요 없을 떄, 찾으라고 하면 해시를 하는게 좋음.
