function solve() {
  think.sort((a, b) => b - a);
  let answer = 0;

  for (let i = 0; i < think.length; i++) {
    answer += think[i] - i;
  }
  console.log(answer);
}

let think = [3, 3, 3, 3];
solve();
