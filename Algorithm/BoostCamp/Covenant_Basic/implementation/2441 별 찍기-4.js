for (let i = 5; i >= 1; i--) {
  let str = "";
  for (let j = 5; j >= 1; j--) {
    str += i >= j ? "*" : " ";
  }
  console.log(str);
}
