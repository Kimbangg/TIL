const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 10];

// concat은 실제 배열에 영향을 주지 않는다.
arr1.concat(arr2);
console.log(arr1);

// slice (시작점, 끝) => 시작점 ~ 끝 전 인덱스
// 원본을 유지
console.log(arr1.slice(2, 4));
console.log(arr1);

// splice [ 시작점에서 몇개를 삭제 할건지? ]
// 실제 배열에 영향을 미친다.
arr1.splice(2, 2);

// for of [ 직관적 ]
for (const item of arr1) {
  console.log(item);
}

// 배열과 객체는 타입이 동일하다.
console.log(typeof arr1);
arr1["key"] = "value";
console.log(arr1); // 올바른 사용 방법은 X

// 길이에는 영향을 주지 않는다.
console.log(arr1.length);
