function solution(bracket) {
  const stack = [];

  for ( let i = 0; i < bracket.length; i++ ) {

    const cur = bracket[i];

    if ( cur === "(" || cur === "[" ) {
      stack.push(cur);
    }

    else {

      if ( cur === ")" && stack.length ) {

        if ( stack[stack.length-1] === "(" ) {
          stack[stack.length-1] = 2;
        }

       else {
          let tmp = 0;

          for ( let j = stack.length - 1; j >= 0; j-- ) {
            if ( stack[i] === "(" ) {
              stack[stack.length-1] = tmp * 2;
              break;
            }
            else {
              tmp += stack[i];
              stack.pop();
            }
          }
        }

      }

      else if ( cur === "]" && stack.length ) {

        if ( stack[stack.length - 1] === "[" ) {
          stack[stack.length-1] = 3;
        }

        else {
          let tmp = 0;

          for ( let j = stack.length - 1; j >= 0; j-- ) {
            if ( stack[i] === "[" ) {
              stack[stack.length-1] = tmp * 3;
              break;
            }
            else {
              tmp += stack[i];
              stack.pop();
            }
          }
        }

      }
    }

  }

}

const bracket = "(()[[]])([])";
solution(bracket);

// (2 [ )


