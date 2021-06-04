function solution() {
  let answer = 0;
  s1 = s1.split("").sort();
  s2 = s2.split("").sort();

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      answer += 1;
    }
  }

  return answer;
}

let s1 = "dared";
let s2 = "bread";
console.log(solution());
