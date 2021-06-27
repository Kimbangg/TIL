function solution() {
  const answer = Array(n + m);

  let a_idx = 0;
  let b_idx = 0;

  for (let i = 0; i < answer.length; i++) {
    if (a_idx === N) answer[i] = B[b_idx++];
    else if (b_idx === M) answer[i] = A[a_idx++];
    else if (A[a_idx] <= B[b_idx]) answer[i] = A[a_idx++];
    else answer[i] = B[b_idx];
  }
}

const [n, m] = [2, 2];

const A = [2, 7];
const B = [3, 5];

solution();

/* 11728번 배열 합치기
 * URL: https://www.acmicpc.net/problem/11728
 * Date: 2021-01-11 Mon 16:38:33 07m 08s
 * Comment: 정렬I 필수예제 1번.
 */
// "use strict";
// const input = require("fs").readFileSync(0).toString().trim().split("\n");
// const [N, M] = input[0].split(" ").map(Number);
// const A = input[1].split(" ").map(Number);
// const B = input[2].split(" ").map(Number);

// const sorted = Array(N + M);
// let ai = 0;
// let bi = 0;

// for (let si = 0; si < sorted.length; si++) {
//   if (ai === N) sorted[si] = B[bi++];
//   else if (bi === M) sorted[si] = A[ai++];
//   else if (A[ai] <= B[bi]) sorted[si] = A[ai++];
//   else sorted[si] = B[bi++];
// }

// console.log(sorted.join(" "));
