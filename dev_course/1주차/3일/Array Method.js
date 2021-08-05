const arr1 = [];
console.log(arr1);

const arr2 = Array(10).fill(0);
console.log(arr2);

// 로직을 사용해서, 1부터 100까지 채우는 방법
const arr3 = Array.from({ length: 100 }, (_, i) => i + 1);
console.log(arr3);

// n 만큼의 시간이 소요된다.
arr2.splice(3, 0, 120);
console.log(arr2);

arr2.splice(3, 1);
console.log(arr2);
