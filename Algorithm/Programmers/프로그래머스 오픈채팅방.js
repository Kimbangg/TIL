function solution(record) {
  const answer = [];
  const map = {};

  for (let i = 0; i < record.length; i++) {
    const [command, uid, name] = record[i].split(" ");

    switch (command) {
      case "Enter":
        answer.push([uid, "님이 들어왔습니다."]);
        map[uid] = name;
        break;
      case "Leave":
        answer.push([uid, "님이 나갔습니다."]);
        break;
      case "Change":
        map[uid] = name;
        break;
    }
  }

  return answer.map((ele) => map[ele[0]] + ele[1]);
}

let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
console.log(solution(record));
