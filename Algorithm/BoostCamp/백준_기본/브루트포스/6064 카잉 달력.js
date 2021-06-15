function solve(m, n, x, y) {
  x = x - 1;
  y = y - 1;

  let answer = -1;

  for (let i = x; i < m * n + 1; i += m) {
    if (i % n === y) {
      answer = i + 1;
      break;
    }
  }
  return answer;
}

let [m, n, x, y] = [10, 12, 3, 9];
console.log(solve());

// function solve() {
//   let year = 1;

//   while (true) {
//     if ((year - x) % m === 0 && (year - y) % n === 0) {
//       console.log(year);
//       break;
//     }

//     if (year === 100000000) {
//       console.log(-1);
//       return;
//     }
//     year += 1;
//   }
// }
