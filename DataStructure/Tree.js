var Tree = function () {
  function Tree() {
    this.count = 0;
    this.root;
  }

  function Node(data) {
    this.data = data;
    this.left;
    this.right;
  }

  function _insert(root, node) {
    if (!root) return node;
    if (node.data < root.data) {
      root.left = _insert(root.left, node);
      return root;
    } else {
      root.right = _insert(root.right, node);
      return root;
    }
    return root;
  }

  Tree.prototype.add = function (data) {
    var node = new Node(data);

    if (this.count === 0) {
      this.root = node;
    } else {
      _insert(this.root, node);
    }
    return ++this.count;
  };

  function _get(data, node) {
    if (node) {
      i;
    }
  }
};
