const map = (f, iter) => {
  const res = [];

  for (const ele of iter) {
    res.push(f(ele));
  }

  return res;
};

// 배열은 map 함수를 포함 하고 있지만,
console.log([1, 2, 3].map((a) => a + 1));

// querySelector는 포함 하고 있지 않고,
// iterable protocol 을 따르고 있다.

// 고로 이러한 경우는 에러가 발생하고
console.log(document.querySelectorAll("*").map((el) => el.nodeName));
// 우리가 만든 map은 iterable protocol을 따라주기에 출력이 가능
console.log(map((el) => el.nodeName, document.querySelectorAll("*")));

function* gen() {
  yield 2;
  yield 3;
  yield 4;
}

console.log(map((a) => a * a, gen()));

let m = new Map();
m.set("a", 10);
m.set("b", 20);
// let it = m[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
map(([k, a]) => [k, a * 2], m);
