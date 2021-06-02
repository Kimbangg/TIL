function solution(intervals) {
  if (intervals.length < 2) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [];
  let previous = intervals[0];

  for (let i = 1; i < intervals.length; i++) {
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      result.push(previous);
      previous = intervals[i];
    }
  }
  result.push(previous);

  return result;
}

let intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
console.log(solution(intervals));

// function solution(intervals) {
//   for (let i = 0; i < intervals.length - 1; i++) {
//     if (
//       intervals[i][0] > intervals[i + 1][0] &&
//       intervals[i][1] > intervals[i + 1][1]
//     ) {
//       let tmp = intervals[i];
//       intervals[i] = intervals[i + 1];
//       intervals[i + 1] = tmp;
//     } else if (
//       intervals[i][1] >= intervals[i + 1][0] ||
//       intervals[i][1] >= intervals[i + 1]
//     ) {
//       if (intervals[i][1] <= intervals[i + 1][1]) {
//         intervals[i][1] = intervals[i + 1][1];
//       }

//       if (intervals[i][0] > intervals[i + 1][0]) {
//         intervals[i][0] = intervals[i + 1][0];
//       }

//       intervals.splice(i + 1, 1);
//     }
//   }
//   return intervals;
// }
