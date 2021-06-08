function solution(info, query) {
  const answer = [];
  const info_map = {};

  function combination(array, score, start) {
    const key = array.join("");
    const value = info_map[key];

    if (value) info_map[key].push(score);
    else info_map[key] = [score];

    for (let i = start; i < array.length; i++) {
      const temp = [...array];
      temp[i] = "-";
      combination(temp, score, i + 1);
    }
  }

  for (let i = 0; i < info.length; i++) {
    const splited = info[i].split(" ");
    const score = Number(splited.pop());
    combination(splited, score, 0);
  }

  for (const key in info_map) {
    info_map[key] = info_map[key].sort((a, b) => a - b);
  }

  for (let i = 0; i < query.length; i++) {
    const splited = query[i].replace(/ and /g, " ").split(" ");
    const score = Number(splited.pop());
    const key = splited.join("");
    const array = info_map[key];
    console.log(array);
    console.log();
    if (array) {
      let start = 0;
      let end = array.length;

      while (start < end) {
        const mid = Math.floor((start + end) / 2);

        if (array[mid] >= score) {
          end = mid;
        } else if (array[mid] < score) {
          start = mid + 1;
        }
      }
      const result = array.length - start;
      answer.push(result);
    }
  }
  retu;
}

const info = [
  "java backend junior pizza 150",
  "python frontend senior chicken 210",
  "python frontend senior chicken 150",
  "cpp backend senior pizza 260",
  "java backend junior chicken 80",
  "python backend senior chicken 50",
];

const query = [
  "java and backend and junior and pizza 100",
  "python and frontend and senior and chicken 200",
  "cpp and - and senior and pizza 250",
  "- and backend and senior and - 150",
  "- and - and - and chicken 100",
  "- and - and - and - 150",
];

solution(info, query);
