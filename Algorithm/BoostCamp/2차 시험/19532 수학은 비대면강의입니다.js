function solution() {
  for (let i = -999; i < 1000; i++) {
    for (let j = -999; j < 1000; j++) {
      if (a * i + b * j === c && d * i + e * j === f) {
        console.log(i, j);
      }
    }
  }
}

const [a, b, c, d, e, f] = [1, 3, -1, 4, 1, 7];
solution();
