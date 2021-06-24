function solution() {
  const count = new Array(10).fill(0);

  for (let i = 0; i < wanted.length; i++) {
    const current = wanted[i];

    if (current === 6) {
      count[9] += 1;
    } else {
      count[current] += 1;
    }
  }

  const half = Math.ceil(count[9] / 2);
  count[6] = half;
  count[9] = half;

  let answer = Math.max(...count);

  console.log(answer);
}

const wanted = "9999";
solution();
