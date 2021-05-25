function solution(clothes) {
  let answer = 1;
  const map = {};

  for (let i = 0; i < clothes.length; i++) {
    map[clothes[i][1]] = (map[clothes[i][1]] || 1) + 1;
  }

  for (let key in map) {
    answer *= map[key];
  }

  return answer - 1;
}

let clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];

console.log(solution(clothes));
