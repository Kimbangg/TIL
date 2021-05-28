function isValidBST(root) {
  let max = Infinity;
  let min = -Infinity;

  return isValid(root, min, max);
}

function isValid(root, min, max) {
  if (!root) return true;

  if (root.val <= min || root.val >= max) {
    return false;
  }

  return (
    isValid(root.left, min, root.val) && isValid(root.right, root.val, max)
  );
}
