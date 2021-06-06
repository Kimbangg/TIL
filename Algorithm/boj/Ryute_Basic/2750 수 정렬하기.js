function quickSort(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }

  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(left, pivot, right);

  quickSort(array, left, partition - 1);
  quickSort(array, partition, right);

  function divide(left, pivot, right) {
    while (left <= right) {
      while (array[left] < pivot) {
        left += 1;
      }

      while (array[right] > pivot) {
        right -= 1;
      }

      if (left <= right) {
        let swap = array[left];
        array[left] = array[right];
        array[right] = swap;
        left++;
        right--;
      }
      console.log(array);
    }
    return left;
  }
}

let nums = [5, 5, 2, 3, 4];
console.log(quickSort(nums));
