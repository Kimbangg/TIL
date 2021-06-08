function solution(num) {
  const len = num.length - 4;
  return "*".repeat(len) + num.substring(len);
}

let num = "01033334444";
console.log(solution(num));
