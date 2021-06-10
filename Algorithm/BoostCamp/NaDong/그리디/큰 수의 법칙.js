function solution(M, data) {
  data = data.sort((a, b) => a - b);
  let answer = 0;
  let first = data[N - 1];
  let second = data[N - 2];

  first = parseInt(M / K) * K * first;
  second = parseInt(M % K) * second;

  answer = first + second;

  return answer;
  // while (true) {

  //   if (M === 0) {
  //     break;
  //   }

  //   for (let i = 0; i < M; i++) {
  //     answer += first;
  //     M -= 1;
  //   }

  //   answer += second;
  //   M--;

  // }
}

let [N, M, K] = [5, 8, 3];
let data = [2, 4, 5, 4, 6];
console.log(solution(M, data));
