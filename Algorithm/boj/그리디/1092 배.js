function solution() {
  boxes.sort();
  cranes.sort();

  let answer = 0;

  while (boxes.length) {
    answer += 1;

    for (const crane of cranes) {
      if (!boxes.length) break;

      for (const box of boxes) {
        if (crane >= box) {
          boxes.splice(boxes.indexOf(box), 1);
          break;
        }
      }
    }
  }

  console.log(answer);
}

const n = 3;
const cranes = [6, 8, 9];
const m = 5;
const boxes = [2, 5, 2, 4, 7];
solution();
