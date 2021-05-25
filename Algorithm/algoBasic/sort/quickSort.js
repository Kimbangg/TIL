const swap = function (arr, front, back) {
  const tmp = arr[front];
  arr[front] = arr[back];
  arr[back] = tmp;
};

const lomutoPartition = function (arr, start, end) {
  const pivotValue = arr[end];
  let pivotIndex = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, pivotIndex);
      pivotIndex += 1;
    }
  }
  swap(arr, pivotIndex, end);
  return pivotIndex;
};

const quickSortWithLomuto = function (arr, start = 0, end = arr.length - 1) {
  if (start >= end) return;

  let pivotIndex = lomutoPartition(array, start, end);
};

const arr = [4, -1, 0, -8, 0, 8, 91, 2, 3, 4, 98, 911, 21];
const result = quickSortWithLomuto(arr);
console.log(result);
