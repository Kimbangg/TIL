function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let prev = i - 1;
    let tmp = 0;
    while (prev >= 0 && array[prev] > current) {
      array[prev + 1] = array[prev];
      array[prev] = current;
      current = array[prev];
      prev--;
    }
    console.log(`${i} : ${arr}`);
  }
  return array;
}

let arr = [5, 4, 3, 2, 1];
console.log(insertionSort(arr));
