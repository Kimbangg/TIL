// // 끝났을 때 어떤 함수를 다시 실행한다는 컨텍스트만 남아있다.
// function add10(a, callback) {
//   setTimeout(() => callback(a + 10), 100);
// }

// // 비동기적인 상황을 다루는 것이 코드로만 표현 되어있다.
// var a = add10(5, (res) => {
//   add10(res, (res) => {
//     add10(res, (res) => {
//       console.log(res);
//     });
//   });
// });

// console.log(a);
// // 어떤 상황이 일어 났는지 알 수 없게, undefined만 리턴된다.
// // 즉, 이후에 어떠한 일도 추가적으로 수행할 수 없다.
// console.log(add10(5, (_) => _));

// // 비동기 상황에 대한 값(Promise)을 만들어서 리턴하고 있다는 점이 눈 여겨 봐야할 차이점이다.
// function add20(a) {
//   return new Promise((resolve) => setTimeout(() => resolve(a + 20), 100));
// }

// var b = add20(5).then(add20).then(add20).then(add20);
// var c = add20(5, (_) => _);
// var d = c.then((a) => a + 10);

// 비동기 상황에 일어난 일급 값이 아닌, 일반 값이 들어와야 함수에 적용할 수 있다.

// 비동기 상황에 일어난 일급 값이 아닌, 일반 값이 들어와야 함수에 적용할 수 있다.

// const delay_100 = (a) =>
//   new Promise((resolve) => setTimeout(() => resolve(a)), 100);

// const go1 = (a, f) => (a instanceof Promise ? a.then(f) : f(a));

// const add5 = (a) => a + 5;

// var r = go1(10, add5);
// console.log(r);

// // output : [object Promise] 5
// var r2 = go1(delay_100(10), add5);

// r2.then(console.log);
const g = (a) => a + 1;
const f = (a) => Math.pow(a, 2);

[1]
  .map(g)
  .map(f)
  .forEach((r) => console.log(r));

[]
  .map(g)
  .map(f)
  .forEach((r) => console.log(r));
