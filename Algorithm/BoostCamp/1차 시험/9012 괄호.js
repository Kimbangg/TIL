function isValid(s) {

    const stack = []
    const pair = { ')': '(' }  
    
    for (let i = 0; i < s.length; i++) {
     
      const cur = s[i];
     
      if (pair[cur] === undefined) stack.push(cur)
      else {
        if (stack[stack.length - 1] !== pair[cur]) return false
        stack.pop()
      }
    }

    if (stack.length === 0 ) return true;
    else return false;
  }

function solution(n, bracket) {
  
  for ( let i = 0; i < n; i++ ) {

    const current = bracket[i];

    if ( isValid(current) ) console.log("YES");
    else console.log("NO");
  }
}

const n = 3;
const bracket = [
  "(())())",
  "(((()())()",
  "(()())((()))"
]

solution(n,bracket);