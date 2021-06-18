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
    }
    return left;
  }
  return array;
}

function getPermutation(cnt) {
  if (cnt === 4) {
  }

  for (let i = 0; i < c; i++) {
    if (visited[i]) continue;

    visited[i] = 1;
    output.push(chars[i]);
    getPermutation(cnt + 1);
    output.pop();
    visited[i] = 0;
  }
}

const [l, c] = [4, 6];
let chars = ["a", "t", "c", "i", "s", "w"];
const output = [];
const permu_arr = [];
const visited = Array(c).fill(0);
chars = quickSort(chars);

getPermutation(0);
