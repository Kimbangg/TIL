function solution(s) {
  let map = {};
  let max = 0;
  let count = 0;
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (const key in map) {
    max = Math.max(max, map[key]);
  }

  for (const key in map) {
    if (max === map[key]) {
      count++;
    }
  }

  return count === 1 ? max : "?";
}

let s = "Mississipi";
console.log(solution(s));
