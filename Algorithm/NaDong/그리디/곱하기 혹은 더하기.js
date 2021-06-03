function solution(num) {
  num = num.split("").map((e) => +e);
  let answer = 0;
  let result = num[0];

  for (let i = 1; i <= num.length - 1; i++) {
    let cur = num[i];

    if (cur <= 1 || result <= 1) {
      result += cur;
    } else {
      result *= cur;
    }
  }
  return result;
}

let num = "567";
console.log(solution(num));
