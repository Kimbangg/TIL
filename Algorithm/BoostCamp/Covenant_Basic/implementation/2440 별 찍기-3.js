for (let i = 5; i >= 1; i--) {
  let str = "";
  for (let j = 1; j <= 5; j++) {
    str += i >= j ? "*" : " ";
  }
  console.log(str);
}
