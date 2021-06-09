function solve(n) {
  for (let i = 1; i <= n; i++) {
    let cnt = i;
    let test = i;

    while (true) {
      cnt += test % 10;
      test = Math.floor(test / 10);

      if (test === 0) {
        break;
      }
    }

    if (cnt === n) {
      console.log(i);
      return;
    }
  }
  console.log(0);
}

let n = 225;
solve(n);
