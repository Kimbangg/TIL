function solution(words, N, K) {
  let max = 0;
  const set = new Set([..."antic"]);
  const alphabet = [
    ...new Set(
      words.reduce((acc, word) => {
        return acc.concat([...word]);
      }, [])
    ),
  ];

  if (K < 5) {
    console.log(0);
    return;
  }

  if (alphabet.length <= K) {
    console.log(N);
    return;
  }

  const combination = (start) => {
    if (set.size === K) {
      const count = words.reduce((acc, word) => {
        for (let i = 4; i < word.length - 4; i++) {
          if (!set.has(word[i])) {
            return acc;
          }
        }
        return acc + 1;
      }, 0);
      max = Math.max(max, count);
      return;
    }

    for (let i = start; i < alphabet.length; i++) {
      if (set.has(alphabet[i])) continue;
      set.add(alphabet[i]);
      combination(i);
      set.delete(alphabet[i]);
    }
  };

  combination(0);
  console.log(max);
}

const [N, K] = [3, 6];
let words = ["antarctica", "antahellotica", "antacartica"];
console.log(solution(words, N, K));
