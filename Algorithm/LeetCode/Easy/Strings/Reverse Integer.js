function solution(x) {
  const reversed = parseInt(x.toString().split("").reverse().join(""));

  if (x > 2147483647 || reversed > 2147483647) {
    return 0;
  } else {
    return x > 0 ? reversed : -reversed;
  }
}

let x = 1534236469;
console.log(solution(x));
