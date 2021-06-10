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

function deleteDuplicate(arr) {
  arr = arr.filter((item, index) => arr.indexOf(item) === index);

  return arr;
}

function solve(arr) {
  let setArr = deleteDuplicate(arr);

  const map = {};
  const answer = [];

  if (arr.length === setArr.length) {
    return -1;
  } else {
    for (let i = 0; i < arr.length; i++) {
      map[arr[i]] = (map[arr[i]] || 0) + 1;
    }

    for (const key in map) {
      if (map[key] > 1) {
        answer.push(map[key]);
      }
    }
  }

  return answer.length === 0 ? -1 : answer;
}

let arr = [1, 2, 3, 3, 3, 3, 4, 4];
console.log(solve(arr));
