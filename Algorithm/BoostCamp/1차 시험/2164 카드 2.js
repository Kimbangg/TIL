function solution (n) {

  const cards = Array.from({length:n}, (v,i) => i+1);

  while ( cards.length !== 1 ) {

    cards.shift();
    cards.push(cards.shift());

  }

  console.log(cards);

}

const n = 6;
solution(n);