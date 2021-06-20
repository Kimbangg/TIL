function findPos(index, name, arrName) {
  let right_index = (index + 1) % name.length;
  let left_index = (index - 1 + name.length) % name.length;
  let moveCount = 1;

  while (right_index != index || left_index != index) {
    if (
      name[right_index] !== "A" &&
      arrName[right_index] !== name[right_index]
    ) {
      return {
        index: right_index,
        diff: moveCount,
      };
    }

    if (name[left_index] !== "A" && arrName[left_index] !== name[left_index]) {
      return {
        index: left_index,
        diff: moveCount,
      };
    }

    right_index = ++right_index % name.length;
    left_index = (--left_index + name.length) % name.length;
    moveCount++;
  }

  return null;
}

function checkCount(n) {
  return Math.min(
    n.charCodeAt(0) - "A".charCodeAt(0),
    "Z".charCodeAt(0) - n.charCodeAt(0) + 1
  );
}

function solution(name) {
  let index = 0;
  let answer = 0;
  let arrName = Array(name.length).fill("A");

  while (arrName.join("") !== name) {
    arrName[index] = name[index];
    answer += checkCount(name[index]);

    let find_result = findPos(index, name, arrName);
    if (find_result !== null) {
      answer += find_result.diff;
      index = find_result.index;
    }
  }
  return answer;
}
