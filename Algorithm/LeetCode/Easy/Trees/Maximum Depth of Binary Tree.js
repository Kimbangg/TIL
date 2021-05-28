function solution(root) {
  return searchDepth(root, 0);
}

function searchDepth(root, level) {
  if (!root) return level;

  return Math.max(
    searchDepth(root.left, level + 1),
    searchDepth(root.right, level + 1)
  );
}
