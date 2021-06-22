function solution(s, n) {
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") continue;

    const charToNum = s[i].charCodeAt(0);
    let sum = charToNum + n;

    if (65 <= charToNum && charToNum <= 90) {
      if (sum > 90) sum = 64 + (sum - 90);
    } else if (97 <= charToNum && charToNum <= 122) {
      if (sum > 122) sum = 96 + (sum - 122);
    }

    s[i] = String.fromCharCode(sum);
  }

  return s.join("");
}
