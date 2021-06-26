// 스스로 구현
function solution(s) {
  const used = [];

  s = s.replace("{{", "").replace("}}", "").split("},{");

  for (let i = 0; i < s.length; i++) {
    s[i] = s[i].split(",").map((e) => +e);
  }

  // 길이를 기준으로 오름차순 정렬
  s.sort((a, b) => a.length - b.length);

  // 이전 배열에서 사용이 되었다면, 새롭게 추가된 값이 아님.
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < s[i].length; j++) {
      if (!used.includes(s[i][j])) used.push(s[i][j]);
    }
  }

  return used;
}

// 이렇게도 가능

const tupleFrom = (str) =>
  str
    .slice(2, -2)
    .split("},{")
    .map((it) => toNumbers(it))
    .sort(accendingByLength)
    .reduce(
      (acc, cur) => [...acc, ...cur.filter((it) => !acc.includes(it))],
      []
    );

const toNumbers = (str) => str.split(",").map((it) => Number(it));

const accendingByLength = (arr1, arr2) => arr1.length - arr2.length;

const solution = (s) => tupleFrom(s);
