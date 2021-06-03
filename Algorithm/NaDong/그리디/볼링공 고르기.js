function fac(n) {
  if (n === 1) {
    return 1;
  }

  return n * fac(n - 1);
}

function solution() {
  let countCombination = (N * (N - 1) * (N - 2)) / fac(5 - 2);

  for (let i = 0; i <= map.length; i++) {
    map[ball[i]] = (map[ball[i]] || 0) + 1;
  }

  for (let i = 0; i <= map.length; i++) {
    if (map[i] === 2) {
      countCombination -= 1;
    }
  }

  return countCombination;
}

let [N, M] = [5, 3];
let ball = [1, 3, 2, 3, 2];
let map = Array(M + 1).fill(0);
console.log(solution());
