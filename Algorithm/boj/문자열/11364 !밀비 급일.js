function solution(str) {
  if (str === "END") {
    return;
  }

  str = str.split("").reverse().join("");
  console.log(str);
}

const strings = [
  "!edoc doog a tahW",
  "noitacitsufbo",
  "erafraw enirambus detcirtsernu yraurbeF fo tsrif eht no nigeb ot dnetni eW",
  "lla sees rodroM fo drol eht ,ssertrof sih nihtiw delaecnoC",
  "END",
];

for (let i = 0; i < strings.length; i++) {
  solution(strings[i]);
}
