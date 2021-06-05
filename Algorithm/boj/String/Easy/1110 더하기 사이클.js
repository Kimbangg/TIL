function solution() {
  let tmp = num;
  let count = 0;

  while (true) {
    count++;
    let ten = parseInt(tmp / 10);
    let one = parseInt(tmp % 10);

    tmp = one * 10 + ((ten + one) % 10);

    if (tmp === num) {
      return count;
    }
  }
}

let num = 26;
console.log(solution());
