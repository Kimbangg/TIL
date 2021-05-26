function solution(s, t) {
  s = s.split("").sort();
  t = t.split("").sort();

  if (s.length !== t.length) {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== t[i]) {
      return false;
    }
  }
  return true;
}

let s = "anagram";
let t = "nagaram";
console.log(solution(s, t));
