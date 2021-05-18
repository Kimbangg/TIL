const input = require("fs")
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((x) => +x);

let output = "";

for (let i = 1; i <= input[0]; i++) {
  output +=
    input[i]
      .toString(2)
      .split("")
      .reverse()
      .map((x, i) => (x === "1" ? i : -1))
      .filter((x) => x !== -1)
      .join(" ") + "\n";
}
console.log(output);
