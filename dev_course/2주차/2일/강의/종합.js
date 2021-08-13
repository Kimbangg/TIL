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

const filter = (f, iter) => {
  const res = [];

  for (const ele of iter) {
    if (f(ele)) res.push(ele);
  }

  return res;
};

const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

const reduce = (f, acc, iter) => {
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  } else {
    iter = iter[Symbol.iterator]();
  }

  return go1(acc, function recur(acc) {
    let cur;

    while (!(cur = iter.next()).done) {
      const a = cur.value;
      acc = f(acc, a);

      if (acc instanceof Promise) return acc.then(recur);
    }

    return acc;
  })();
};

const add = (a, b) => a + b;

// console.log(
//   reduce(
//     add,
//     map(
//       (p) => p.price,
//       filter((p) => p.price < 20000, products)
//     )
//   )
// );

// console.log(
//   reduce(
//     add,
//     filter(
//       (n) => n < 20000,
//       map((p) => p.price, products)
//     )
//   )
// );

// 3. 코드를 값으로 다루어 표현력 높이기

// go

const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

const curry =
  (f) =>
  (a, ..._) =>
    _.length ? f(a, ..._) : (..._) => f(a, ..._);

const mult = curry((a, b) => a * b);
console.log(mult(3)(2));

const mult3 = mult(3);
console.log(mult3(10));

console.log(
  go(
    add(0, 1),
    (a) => a + 1,
    (a) => a + 10,
    (a) => a + 100
  )
);

console.log(
  go(
    products,
    (products) => filter((p) => p.price < 20000, products),
    (products) => map((p) => p.price, products),
    (prices) => reduce(add, prices)
  )
);

const f = pipe(
  (a, b) => a + b,
  (a) => a + 10,
  (a) => a + 100
);

console.log(f(0, 1));
