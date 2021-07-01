function solution(num) {
  let divisor = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      if (i !== num) divisor.push(i);
    }
  }

  const sum = divisor.reduce((acc, value) => acc + value);

  if (sum === num) {
    divisor = divisor.join(" + ");
    console.log(num + " = " + divisor);
  } else {
    console.log(num + " is Not Perfect. ");
  }
}

const nums = [6, 12, 28];

for (let i = 0; i < nums.length; i++) {
  solution(nums[i]);
}
