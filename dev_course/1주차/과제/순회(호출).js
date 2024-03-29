class Tree {
  constructor(val) {
    this.val = val;
    this.leftNode = null;
    this.rightNode = null;
  }

  setLeftNode(node) {
    this.leftNode = node;
  }

  setRightNode(node) {
    this.rightNode = node;
  }

  // 전위순회 [ root -> left -> right]
  preOrderTree(node) {
    if (node === null) {
      return;
    }

    const stack = [];
    stack.push(node);

    while (stack.length > 0) {
      let poped = stack.pop();
      console.log(poped.val);
      if (poped.rightNode) {
        stack.push(poped.rightNode);
      }
      if (poped.leftNode) {
        stack.push(poped.leftNode);
      }
    }
  }

  // 중위순회 [ left -> root -> right]
  inOrderTree(node) {
    if (node === null) {
      return;
    }

    let currentNode = node;
    const stack = [];

    while (true) {
      if (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.leftNode;
      } else if (stack.length > 0) {
        currentNode = stack.pop();
        console.log(currentNode.val);
        currentNode = currentNode.rightNode;
      } else {
        break;
      }
    }
  }

  // 후위순회 [ left -> right -> root ]
  postOrderTree(node) {
    if (node == null) {
      return;
    }
    let currentNode = node;
    let stack = [];
    let last_visit_node = null;

    while (true) {
      if (currentNode != null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      } else if (stack.length > 0) {
        peek_node = stack[stack.length - 1];
        if (peek_node.right != null && last_visit_node != peek_node.right) {
          currentNode = peek_node.right;
        } else {
          console.log(peek_node.val);
          last_visit_node = stack.pop();
        }
      } else {
        break;
      }
    }
  }
}

let root = new Tree("A");
let node = new Tree("B");
root.setLeftNode(node);

node = new Tree("C");
root.setRightNode(node);

node = new Tree("D");
root.leftNode.setLeftNode(node);

node = new Tree("E");
root.leftNode.setRightNode(node);

node = new Tree("F");
root.rightNode.setLeftNode(node);

node = new Tree("G");
root.rightNode.setRightNode(node);

// 전위 순회 root -> left sub -> right sub
root.preOrderTree(root);
console.log();

// 중위 순회 left -> root -> right
root.InOrderTree(root);
console.log();

// 후위 순회 왼쪽 -> 오른쪽 -> root
// root.postOrderTree(root);
