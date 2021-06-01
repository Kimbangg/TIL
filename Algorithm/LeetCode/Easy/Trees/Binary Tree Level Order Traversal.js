function solution(root) {
  if (!root) return [];

  const res = [];
  const queue = [root];

  while (queue) {
    let n = queue.length;
    const level = [];

    for (let i = 0; i < n; i++) {
      let node = queue.pop();
      level.push(node.val);

      if (node.left !== null) queue.unshift(node.left);
      if (node.right !== null) queue.unshift(node.right);
    }
    res.push(level);
  }
  return res;
}
