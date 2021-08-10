const products = [
  { name: "반팔티", price: 15000 },
  { name: "긴팔티", price: 20000 },
  { name: "핸드폰", price: 35000 },
  { name: "케이스", price: 10000 },
];

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const map = curry((f, iter) => {
  const res = [];

  for (const ele of iter) {
    res.push(f(ele));
  }

  return res;
});

const filter = curry((f, iter) => {
  const res = [];

  for (const ele of iter) {
    if (f(ele)) res.push(ele);
  }

  return res;
});

const reduce = curry((f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }

  for (const a of iter) {
    acc = f(acc, a);
  }

  return acc;
});

const add = (a, b) => a + b;
const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const mult = curry((a, b) => a * b);
console.log(mult(3)(2));

const mult3 = mult(3);
console.log(mult3(10));

console.log(
  go(
    products,
    (products) => filter((p) => p.price < 20000, products),
    (products) => map((p) => p.price, products),
    (prices) => reduce(add, prices)
  )
);

// 중복 제거

const total_price = pipe(
  map((p) => p.price),
  reduce(add)
);

const base_total_price = (predi) =>
  pipe(
    filter((p) => p.price >= 20000),
    total_price
  );

console.log(go(products, base_total_price()));

console.log(go(products, base_total_price()));
