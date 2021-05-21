function solution(n) {
  let reversed = n.toString(3).split("").reverse().join("");
  return parseInt(reversed, 3);
}
