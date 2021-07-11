function solution() {
  let cnt = 1;
  let max = balloon[0];

  for (let i = 1; i < balloon.length; i++) {
    if (max < balloon[i]) {
      cnt += 1;
    }
    max = balloon[i];
  }
  console.log(cnt);
}

const n = 5;
const balloon = [2, 1, 5, 4, 3];
solution();
