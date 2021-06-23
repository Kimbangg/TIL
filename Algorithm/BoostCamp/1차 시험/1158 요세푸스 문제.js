function solution() {

  let jump = 0;
  const answer = [];
  
  while ( num.length ) {
    jump += k - 1;

    if ( jump > num.length ) jump %= num.length;

    answer.push(arr[jump]);
    num.splice(jump,1);

  }


}

const [n,k] = [7,3];
const num = Array.length({length : n} , (v,i) => i+1);
solution();
