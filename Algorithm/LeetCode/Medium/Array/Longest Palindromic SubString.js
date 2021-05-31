function solution(s) {
  let reversed = s.split("").reverse();
  let current = "";
  let longest = "";

  for (let i = 0; i < s.length; i++) {
    current += reversed[i];

    if (current !== s.substr(i, current.length)) {
      current = "";
    } else {
      for (let j = i + 1; j < s.length; j++) {
        current += reversed[j];
        if (current !== s.substr(i, current.length)) {
          break;
        }
      }
    }

    if (longest.length < current.length) {
      longest = current;
    }
  }
  console.log(current);
}

let s = "babad";
console.log(solution(s));
