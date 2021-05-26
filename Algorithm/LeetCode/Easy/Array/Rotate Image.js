function solution(matrix) {
  matrix = matrix.reverse();

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(solution(matrix));
// 1번 뒤집으면
// [3,0, 2,0,1,0]
// [3,1, 2,1,1,1]
// [3,2,3,2,3,2]

// 추가 배열을 선언 할 수 있는 경우
// function solution(matrix) {
//   const answer = [];
//   let tmpValue = [];
//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = matrix.length - 1; j >= 0; j--) {
//       tmpValue.push(matrix[j][i]);
//     }
//     answer.push(tmpValue);
//     tmpValue = [];
//   }

//   return answer;
// }
