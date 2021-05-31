function isSymmetric(root) {
  if (!root) return true;

  function compare(left, right) {
    if (left === null && right === null) return true;

    if (left === null || right === null) return false;

    if (left.val !== right.val) return false;

    return compare(left.left, right.right) && compare(left.right, right.left);
  }

  return compare(root.left, root.right);
}
