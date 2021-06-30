function solution() {
  let answer = 0;
  const newPerDay = perDay.slice().sort((a, b) => a - b);
  const new_trees = [];

  for (let i = 0; i < newPerDay.length; i++) {
    const idx = perDay.indexOf(newPerDay[i]);
    new_trees.push(trees[idx]);
  }

  // 순서대로 정렬 했기 때문에, 날짜를 성장 속도에 곱해 준 다음
  // 더하면 된다는 사실을 알게 되었음.
  for (let i = 0; i < new_trees.length; i++) {
    answer += new_trees[i] + newPerDay[i] * i;
  }

  console.log(answer);
}

const trees = [1, 3, 2, 4, 6];
const perDay = [2, 7, 3, 4, 1];
solution();
