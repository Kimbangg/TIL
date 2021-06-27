function solution() {
  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= 59; j++) {
      for (let z = 0; z <= 59; z++) {
        if (i.includes(k) || j.includes(k) || z.includes(k)) {
          count += 1;
        }
      }
    }
  }
  console.log(count);
}

const [n, k] = [5, 3];
solution();
