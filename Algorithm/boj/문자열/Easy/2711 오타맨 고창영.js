function solution() {
  const answer = [];

  for (let i = 0; i < strings.length; i++) {
    let [pos, str] = strings[i];
    str = str.split("");
    str.splice(pos - 1, 1);
    answer.push(str.join(""));
  }
  console.log(answer.join("\n"));
}

let strings = [
  [4, "MISSSPELL"],
  [1, "PROFRAMMING"],
  [7, "CONTEST"],
  [3, "BALLOON"],
];

solution();
