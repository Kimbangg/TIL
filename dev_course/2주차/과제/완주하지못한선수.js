function solution(participant, completion) {
  const map = {};
  const answer = [];

  for (const val of participant) {
    map[val] = (map[val] || 0) + 1;
  }

  completion.forEach((val) => map[val]--);

  for (const key in map) {
    if (map[key]) answer.push(key);
  }

  return answer.join("");
}

const participant = ["mislav", "stanko", "mislav", "ana"];
const completion = ["stanko", "ana", "mislav"];
solution(participant, completion);
