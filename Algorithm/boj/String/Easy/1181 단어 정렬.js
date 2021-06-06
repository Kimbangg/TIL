function solution() {
  strs.sort((a, b) => {
    if (a.length === b.length) {
      return a > b ? 1 : -1;
    }

    return a.length - b.length;
  });
}

let strs = [
  "but",
  "i",
  "wont",
  "hesitate",
  "no",
  "more",
  "no",
  "more",
  "it",
  "cannot",
  "wait",
  "im",
  "yours",
];
solution();
