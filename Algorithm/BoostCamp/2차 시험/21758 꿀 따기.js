function solution(n, honey) {
  if (honey.length === 3) {
    let max = Math.max(...honey);
    return max * 2;
  }

  let ans = 0;
  const sum1 = Array(n).fill(0);
  const sum2 = Array(n).fill(0);

  for (let i = 1; i <= n; i++) {
    sum1[i] = sum1[i - 1] + honey[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    sum2[i] = sum2[i + 1] + honey[i + 1];
  }

  console.log(sum2);
}

const n = 7;
const honey = [0, 9, 9, 4, 1, 4, 9, 9];
solution(n, honey);

// https://tedcho.tistory.com/2
