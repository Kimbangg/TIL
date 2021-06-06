function solution(n) {
  n =
    n
      .toString(2)
      .split("")
      .reverse()
      .map((x, i) => (x === "1" ? i : -1))
      .filter((x) => x !== -1)
      .join(" ") + "\n";
  console.log(n);
}

let T = 1;
let n = 13;
console.log(solution(n));
