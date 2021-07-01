function gcd(m, n) {
  if (n == 0) return m;
  else return gcd(n, m % n);
}
function lcm(m, n) {
  return (m * n) / gcd(m, n);
}

let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");
let tc = parseInt(input.shift());

for (let i = 0; i < tc; i++) {
  input[i] = input[i].split(" ").map(Number);
  console.log(lcm(input[i][0], input[i][1]));
}
