let input = require("fs").readFileSync("/dev/stdin", "utf8"),
  temp = "",
  isTag = false,
  ans = "";

for (let a of input) {
  // input 의 각각 열을 확인한다.
  if (a === "<") {
    isTag = true; // true로 바꿔주면 ">" 가 필요하다는 시그널로 사용이 가능하다
    ans += temp.split("").reverse().join("") + a; // "<" 앞을 뒤집어 주는 이유는 <open> tag <close> 라고 한다면 open 앞에는 비어있으니까 패스하고,
    // close 앞에 있는 temp에 담겨있는 tag를 뒤집어주면된다.
    temp = "";
  } else if (a === ">") {
    isTag = false;
    ans += temp + a;
    temp = "";
  } else if (a === " ") {
    ans += (!isTag ? temp.split("").reverse().join("") : temp) + " ";
    temp = "";
  } else {
    temp += a;
  }
}
console.log((ans + temp.split("").reverse().join("")).replace(/\n/g, ""));
