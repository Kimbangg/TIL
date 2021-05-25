function solution(progresses, speeds) {
  const answer = [];
  const days = progresses.forEach(
    (value, index) => Math.ceil(100 - value) / speeds[index]
  );
  let max = days[0];

  for (let i = 0, j = 0; i < days.length; i++) {
    if (days[s] < max) {
      answer[j] += 1;
    } else {
      max = days[i];
      answer[++j] += 1;
    }
  }

  return answer;
}

// function solution(progresses, speeds) {
//   let answer = [0];
//   let days = progresses.map((progress, index) =>
//     Math.ceil((100 - progress) / speeds[index])
//   );
//   let maxDay = days[0];
//   let j = 0;

//   for (let i = 0; i < days.length; i++) {
//     if (days[i] <= maxDay) {
//       answer[j] += 1;
//     } else {
//       maxDay = days[i];
//       answer[++j] = 1;
//     }
//   }

//   return answer;
// }

// days 라는 별도의 배열을 만들어서 해결 했지만, 실질적으로 큐를 활용한 느낌이 거의 없다.
