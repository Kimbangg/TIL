function solution(num) {
  for (let i = 2; i <= num; i++) {
    d[i] = d[i - 1] + 1;

    if (i % 2 === 0) {
      d[i] = Math.min(d[i], d[i / 2] + 1);
    }

    if (i % 3 === 0) {
      d[i] = Math.min(d[i], d[i / 3] + 1);
    }

    if (i % 5 === 0) {
      d[i] = Math.min(d[i], d[i / 5] + 1);
    }
  }
  return d[num];
}

let num = 26;
const d = Array(30001).fill(0);
console.log(solution(num));

// 2  d[1] + 1 = 1
// 3  0
// 4  d[2]
