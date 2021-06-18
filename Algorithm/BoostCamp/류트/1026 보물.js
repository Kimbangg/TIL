function descend(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  descend(array, left, partition - 1);
  descend(array, partition, right);

  function divide(array, left, right, pivot) {
    while (left <= right) {
      while (array[left] > pivot) {
        left++;
      }
      while (array[right] < pivot) {
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

function ascend(array, left = 0, right = array.length - 1) {
  if (left >= right) {
    return;
  }
  const mid = Math.floor((left + right) / 2);
  const pivot = array[mid];
  const partition = divide(array, left, right, pivot);

  ascend(array, left, partition - 1);
  ascend(array, partition, right);

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

function solution(nums1, nums2) {
  let answer = 0;
  nums1 = ascend(nums1);
  nums2 = descend(nums2);

  for (let i = 0; i < nums1.length; i++) {
    answer += nums1[i] * nums2[i];
  }

  console.log(answer);
}

let nums1 = [1, 1, 1, 6, 0];
let nums2 = [2, 7, 8, 3, 1];
solution(nums1, nums2);
