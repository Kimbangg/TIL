function solution() {
  const nums = [];

  for (let i = 0; i < student[0].length; i++) {
    const map = Array(10).fill(0);

    for (let j = 0; j < student.length; j++) {
      map[student[j][i]] += 1;
    }

    const max = Math.max(...map);

    max === 1 ? nums.push(0) : nums.push(map.indexOf(max));
  }

  const count = Array(student.length).fill(0);

  for (let i = 0; i < student.length; i++) {
    for (let j = 0; j < student[i].length; j++) {
      if (student[i][j] === Number(nums[i])) {
        count[i] += 1;
      }
    }
  }

  console.log(count.indexOf(Math.max(...count)) + 1);
}

const student = [
  [2, 3, 1, 7, 3],
  [4, 1, 9, 6, 8],
  [5, 5, 2, 4, 4],
  [6, 5, 2, 6, 7],
  [8, 4, 2, 2, 2],
];

solution();
