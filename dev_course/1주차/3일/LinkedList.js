// 전체 코드

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  // Linked List 에서는 head & taill 에 대한 정보 만을 저장한다.
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  // N만큼의 시간이 소요된다.
  find(value) {
    let curNode = this.head;
    // 특정 값을 찾을 때 까지 while-loop
    while (curNode.value !== value) {
      curNode = curNode.next;

      if (curNode === null) {
        return console.log("Can't find this value in Linked List");
      }
    }

    return curNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  // 탐색을 방지 하기 위해서, 삽입 하고자 하는 위치를 Parameter로 전달
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;

    this.length += 1;
  }

  //
  remove(value) {
    let prevNode = this.head;

    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }

    this.length -= 1;
  }

  display() {
    let curNode = this.head;
    let displayString = "[";

    while (curNode !== null) {
      displayString += `${curNode.value}, `;
      curNode = curNode.next;
    }

    displayString = displayString.substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }

  size() {
    return this.length;
  }
}

const linkedList = new SingleLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
linkedList.display();
linkedList.find(3);
linkedList.remove(3);
linkedList.insert(linkedList.find(2), 10);
linkedList.display();
console.log(linkedList.size());
