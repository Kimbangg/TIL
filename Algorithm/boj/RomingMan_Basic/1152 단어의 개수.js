function solution(strings) {
  const answer = [];

  for (let i = 0; i < strings.length; i++) {
    strings[i] = strings[i].split(" ");
    answer.push(strings[i].length);
  }

  return answer;
}

const strings = [
  "The Curious Case of Benjamin Button",
  "Mazatneunde Wae Teullyeoyo",
  "Teullinika Teullyeotzi",
];

console.log(solution(strings));
