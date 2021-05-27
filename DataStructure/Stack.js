var Stack = (function () {
  function Stack() {
    this.top = null;
    this.count = 0;
  }
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  Stack.prototype.push = function (data) {
    var node = new Node(data);
    node.next = this.top;
    this.top = node;
    return ++this.count;
  };
  Stack.prototype.pop = function () {
    if (!this.top) {
      // stack underflow 방지
      return false;
    }
    var data = this.top.data;
    this.top = this.top.next;
    // 예전 this.top의 메모리 정리
    this.count--;
    return data;
  };
  Stack.prototype.stackTop = function () {
    return this.top.data;
  };
  return Stack;
})();

var stack = new Stack();
stack.push(1); // 1
stack.push(3); // 2
stack.push(5); // 3
stack.pop(); // 5
stack.stackTop(); // 3
