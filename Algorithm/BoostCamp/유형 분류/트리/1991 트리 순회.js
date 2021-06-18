const N = 7;

let nodes = ["A B C", "B D .", "C E F", "E . .", "F . G", "D . .", "G . ."];

nodes = nodes.map((line) =>
  line.split(" ").map((n) => {
    if (n === ".") return -1;
    else return n.charCodeAt(0) - "A".charCodeAt(0) + 1;
  })
);

let lc = Array(N + 1).fill(0);
let rc = Array(N + 1).fill(0);
let p = Array(N + 1).fill(0);

for (let i = 0; i < nodes.length; i++) {
  let [curr, l, r] = nodes[i];
  lc[curr] = l;
  rc[curr] = r;
  if (l !== -1) p[l] = curr;
  if (r !== -1) p[r] = curr;
}
// console.log(lc);
// console.log(rc);
// console.table(p);
let answer = "";
const preorder = (curr) => {
  answer += getChar(curr);
  if (lc[curr] !== -1) preorder(lc[curr]);
  if (rc[curr] !== -1) preorder(rc[curr]);
};

const inorder = (curr) => {
  if (lc[curr] !== -1) inorder(lc[curr]);
  answer += getChar(curr);
  if (rc[curr] !== -1) inorder(rc[curr]);
};

const postorder = (curr) => {
  if (lc[curr] !== -1) postorder(lc[curr]);

  if (rc[curr] !== -1) postorder(rc[curr]);
  answer += getChar(curr);
};

const getChar = (n) => {
  return String.fromCharCode(n - 1 + "A".charCodeAt(0));
};

preorder(1);
answer += "\n";

inorder(1);
answer += "\n";

postorder(1);

console.log(answer);
