function solution() {
  const result = [];

  for (let i = 0; i < 26; i++) {
    result[i] = s.indexOf(String.fromCharCode(i + 97));
  }

  console.log(result);
}

const s = "baekjoon";
solution();
