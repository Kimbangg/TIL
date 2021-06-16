function solve() {
  seat = seat.split("");
  let answer = 0;
  const max = N + 1;

  for (let i = 0; i < seat.length; i++) {
    if (seat[i] === "L") {
      answer += 1;
    }
  }

  answer /= 2;
  answer = max - answer;

  console.log(answer);
}

const N = 9;
let seat = "SLLLLSSLL";
solve();
