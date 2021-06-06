function solution(N, K) {
  for (let i = 0; i <= N; i++) {
    N % i === 0 && arr.push(i);
  }

  return arr[K - 1] > 0 ? arr[K - 1] : 0;
}

let N = 6;
let K = 3;
const arr = [];
console.log(solution(N, K));
