function solution() {
  let answer = numbers
    .map((c) => c + "")
    .sort((a, b) => b + a - (a + b))
    .join("");

  return answer[0] === "0" ? "0" : answer;
}
let numbers = [6, 10, 2];
console.log(solution());
