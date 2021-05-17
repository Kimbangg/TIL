// function solution(answers) {
//   let max = 0;
//   let answer = [];
//   let patterns = [
//     [1, 2, 3, 4, 5],
//     [2, 1, 2, 3, 2, 4, 2, 5],
//     [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
//   ];
//   let point = [0, 0, 0];

//   for (let i = 0; i < answers.length; i++) {
//     if (answers[i] === patterns[0][i % 5]) point[0]++;

//     if (answers[i] === patterns[1][i % 8]) point[1]++;

//     if (answers[i] === patterns[2][i % 10]) point[2]++;
//   }

//   max = Math.max(point[0], point[1], point[2]);

//   for (let j = 0; j < point.length; j++) {
//     if (max === point[j]) answer.push(j + 1);
//   }

//   return answer;
// }

function solution(answers) {
  let answer = [];
  let max = 0;
  let patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === patterns[0][i % 5]) count[0]++;

    if (answers[i] === patterns[1][i % 8]) count[1]++;

    if (answers[i] === patterns[2][i % 10]) count[2]++;
  }

  max = Math.max(...count);

  count.forEach(function (each, index) {
    if (each === max) {
      answer.push(index + 1);
    }
  });

  return answer;
}

let answers = [1, 2, 3, 4, 5];

console.log(solution(answers));
