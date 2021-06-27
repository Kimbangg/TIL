function solution() {
  let divide_standard = 0;
  let prefix_mius = Array(n).fill(0);
  let answer = 0;

  for (let i = 0; i < 300000; i++) {
    if (Math.ceil(n / i) === k) {
      divide_standard = i;
      break;
    }
  }

  for (let i = 1; i <= n - 1; i++) {
    prefix_mius[i] = tall[i] - tall[i - 1];
  }

  for (let i = divide_standard - 1; i < n; i += divide_standard) {
    answer += prefix_mius[i];
  }

  console.log(answer);
}

const [n, k] = [5, 3];
const tall = [1, 3, 5, 6, 10];
solution();
//    1 2 2 1 4
//  0 1 3 5 6 10
