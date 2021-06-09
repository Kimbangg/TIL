function fac(n) {
  if (n <= 1) {
    return 1;
  }

  return n * fac(n - 1);
}

function comb(n, r) {
  return parseInt(fac(n) / (fac(r) * fac(n - r)));
}

function solve() {
  let [n, m] = [13, 29];
  console.log(comb(m, n));
}

let test_case = 1;

for (let i = 0; i < test_case; i++) {
  solve();
}
