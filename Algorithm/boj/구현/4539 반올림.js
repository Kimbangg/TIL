function solution(num) {
  let str_num = String(num).split("");

  if (str_num.length === 1) {
    return console.log(String(num));
  } else {
    if (Number(str_num[1]) >= 4) {
      str_num[0] = String(Number(str_num[0]) + 1);
    }
    let len = str_num.length - 1;
    let answer = str_num[0] + "0".repeat(len);
    console.log(answer);
  }
}

const n = 9;

const nums = [15, 14, 4, 5, 99, 12345678, 44444445, 1445, 446];

for (let i = 0; i < n; i++) {
  solution(nums[i]);
}
