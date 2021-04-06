function solution(progresses, speeds) {
  let answer = [];

  while (progresses.length) {
    while (progresses[0] < 100) {
      progresses = progresses.map((v, i) => v + speeds[i]);
    }

    let successCount = 0;

    for (let i = 0; i < progresses.length; i++) {
      if (progresses[i] < 100) break;

      successCount++;
    }

    progresses.splice(0, successCount);
    speeds.splice(0, successCount);

    answer.push(successCount);
  }

  return answer;
}
