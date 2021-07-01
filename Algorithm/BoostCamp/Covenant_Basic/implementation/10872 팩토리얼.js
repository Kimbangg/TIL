function fac(n) {
  if (n <= 1) return 1;

  return n * fac(n - 1);
}

let nums = 10;
console.log(fac(10));
