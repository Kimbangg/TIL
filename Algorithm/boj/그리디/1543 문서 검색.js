function solve() {
  let index = s.indexOf(target);
  let count = 0;

  while (index !== -1) {
    s = s.replace(target, " ");
    count += 1;
    index = s.indexOf(target);
  }
  console.log(count);
}

let s = "ababababa";
let target = "aba";
console.log(solve());
