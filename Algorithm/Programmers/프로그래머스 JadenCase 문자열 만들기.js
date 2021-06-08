function solution(s) {
  let answer = "";

  s = s.split(" ");

  answer = s
    .map((str) => (str === "" ? "" : str.toLowerCase()))
    .map((str) => (str === "" ? "" : str.replace(str[0], str[0].toUpperCase())))
    .join(" ");

  return answer;
}

let s = "3people unFollowed me";
console.log(solution(s));
