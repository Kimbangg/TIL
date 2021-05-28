let n = 5;
let tmp = n - 1;
for (let i = 0; i < n; i++) {
  let str = "";

  for (let j = 0; j < n; j++) {
    str += i <= j ? "*" : " ";
  }

  for (let k = 0; k < tmp; k++) {
    str += "*";
  }
  tmp--;

  console.log(str);
}

1;
