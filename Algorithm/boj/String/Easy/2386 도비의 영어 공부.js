function solution() {
  const answer = [];

  for (let i = 0; i < words.length; i++) {
    let count = 0;
    let target = words[i][0];
    words[i][1] = words[i][1].split("");

    for (let j = 0; j < words[i][1].length; j++) {
      if (target === words[i][1][j]) {
        count += 1;
      }
    }
    answer.push([target + " " + count]);
  }
  return answer.join("\n");
}

let words = [
  ["g", "Programming Contest"],
  ["n", "New Zealand"],
  ["x", "This is quite a simple problem"],
];

console.log(solution());
