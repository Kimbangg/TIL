const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .split("\n")
  .map((x) =>
    x.split(" ")
      .map((x) => +x)
      .sort((a, b) => b - a)
  );
const T = input.shift();

for (let i = 0; i < T; i++) {
  console.log(input[i][2]);
}
