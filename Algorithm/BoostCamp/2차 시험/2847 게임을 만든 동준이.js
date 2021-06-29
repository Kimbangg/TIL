function solution() {
  let count = 0;

  for (let i = n - 1; i > 0; i--) {
    if (stage_point[i] <= stage_point[i - 1]) {
      count += stage_point[i - 1] - stage_point[i] + 1;
      stage_point[i - 1] = stage_point[i] - 1;
    }
  }
  console.log(count);
}

const n = 3;
const stage_point = [5, 5, 5];
solution();
