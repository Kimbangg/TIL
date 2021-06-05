function solution() {
  let barometer = "CAMBRIDGE";
  barometer = barometer.split("");
  s = s.split("");
  s = s.filter((each) => !barometer.includes(each));

  return s;
}

let s = "LOVA";
console.log(solution());
