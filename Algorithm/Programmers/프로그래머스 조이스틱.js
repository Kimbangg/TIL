function solution(name) {
  let answer = 0;
  let a = "A".charCodeAt(0);
  let z = "Z".charCodeAt(0);
  let tmpCount = 0;
  for (let i = 0; i < name.length; i++) {
    let current = name[i].charCodeAt(0);
    let fromZ = z - current + 1;
    let fromA = current - a;
    let isReverse = false;
    answer += fromZ > fromA ? fromA : fromZ;

    // --- 여기서까지는 위,아래 조작을 담당 ---

    // --- 여기서부터는 오른쪽 또는 좌측 움직임을 담당 ---
    if (current === a) {
      let nextIdx = i + 1;
      let nextValue = name.charAt(nextIdx);
      let countA = 0;
      while (nextIdx < name.length && nextValue === "A") {
        nextIdx++;
        countA++;
      }
      if (nextValue !== "A" && nextIdx === name.length - 1) {
        isReverse = true;
        answer += 1;
      } else if (nextIdx !== name.length - 1) {
        answer += countA;
      }
    } else {
      if (isReverse === true || i === name.length - 1) {
        isReverse = false;
        continue;
      } else {
        console.log("else");
        answer += 1;
      }
    }
  }
  return answer;
}

let example = "JAZ";
let result = solution(example);
console.log(result);
