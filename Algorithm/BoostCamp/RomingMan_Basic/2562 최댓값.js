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
  target = quickSort(target);

  console.log(target[target.length - 1]);
  console.log(target[0]);
}

let target = [29, 38, 12, 57, 74, 40, 85, 61];
solution();

// 순서가 필요 없을 떄, 찾으라고 하면 해시를 하는게 좋음.
