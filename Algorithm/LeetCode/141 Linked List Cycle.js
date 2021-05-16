function solution(head) {
  let walker = head;
  let runner = head;

  while (runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;
    if (walker === runner) {
      return true;
    }
  }
  return false;
}
