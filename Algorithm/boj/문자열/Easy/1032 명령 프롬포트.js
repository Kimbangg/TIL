function solution() {
  let target = outputs[0].split("");

  for (let i = 0; i < target.length; i++) {
    for (let j = 0; j < outputs.length; j++) {
      if (target[i] !== outputs[j][i]) {
        target[i] = "?";
      }
    }
  }
  console.log(target.join(""));
}

let outputs = ["config.sys", "config.inf", "configures"];
solution();

// function solution() {
//   let s = "";

//   for (let i = 0; i < outputs[0].length; i++) {
//     let tmpS = s;
//     s += outputs[0][i];

//     if (outputs.some((each) => !each.includes(s))) {
//       let length = outputs[0].length - tmpS.length;

//       break;
//     }
//   }
// }
