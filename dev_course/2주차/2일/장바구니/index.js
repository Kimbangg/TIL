const products = [
  { name: "반팔티", price: 15000, quantitiy: 1, isSelected: true },
  { name: "긴팔티", price: 20000, quantitiy: 2, isSelected: false },
  { name: "핸드폰", price: 35000, quantitiy: 3, isSelected: true },
  { name: "케이스", price: 10000, quantitiy: 4, isSelected: false },
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

const go = (...args) => reduce((a, f) => f(a), args);
const pipe =
  (f, ...fs) =>
  (...as) =>
    go(f(...as), ...fs);

// 총 수량 [ go ]
// const total_quantitiy = (products) =>
//   go(
//     products,
//     map((p) => p.quantitiy),
//     reduce((a, b) => a + b)
//   );

const add = (a, b) => a + b;

const sum = curry((f, iter) => go(iter, map(f), reduce(add)));

console.log(sum((p) => p.quantitiy, products));
console.log(sum((p) => p.quantitiy * p.price, products));

// 총수량 pipe
const total_quantitiy = sum((p) => p.quantitiy);

// 총수량 pipe
const total_price = sum((p) => p.quantitiy * p.price);

document.querySelector("#cart").innerHTML = `
  <table>
    <tr>
      <th>상품 이름</th>
      <th>가격</th>
      <th>수량</th>
      <th>총 가격</th>
    </tr>

    ${go(
      products,
      sum(
        (p) => `
        <tr>
          <td><input type="checkbox" ${p.isSelected ? "checked" : ""}></td>
          <td>${p.name}</td>
          <td>${p.price}</td>
          <td><input tpye="number" value="${p.quantitiy}"></td>
          <td>${p.price * p.quantitiy}</td>
        </tr>
      `
      )
    )}

 

    <tr>
      <td colspan="2">합계</td>
      <td>${total_quantitiy(filter((p) => p.isSelected, products))}</td>
      <td>${total_price(filter((p) => p.isSelected, products))}</td>
    </tr>
  </table>
`;
