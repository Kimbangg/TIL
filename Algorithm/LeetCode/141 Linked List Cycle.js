function solution(head) {
  let slow = head;
  let fase = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return;
}
ㅋ;
