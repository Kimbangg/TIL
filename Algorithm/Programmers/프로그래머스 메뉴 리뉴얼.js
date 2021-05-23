function getCombinations(arr, n) {
  const results = [];
  if (n === 1) return arr.map((e) => [e]);
  arr.forEach((e, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const combinations = getCombinations(rest, n - 1);
    const attached = combinations.map((combination) => [e, ...combination]);
    results.push(...attached);
  });
  return results;
}

function solution(orders, course) {
  const answer = [];
  const comboArr = [];
  let map = {};
  orders = orders.map((e) => e.split("").sort());

  for (let i = 0; i < orders.length; i++) {
    for (let j = 0; j < course.length; j++) {
      comboArr.push(...getCombinations(orders[i], course[j]));
    }
  }

  comboArr.forEach((e) => {
    let joined = e.join("");
    map[joined] = (map[joined] || 0) + 1;
  });

  let countArr = Object.entries(map);

  for (let i in course) {
    let tmpArr = countArr.filter((e) => e[0].length === course[i] && e[1] > 1);
    let max = Math.max(...tmpArr.map((e) => e[1]));
    tmpArr.forEach((e) => {
      if (e[1] === max) {
        answer.push(e[0]);
      }
    });
  }
  return answer.sort();
}

let orders = ["XYZ", "XWY", "WXA"];
let course = [2, 3, 4];
console.log(solution(orders, course));

// 가장 1차원적인 방법으로, 문자열의 길이가 같을 때도 부분만 떼서 처리 할 수 있는 능력이 필요하다.
// 순열과 조합을 올바르게 이해하고, 이를 코드로 구현 할 수 있는 능력이 필요하다.
// 테스트케이스 : 1개 [O] / 2개 [X]
function solution(orders, course) {
  const answer = [];
  orders.sort((a, b) => a.length - b.length);

  for (let i = 0; i < orders.length; i++) {
    for (let j = i + 1; j < orders.length; j++) {
      if (orders[j].includes(orders[i])) {
        answer.push(orders[i]);
        break;
      }
    }
  }

  let result = answer.filter((each) => course.includes(each.length));

  return result.sort();
}
