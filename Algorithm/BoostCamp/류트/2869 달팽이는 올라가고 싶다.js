function solve() {
  let current = 0;

  if ((V - B) % (A - B) !== 0) {
    current = Math.floor((V - B) / (A - B)) + 1;
  } else {
    current = Math.floor((V - B) / (A - B));
  }

  console.log(current);
}

const [A, B, V] = [2, 1, 5];
solve();
