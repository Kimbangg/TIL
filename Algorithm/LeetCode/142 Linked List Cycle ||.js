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
  let walker = head,
    runner = head;

  while (runner && runner.next) {
    walker = walker.next;
    runner = runner.next.next;

    if (walker === runner) {
      walker = head;
      while (walker !== runner) {
        walker = walker.next;
        runner = runner.next;
      }
      return `tail connect to node index ${walker}`;
    }
  }
  return `tail connect to nothing`;
};
