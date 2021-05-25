function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let swap;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = swap;
      }
    }
    console.log(`${i + 1} 번째 : ${arr}`);
  }
  return arr;
}

let arr = [5, 4, 3, 2, 1];

console.log(bubbleSort(arr));

// 최고 속도 O(n) => 원하는 값으로 정렬이 되어 있다면, 정렬 할 필요가 없기에 O(n)
// 최저 속도 O(n^2) => 모든 원소의 자리를 변경 및 확인 해주는 작업이 필요하다.
