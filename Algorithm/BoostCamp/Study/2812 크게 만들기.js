function solve() {
  num = num
    .split("")
    .map((e) => +e)
    .sort((a, b) => a - b);

  for (let i = 0; i < k; i++) {
    num.shift();
  }

  num = num.sort((a, b) => b - a).join("");

  return num;
}

const [n, k] = [4, 3];
let num = "773671";
console.log(solve());
