function solve() {
  if (num <= 9) {
    return 9;
  }

  let answer = 9;

  if (num <= 99) {
    num = (num - 10 + 1) * 2;
    answer += num;

    return answer;
  }

  answer += 180;

  if (num <= 999) {
    num = (num - 100 + 1) * 3;
    answer += num;
  }

  return answer;
}

let num = 120;
console.log(solve());

function solve() {
  let count = 0;
  let idx = 0;
  let n_len = num.toString().length - 1;

  while (idx < n_len) {
    count += 9 * Math.pow(10, idx) * (idx + 1);
    idx += 1;
  }

  count += (num - Math.pow(10, idx) + 1) * (n_len + 1);

  return count;
}

let num = 120;
console.log(solve());
