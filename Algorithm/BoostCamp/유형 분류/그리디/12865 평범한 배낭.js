const [n, k] = [4, 7];

const items = [
  [3, 6],
  [4, 8],
  [5, 12],
  [6, 13],
];

console.log(solve());

// 반드시 이전의 값을 빼내지는 않아도 된다는 반례가 존재한다.
// 스택으로 진행한 경우의 반례는 3,3,5,6 [4,8]로 가정

// function solve() {
//   let answer = -Infinity;
//   const backpack = [];

//   for (let i = 0; i < n; i++) {
//     let tmp = 0;
//     while (
//       backpack.length &&
//       backpack[backpack.length - 1][0] + items[i][0] > k
//     ) {
//       backpack.pop();
//     }
//     backpack.push(items[i]);
//     backpack.forEach((each) => (tmp += each[1]));

//     answer < tmp ? (answer = tmp) : answer;
//   }

//   return answer;
// }
