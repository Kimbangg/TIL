// reduce 는 이터러블 값을 함축 하는 함수이다.

const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰", price: 35000 },
  { name: "케이스", price: 10000 },
];

// 명명형
const nums = [1, 2, 3, 4, 5];
let sum = 0;

for (const n of nums) {
  sum += n;
}

console.log(sum);

// reduce로 refactoring

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
};

const add = (a, b) => a + b;
console.log(reduce(add, 0, [1, 2, 3, 4, 5])); // 15
// console.log(add(add(add(0, 1), 2), 3 ));

console.log(reduce(add, 0, [1, 2, 3, 4, 5]));

// 만약 acc 인자를 안 넘겨 주면 아래와 같이 인식
console.log(reduce(add, [1, 2, 3, 4, 5]));

// ==== product example

console.log(
  reduce((total_price, product) => total_price + product.price, 0, products)
);
