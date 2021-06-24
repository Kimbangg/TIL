function solution() {
  const answer = [];

  for (let i = 0; i < string.length; i++) {
    const cur = string[i];

    answer.push(cur.repeat(n));
  }

  console.log(answer.join(""));
}

const n = 3;
let string = "ABC";
solution();
