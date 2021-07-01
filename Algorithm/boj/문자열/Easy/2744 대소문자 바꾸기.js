function solution() {
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 97) {
      s[i] = s[i].toUpperCase();
    } else {
      s[i] = s[i].toLowerCase();
    }
  }
  return s.join("");
}

let s = "WrongAnswer";
console.log(solution());
