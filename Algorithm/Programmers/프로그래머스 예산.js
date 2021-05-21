function solution(d, budget) {
  d.sort((a, b) => a - b);
  while (d.reduce((a, b) => a + b, 0) > budget) {
    d.pop();
  }

  return d.length;
}

let d = [1, 3, 2, 5, 4];
let budget = 9;
console.log(solution(d, budget));
