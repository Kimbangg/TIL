function solve(commands) {
  let answer = [];
  for (let i = 0; i < commands.length; i++) {
    let [count, string] = commands[i];
    string = string.split("");

    for (let j = 0; j < string.length; j++) {
      answer.push(string[j].repeat(count));
    }
    console.log(answer.join(""));
    answer = [];
  }
}

let commands = [
  [3, "ABC"],
  [5, "/HTP"],
];

solve(commands);
