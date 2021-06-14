function getGCD(n, m) {
  while (m > 0) {
    let tmp = n % m;
    n = m;
    m = tmp;
  }

  return n;
}

function solve() {
  let gcdNum = getGCD(n, m);
  let lcdNum = (n * m) / gcdNum;

  console.log(gcdNum);
  console.log(lcdNum);
}

const [n, m] = [24, 18];
solve();
