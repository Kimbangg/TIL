function solution(a, b, c) {
  // 생산 비용이 판매 수익보다 더 크면 손익 분기점을 넘을 수 없음.
  if (b > c) {
    return -1;
  } else {
    return A / (C - B) + 1;
  }
}
