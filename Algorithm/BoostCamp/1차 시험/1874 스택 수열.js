function solution(nums) {

  let index = 1;
  let message = "";
  const stack = [];

  for ( let i = 0; i < nums.length; i++ ) {
    
    const current = nums[i];

    while ( index <= current ) {
      stack.push(index);
      index += 1;
      message += "+\n";
    }

    if ( stack[stack.length-1] === current ) {
      message += "-\n";
      stack.pop();
    } else {
      message = "NO";
      break;
    }
  }
}

const n = 8;
const nums = [4,3,6,8,7,5,2,1];