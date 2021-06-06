function solution(x, y) {
  let X = x;
  let Y = y;

  while (Y > 0) {
    let tmp = X % Y;
    X = Y;
    Y = tmp;
  }

  console.log(X);
  console.log((x * y) / X);
}

let [x, y] = [6, 72];
solution(x, y);
