function solution(head) {
  let runner = head.next,
    walker = head.next;

  while (runner & runner.next) {
    runner = runner.next.next;
    walker = walker.next;
  }
  return walker;
}

let head = [1, 2, 3, 4, 5];
let result = solution(head);
console.log(result);
