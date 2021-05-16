/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (!head || !head.next) return null;

  let walker = head,
    runner = head;

  while (runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;

    if (walker === runner) {
      break;
    }
  }

  if (walker !== runner) return null;

  walker = head;

  while (walker !== runner) {
    walker = walker.next;
    runner = runner.next;
  }

  return walker;
};
