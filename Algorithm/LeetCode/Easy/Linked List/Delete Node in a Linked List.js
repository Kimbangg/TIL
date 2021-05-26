function solution(node) {
  node.val = node.next.val;
  nodex.next = node.next.next;
}
