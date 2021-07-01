function solve() {
  let count = 0;
  let last = 0;

  for (let i = 0; i < pools.length; i++) {
    const [start, end] = pools[i];

    if (last >= end) continue; // 널빤지가 웅덩이를 모두 덮으면
    if (last > start) start = last; // 시작점 이상을 널빤지가 덮고 있으면

    last = start;
    let need = Math.ceil((end - start) / L);
    count += need;
    last += need * L; // 널빤지의  "끝"
  }

  console.log(count);
}

const [N, L] = [2, 4];

const pools = [
  [1, 6],
  [13, 17],
  [8, 12],
];

console.log(solve());

// function solve() {
//   let answer = 0;

//   pools.sort(function (a, b) {
//     if (a[0] === b[0]) {
//       return a[1] - b[1];
//     }

//     return a[0] - b[0];
//   });

//   for (let i = N - 1; i > 0; i--) {
//     let start = pools[i][0];
//     let end = pools[i - 1][1];

//     if (start - end === 1) {
//       pools[i - 1][1] = pools[i][1];
//       pools.splice(i, 1);
//     }
//   }

//   for (let i = 0; i < pools.length; i++) {
//     answer += Math.ceil((pools[i][1] - pools[i][0]) / L);
//   }

//   return answer;
// }
