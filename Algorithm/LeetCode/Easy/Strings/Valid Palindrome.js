function solution(s) {
  let tmp = s;
  let reversed = tmp
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("")
    .reverse()
    .join("");

  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (s === reversed) {
    return true;
  }
  return false;
}

let s = "race a car";
console.log(solution(s));
