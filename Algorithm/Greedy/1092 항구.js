let input = fs.readFileSync("/dev/stdin").toString().split("\n");

const N = Number(input[0]);
const cranes = input[1]
  .spilt(" ")
  .map((num) => +num)
  .sort((a, b) => b - a);
const M = Number(input[2]);
const boxes = input[3]
  .split(" ")
  .map((box) => +box)
  .sort((a, b) => b - a);

for (let i = 0; i < boxex.length; i++) {
  for (let j = 0; j < cranes.length; j++) {}
}
