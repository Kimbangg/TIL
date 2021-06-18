// indexOf
function solve(n) {
  if (note_one.indexOf(n) === -1) {
    return 0;
  }

  return 1;
}

let note_one = [4, 1, 5, 2, 3];
note_one.sort();
let note_two = [1, 3, 7, 9, 5];

for (let i = 0; i < note_two.length; i++) {
  console.log(solve(note_two[i]));
}

// binary Search
// function solve(n) {
//   let start = 0;
//   let end = note_one.length - 1;

//   while (start <= end) {
//     let mid = Math.floor((start + end) / 2);

//     if (n === note_one[mid]) {
//       return 1;
//     } else if (n < note_one[mid]) {
//       end = mid - 1;
//     } else {
//       start = mid + 1;
//     }
//   }
//   return 0;
// }
