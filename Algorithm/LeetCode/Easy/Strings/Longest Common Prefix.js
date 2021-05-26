function solution(strs) {
  let prefix = "";

  if (!strs) return prefix;

  for (let i = 0; i < strs[0].length; i++) {
    let char = strs[0][i];
    for (let j = 0; j < strs.length; j++) {
      if (strs[j][i] !== char) return prefix;
    }
    prefix += char;
  }
  return prefix;
}

let strs = ["flower", "flow", "flight"];
console.log(solution(strs));

// function solution(strs) {
// let prefix = "";

// if (!strs) return prefix;

// for (let i = 0; i < strs[0].length; i++) {
//   const char = strs[0][i];

//   for (let j = 1; j < strs.length; j++) {
//     if (strs[j][i] !== char) return prefix;
//   }
//   prefix += char;
// }
// return prefix;
// }
