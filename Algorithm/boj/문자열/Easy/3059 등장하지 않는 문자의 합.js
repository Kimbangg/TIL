function solution() {
  const answer = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].charCodeAt() - 65;
    arr[s[i]] = 1;
  }

  for (let i = 0; i < 26; i++) {
    if (arr[i] === 0) {
      answer.push(i + 65);
    }
  }

  let total = answer.reduce((acc, value) => acc + value);

  return total;
}

let s = "ABCDEFGHIJKLMNOPQRSTUVW";
let arr = Array(26).fill(0);
console.log(solution());
