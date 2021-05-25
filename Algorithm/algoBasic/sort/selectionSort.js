function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let swap = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = swap;
    }
    console.log(`${i} : ${arr}`);
  }
  return arr;
}

let arr = [5, 4, 3, 2, 1];
console.log(selectionSort(arr));
