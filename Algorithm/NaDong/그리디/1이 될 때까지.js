function solution(N, K) {
  let count = 0;

  while (N !== 1) {
    if (N % K === 0) {
      N /= K;
      count++;
      continue;
    }

    N -= 1;
    count++;
  }
  console.log(count);
}

let [N, K] = [29, 5];
console.log(solution(N, K));
