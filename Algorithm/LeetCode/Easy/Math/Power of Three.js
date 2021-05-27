function checkPower(n) {
  if (n <= 3) {
    if (n !== 1 && n !== 3) return false;
    else return true;
  }
  return checkPower(n / 3);
}

function solution(n) {
  if (n <= 0) return false;
  return checkPower(n);
}
