function solution() {
  const map = {};
  const sorted = [];

  for (let i = 0; i < files.length; i++) {
    files[i] = files[i].split(".");
    files[i] = files[i][1];
    map[files[i]] = (map[files[i]] || 0) + 1;
  }

  for (const key in map) {
    sorted.push([key + " " + map[key]]);
  }

  answer = sorted.sort();

  return answer.join("\n");
}

const files = [
  "sbrus.txt",
  "spc.spc",
  "acm.icpc",
  "korea.icpc",
  "sample.txt",
  "hello.world",
  "sogang.spc",
  "example.txt",
];

console.log(solution());
