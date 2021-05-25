// 아래의 문제에 적용 되지 않는다.
function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      answer = participant[i];
      return answer;
    }
  }
  return answer;
}

// 동일인이 2명 일 때, 처리 해주지 못하는 문제 발생
function solution(participant, completion) {
  let answer = "";
  answer += participant.filter((x) => !completion.includes(x));
  return answer;
}

let participant = ["mislav", "stanko", "mislav", "ana"];
let completion = ["stanko", "ana", "mislav"];
console.log(solution(participant, completion));
