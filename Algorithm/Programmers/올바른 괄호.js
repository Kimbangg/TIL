const pair = {  ")": "(" };

function isValid(s) {
    
  const stack = [];

  for (let i = 0; i < s.length; i++) {
      
    const cur = s[i];

    if (pair[cur] === undefined) {
      stack.push(cur);
    } 
      
    else {
      if (stack[stack.length - 1] !== pair[cur]) return false;
      stack.pop();
    }
      
  }

  if (stack.length) return false;
  return true;
}


function solution(s){

    let answer = true;

    if ( ! isValid(s) ) answer = false;
    
    return answer;
}