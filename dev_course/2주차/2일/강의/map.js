const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰", price: 35000 },
  { name: "케이스", price: 10000 },
];

const map = (f, iter) => {
  const res = [];

  for (const ele of iter) {
    res.push(f(ele));
  }

  return res;
};

console.log(map((p) => p.name, products));

// 기존 코드
// const names = [];

// for (const p of products) {
//   names.push(p.name);
// }
