function solution() {
  wanted.sort((a, b) => a - b);

  let answer = 0;
  let iron_stick = wanted.reduce((acc, value) => acc + value);

  for (let i = 0; i < wanted.length - 1; i++) {
    iron_stick -= wanted[i];
    answer += iron_stick * wanted[i];
  }

  console.log(answer);
}

const n = 4;

const wanted = [12, 43, 22, 51, 2, 55, 8, 21, 98, 50];

solution();
