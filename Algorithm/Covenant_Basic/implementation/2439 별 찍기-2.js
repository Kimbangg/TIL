let n = 5;

for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = n - 1; j >= 0; j--) {
    str += j <= i ? "*" : " ";
  }
  console.log(str);
}
