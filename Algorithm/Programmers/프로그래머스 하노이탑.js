function hanoi(n, start, to, end) {
  if (n === 1) {
    console.log(start, end);
  } else {
    hanoi(n - 1, start, end, to);
    console.log(start, end);
    hanoi(n - 1, to, start, end);
  }
}

hanoi(3, "A", "B", "C");
