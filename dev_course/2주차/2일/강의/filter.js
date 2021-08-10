const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰", price: 35000 },
  { name: "케이스", price: 10000 },
];

// 명명형 코드

const under20000 = [];

for (const p of products) {
  if (p.price < 20000) under20000.push(p);
}
// console.log(...under20000);

// filter로 refactoring

const filter = (f, iter) => {
  const res = [];

  for (const ele of iter) {
    if (f(ele)) res.push(ele);
  }

  return res;
};

let iter = products[Symbol.iterator]();
console.log(iter);

// console.log(filter((p) => p.price < 20000, products));
// console.log(filter((n) => n % 2, [1, 2, 3, 4]));
// console.log(
//   filter(
//     (n) => n % 2,
//     (function* () {
//       yield 1;
//       yield 2;
//       yield 3;
//       yield 4;
//       yield 5;
//     })()
//   )
// );
