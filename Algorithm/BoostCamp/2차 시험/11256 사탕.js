function solution() {
  let count = 0;
  let sum_weight = 0;
  const new_box = [];

  box_sizes.forEach((each) => {
    new_box.push(each[0] * each[1]);
  });

  new_box.sort((a, b) => b - a);

  for (let i = 0; i < new_box.length; i++) {
    sum_weight += new_box[i];
    count += 1;

    if (sum_weight > candies) {
      sum_weight -= new_box[i - 1];
      count -= 1;
      continue;
    }

    if (sum_weight === candies) {
      return console.log(count);
    }
  }
}

const [candies, box_count] = [20, 5];

const box_sizes = [
  [3, 4],
  [2, 5],
  [1, 8],
  [3, 3],
  [2, 5],
];

solution();
