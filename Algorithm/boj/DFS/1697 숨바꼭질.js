const [n, target] = [5, 17];
const visited = Array(1000001).fill(0);

const queue = [n, 0];

while (queue.length) {
  let cur = queue.shift();
  let cnt = queue.shift();

  if (cur === target) {
    break;
  }
  visited[cur] = 1;

  if (cur - 1 >= 0 && visited[cur - 1] === 0) {
    queue.push(cur - 1, cnt + 1);
  }

  if (cur + 1 <= 1000000 && visited[cur + 1] === 0) {
    queue.push(cur + 1, cnt + 1);
  }

  if (cur * 2 <= 1000000 && visited[cur * 2] === 0) {
    queue.push(cur * 2, cnt + 1);
  }
}

console.log(queue[target]);
