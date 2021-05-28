function solution(root) {
  let tree = [{ node: root, depth: 1 }];

  let current = tree.pop();
  let max = 0;

  while (current && current.node) {
    let node = current.node;

    if (node.left) {
      tree.push({ node: node.left, depth: current.depth + 1 });
    }
    if (node.right) {
      tree.push({ node: node.right, depth: current.depth + 1 });
    }

    if (current.depth > max) {
      max = current.depth;
    }
    current = tree.pop();
  }
  return max;
}
