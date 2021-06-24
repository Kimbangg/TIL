function solution(n, wanted) {
  const apartment = [];

  for (let i = 0; i < 15; i++) {
    apartment[i] = new Array(14);
    apartment[i][0] = 1;
    apartment[0][i] = i + 1;
  }

  for (let i = 1; i < 15; i++) {
    for (let j = 1; j < 15; j++) {
      apartment[i][j] = apartment[i - 1][j] + apartment[i][j - 1];
    }
  }

  for (let i = 0; i < n; i++) {
    const [floor, room] = wanted[i];

    console.log(apartment[floor][room - 1]);
  }
}

const n = 2;

const wanted = [
  [1, 3],
  [2, 3],
];

solution(n, wanted);
