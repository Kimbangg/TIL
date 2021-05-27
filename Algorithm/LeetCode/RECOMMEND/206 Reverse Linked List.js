function solution(head) {
  let current = head;
  let previous = null;

  while (current) {
    let tmp = current.next;
    current.next = previous;
    previous = current;
    current = temp;
  }
  return previous;
}
