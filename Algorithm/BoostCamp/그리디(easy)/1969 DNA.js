function solve() {
  let intersection = "";
  let count = 0;

  for (let i = 0; i < M; i++) {
    const alphabet = Array(26).fill(0);

    for (let j = 0; j < N; j++) {
      alphabet[DNA[j][i].charCodeAt(0) - 65] += 1;
    }

    intersection += String.fromCharCode(
      alphabet.indexOf(Math.max(...alphabet)) + 65
    );
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (DNA[i][j] != intersection[j]) {
        count += 1;
      }
    }
  }

  console.log(intersection);
  console.log(count);
}

const [N, M] = [5, 8];
const DNA = ["TATGATAC", "TAAGCTAC", "AAAGATCC", "TGAGATAC", "TAAGATGT"];
solve();

// 출제자의 의도에 대해서 고민해보자
