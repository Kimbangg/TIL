function getAllClockNum() {
  const arr = [];

  for (let i = 1111; i <= 9999; i++) {
    let one = ((i % 1000) % 100) % 10;
    let ten = Math.floor(((i % 1000) % 100) / 10);
    let hundred = Math.floor((i % 1000) / 100);

    if (one === 0 || ten === 0 || hundred === 0) {
      continue;
    }

    arr.push(i);
  }

  return arr;
}

function getSelectedClockNum(nums) {
  const arr = [];

  for (let i = 0; i < nums.length; i++) {
    let tmp = Number(nums.join(""));
    nums.push(nums.shift());
    arr.push(tmp);
  }

  arr.sort();

  return arr;
}

function solution() {
  const clock_all = getAllClockNum();
  const clock_selected = getSelectedClockNum(nums);

  let current_clock_num = clock_selected[0];

  for (let i = 0; i < clock_all.length; i++) {
    if (current_clock_num === clock_all[i]) {
      console.log(i);
    }
  }
}

const nums = ["2", "1", "1", "2"];
solution();
