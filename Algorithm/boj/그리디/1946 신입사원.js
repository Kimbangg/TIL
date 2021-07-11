function solution() {
  people.sort((a, b) => a[0] - b[0]);
  let cnt = 1;
  let max = people[0][1];

  for (let i = 1; i < n; i++) {
    if (max > people[i][1]) {
      cnt += 1;
      max = people[i][1];
    }
  }
  console.log(cnt);
}

const n = 5;

const people = [
  [3, 2],
  [1, 4],
  [4, 1],
  [2, 3],
  [5, 5],
];

solution();
