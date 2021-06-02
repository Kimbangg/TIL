function solution(score) {
  score = score.sort((a, b) => a[1] - b[1]);

  score.forEach((each) => console.log(each[0]));
}

const score = [
  ["홍길동", 95],
  ["이순신", 77],
];

console.log(solution(score));
