function solve(i) {
  const answer = [];
  let string = "this is a test";
  string = string.split(" ");
  for (let i = string.length - 1; i >= 0; i--) {
    answer.push(string[i]);
  }

  console.log(`Case # ${i + 1} : ${answer.join(" ")}`);
}

const test_case = 1;

for (let i = 0; i < test_case; i++) {
  solve(i);
}
