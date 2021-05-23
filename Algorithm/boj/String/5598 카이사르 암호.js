const before = "MRL".split("");
const after = [];

for (let i = 0; i < before.length; i++) {
  let tmp = before[i].charCodeAt() - 3;
  tmp += tmp < 65 ? 26 : 0;
  after.push(String.fromCharCode(tmp));
}

console.log(after.join(""));
