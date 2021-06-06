function solution() {
  let max = 0;
  let min = Infinity;

  value.forEach((num) => {
    if (num > max) max = num;
    if (num < min) min = num;
  });

  return max * min;
}

// 문제를 올바르게 이해 했는가? [O]

// 양수 A가 N의 진짜 약수가 되려면
// N이 A의 배수이고, A는 1과 N이 아니어야한다.
