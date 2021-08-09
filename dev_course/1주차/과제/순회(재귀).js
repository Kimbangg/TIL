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

  // 중위순회 [ left -> root -> right]
  inOrderTree(node) {
    if (!node) {
      return;
    }

    return [
      ...this.inOrderTree(node.leftNode),
      node.val,
      ...this.inOrderTree(node.rightNode),
    ];
  }

  // 전위순회 [ root -> left -> right]
  preOrderTree(node) {
    if (!node) {
      return;
    }
    return [
      node.val,
      ...this.inOrderTree(node.leftNode),
      ...this.inOrderTree(node.rightNode),
    ];
  }

  // 후위순회 [ left -> right -> root ]
  postOrderTree(node) {
    if (!node) {
      return;
    }
    return [
      ...this.inOrderTree(node.leftNode),
      ...this.inOrderTree(node.rightNode),
      node.val,
    ];
  }
}

const root = new Tree("A");
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

// 중위 순회 left -> root -> right
root.inOrderTree(root);
console.log();

// 전위 순회 root -> left sub -> right sub
root.preOrderTree(root);
console.log();

// 후위 순회 왼쪽 -> 오른쪽 -> root
root.postOrderTree(root);
