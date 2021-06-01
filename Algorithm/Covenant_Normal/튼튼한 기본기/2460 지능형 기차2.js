function solution(train) {
  let max = 0;
  let current = 0;

  for (let i = 0; i < train.length; i++) {
    current -= train[i][0];
    current += train[i][1];

    if (max < current) {
      max = current;
    }
  }
  return max;
}

let train = [
  [0, 32],
  [3, 13],
  [28, 25],
  [17, 5],
  [21, 20],
  [11, 10],
  [12, 12],
  [(4, 2)],
  [(0, 8)],
  [21, 0],
];

console.log(solution(train));
