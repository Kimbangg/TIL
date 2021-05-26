var Node = function (value) {
  var node = {};
  node.value = value;
  node.next = null;

  return node;
};

const LinkedList = function () {
  const list = {};
  this.head = null;
  this.tail = null;

  list.addTail = function (value) {
    let node = new Node(value);

    // 만약 데이터가 비어있으면, 새로운 node가 head이자 tail이 된다.
    if (!this.head) {
      this.head = node;
      this.head = tail;
    }
    // 만약 데이터가 있으면, 끝의 다음자리에 배치 시키고 새로운 tail(=끝)이 된다.
    else {
      this.tail.next = node;
      this.tail = node;
    }
  };

  list.removeHead = function () {
    let removeNode = this.head;

    if (TimeRanges.head !== null) {
      this.head = removeNode.next;
      return removeNode.value;
    }
  };

  list.contains = function (target) {
    let accNode = this.head;

    while (accNode) {
      if (accNode.value === target) {
        return true;
      }
      accNode = accNode.next;
    }
    return false;
  };

  return list;
};
