// array concat
let origin = [1, 2, 3, 4];
let result = [...origin].concat(2, 3);
console.log(result);

// forEach
result.forEach(function (v, i, o) {
  console.log(o);
});

// map function
let mapped = result.map(function (v) {
  return v * 2; // 원소를 돌면서, 값을 변경 시킨 후에 새로운 배열로 만들어서 반환한다.
});

console.log(mapped);
