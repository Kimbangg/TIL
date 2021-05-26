function solution(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) {
      digits[i] = 0;
    } else {
      return digits;
    }
  }
  digits.unshift(1);
  return digits;
}

let digits = [1, 2, 9];
console.log(solution(digits));
