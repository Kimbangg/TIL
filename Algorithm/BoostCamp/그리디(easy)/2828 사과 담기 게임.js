function solve() {
  s = s.split("").map((each) => each.toLowerCase());
  const map = {};

  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  if (map["u"] > 1 && map["c"] > 2 && map["p"] > 1) {
    console.log("I love UCPC");
  } else {
    console.log("I hate UCPC");
  }
}

let s = "University Computer Programming";
solve();
