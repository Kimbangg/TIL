function solve() {
  count = P * Math.floor(V / L);

  V %= L;

  if (V <= P) {
    count += V;
  } else {
    count += P;
  }

  console.log(count);
}

let [P, L, V] = [5, 8, 17];
let count = 0;

solve();
