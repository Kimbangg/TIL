function solution(arr1, arr2) {
  const answer = [];
  arr1.forEach((v) => answer.push(Array(arr2[0].length).fill(0)));

  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2[0].length; j++) {
      for (var k = 0; k < arr2.length; k++) {
        answer[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return answer;
}

const arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];

const arr2 = [
  [3, 3],
  [3, 3],
];

solution(arr1, arr2);
