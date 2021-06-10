function solution() {
  const map = {};
  const answer = [];

  for (let i = 0; i < haved.length; i++) {
    map[haved[i]] = (map[haved[i]] || 0) + 1;
  }

  for (let j = 0; j < checked.length; j++) {
    if (map[checked[j]]) {
      answer.push(1);
    } else {
      answer.push(0);
    }
  }

  return answer.join(" ");
}

let haved = [6, 3, 2, 10, -10];
let checked = [10, 9, -5, 2, 3, 4, 5, -10];
console.log(solution());
