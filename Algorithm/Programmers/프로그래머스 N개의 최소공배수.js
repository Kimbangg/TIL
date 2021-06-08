function gcd(a, b) {
  while (b > 0) {
    let tmp = b;
    b = a % b;
    a = tmp;
  }

  return a;
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution(arr) {
  let answer = 1;

  for (let i = 0; i < arr.length; i++) {
    answer = lcm(answer, arr[i]);
  }

  return answer;
}

const arr = [2, 6, 8, 14];
console.log(solution(arr));
