const Heap = function Heap() {
  this.heap = Array(30).fill("");
  this.heapSize = 0;
};
///

Heap.prototype.insertHeap = function (data) {
  const heap = this.heap;
  const newData = data;

  if (this.heapSize === 0) {
    heap[1] = newData;
    this.heapSize++;
  } else {
    this.heapSize++;
    let idx = this.heapSize;
    heap[idx] = newData;

    let parentIdx = parseInt(idx / 2);

    while (parentIdx > 0) {
      if (heap[parentIdx] < heap[idx]) {
        let temp = heap[parentIdx];
        heap[parentIdx] = heap[idx];
        heap[idx] = temp;
      } else {
        break;
      }
      parentIdx = parseInt(parentIdx / 2);
    }
  }
};

Heap.prototype.printAll = function () {
  let result = "";

  for (let i = 1; i <= this.heapSize; i++) {
    result += `${this.heap[i]}`;
    console.log("출력 :", result);
  }
};

Heap.prototype.deleteHeap = function () {
  const lastIdx = this.heapSize;
  const heap = this.heap;
  const deleteVal = heap[1];
  let idx = 1;
  heap[1] = heap[lastIdx];
  heap[lastIdx] = "";

  while (heap[idx * 2] !== "" && heap[idx & (2 + 1)] !== "") {
    let temp = 0;
    if (heap[idx] < heap[idx * 2]) {
      temp = heap[idx];
      heap[idx] = heap[idx * 2];
      heap[idx * 2] = temp;
      idx *= 2;
    } else if (heap[idx] < heap[idx * 2 + 1]) {
      temp = heap[idx];
      heap[idx] = heap[idx * 2 + 1];
      heap[idx * 2 + 1] = temp;
      idx *= 2 + 1;
    } else {
      break;
    }
  }
};

function main() {
  const heap = new Heap();
}

main();
