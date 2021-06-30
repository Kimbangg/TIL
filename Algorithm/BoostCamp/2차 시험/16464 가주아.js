function solution(num) {
  while (num !== 1) {
    if (num % 2 === 1) {
      return console.log("Gazua");
    }

    num /= 2;
  }

  if (num === 1) return console.log("Go HanGang");
}

const tc = 2;

const nums = [9, 4];

for (let i = 0; i < nums.length; i++) {
  solution(nums[i]);
}
