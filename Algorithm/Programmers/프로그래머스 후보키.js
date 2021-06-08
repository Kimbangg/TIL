function solution(relation) {
  const answer = [];
  const student_map = {};

  for (let i = 0; i < relation.length; i++) {
    let joined = relation[i].join(" ");
    console.log(joined);
  }
}

let relation = [
  ["100", "ryan", "music", "2"],
  ["200", "apeach", "math", "2"],
  ["300", "tube", "computer", "3"],
  ["400", "con", "computer", "4"],
  ["500", "muzi", "music", "3"],
  ["600", "apeach", "music", "2"],
];
solution(relation);

// function solution(relation) {
//   let answer = [];
//   const student_map = {
//     id: [],
//     name: [],
//     major: [],
//     grade: [],
//   };

//   for (let i = 0; i < relation.length; i++) {
//     const [id, name, major, grade] = relation[i];
//     student_map.id.push(id);
//     student_map.name.push(name);
//     student_map.major.push(major);
//     student_map.grade.push(grade);
//   }

//   // 유일성을 검사
//   for (const key in student_map) {
//     let tmpSet = new Set(student_map[key]);

//     if (tmpSet.size === student_map[key].length) {
//       answer.push(key);
//     }
//   }

//   return answer;
// }
