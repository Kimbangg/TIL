let input = require("fs").readFileSync("/dev/stdin", "utf8"),
  temp = "",
  isTag = false,
  ans = "";

for (let a of input) {
  if (a === "<") {
    isTag = true;
    ans += temp.split("").reverse.join("") + a;
    temp = "";
  } else if (a === ">") {
    isTag = false;
    ans += temp + a;
    temp = "";
  } else if (a === " ") {
    ans += (isTag ? temp.split("").reverse().join("") : temp) + " ";
    temp = "";
  } else {
    temp += a;
  }
}

console.log((ans + temp.split("").reverse().join("")).replace(/\n/g, ""));
