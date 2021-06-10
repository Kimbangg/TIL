function solution(circle, K) {
  let jump = 0;
  const answer = [];

  while (circle.length) {
    jump += K - 1;

    if (jump >= circle.length) jump %= circle.length;

    answer.push(circle[jump]);
    circle.splice(jump, 1);
  }
  console.log(answer);
}

let [N, K] = [7, 3];
const circle = Array.from({ length: N }, (v, i) => i + 1);
solution(circle, K);

// 문제를 이해 했는가? [O]
