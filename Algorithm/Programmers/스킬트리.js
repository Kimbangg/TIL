// 최악의 정답.
function solution(skill, skill_trees) {
  let answer = 0;
  // 이 skilt은 나중에 합치는 용도로 시용 될 수 있으니
  // 새로운 변수를 주는게 맞았다.
  // skill = skill.split("");
  let newArr = skill.split("");

  let tmpStr = "";

  // 불 필요한 배열과 연산이다. 실제 길이 만큼 합치면 된다.
  // const can_used = [];
  // for (let i = 0; i < skill.length; i++) {
  //   tmpChar += skill[i];
  //   can_used.push(tmpChar);
  // }

  for (let i = 0; i < skill_trees.length; i++) {
    tmpStr = skill_trees[i]
      .split("")
      .filter((ele) => newArr.includes(ele))
      .join("");

    if (tmpStr === skill.substirng(0, str.length)) {
      count += 1;
    }
  }

  return answer;
}
