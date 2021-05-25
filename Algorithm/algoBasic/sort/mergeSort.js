function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  const mid = Math.floor(array.length / 2);

  const left = array.slice(0, mid);
  console.log("left", left);
  const right = array.slice(mid);
  console.log("right", right);

  return merge(mergeSort(left), mergeSort(right));

  function merge(left, right) {
    const resultArray = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex));
  }
}
console.log(mergeSort([5, 4, 3, 2, 1]));
