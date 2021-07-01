function solution() {
  const arr = new Array(26).fill(0);
  s = s.split("");
  s = s.map((each) => each.toLowerCase());

  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - 97]++;
  }

  const max = Math.max(...arr);
  const index = arr.indexOf(max);
  let isSame = false;

  for (let j = 0; j < 26; j++) {
    if (arr[j] === max && index != j) {
      isSame = true;
      break;
    }
  }

  return isSame === true ? "?" : max;
}

let s = "zZa";
console.log(solution());

// function solution() {
//   const map = {};
//   let max = 0;
//   let count = 0;

//   s = s.split("");
//   s = s.map((each) => each.toLowerCase());

//   for (let i = 0; i < s.length; i++) {
//     map[s[i]] = (map[s[i]] || 0) + 1;
//   }

//   for (const key in map) {
//     if (max < map[key]) {
//       max = map[key];
//     }
//   }

//   Object.values(map).forEach((each) => {
//     if (each == max) {
//       count++;
//     }
//   });

//   return count > 1 ? "?" : max;
// }
