/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
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
};
