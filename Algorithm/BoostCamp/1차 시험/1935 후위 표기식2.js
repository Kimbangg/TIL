function solution(n, postfix,value) {

  const alpha = Array(n).fill(0);

  for ( let i = 0; i < n; i++ ) {
    alpha[i] = value[i];
  }

  const stack = [];

  for ( const char of postfix ) {
    
    if ( "A" <= char && char <= "Z" ) {
      stack.push(alpha[char.charCodeAt(0) - "A".charCodeAt(0)]);
      console.log(stack);
    }

    else {
      const num2 = stack.pop();
      const num1 = stack.pop();

      if ( char === "+" ) {
        stack.push(num1 + num2);
      }
      else if ( char === "-") {
        stack.push(num1 - num2);
      }

      else if ( char === "*" ) {
        stack.push(num1 * num2);
      }

      else if ( char === "/" ) {
        stack.push(num1 / num2);
      }

    }
  } 
  console.log(stack);
}

const n = 5;
const postfix = "ABC*+DE/-";
const value = [1,2,3,4,5];
solution(n,postfix, value);