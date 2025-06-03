function heapify() {

  const heap = [null];

  function insert(value) {

    heap.push(value);

    let current = heap.length - 1;

    while (current > 1) {

      let parent = Math.floor(current / 2);

      if (heap[parent] > heap[current]) {
        [heap[parent], heap[current]] = [heap[current], heap[parent]];
        current = parent;
      } else {
        break;
      }
    }
  }

  function remove() {

    if (heap.length === 1) return 0;
    if (heap.length === 2) return heap.pop();

    const min = heap[1];

    heap[1] = heap.pop();

    let current = 1;

    while (true) {

      let left = current * 2,
          right = current * 2 + 1,
          smallest = current;

      if (left < heap.length && heap[left] < heap[smallest]) {
        smallest = left;
      }
      if (right < heap.length && heap[right] < heap[smallest]) {
        smallest = right;
      }
      if (smallest !== current) {
        [heap[current], heap[smallest]] = [heap[smallest], heap[current]];
        current = smallest;
      } else {
        break;
      }
    }

    return min;
  }

  return {
    insert,
    remove
  };
}

function solution(input) {
  const heap = heapify(),
        answer = [];

  for (let x of input) {
    if (x === 0) {
      answer.push(heap.remove());
    } else {
      heap.insert(x);
    }
  }

  return answer;
}

console.log(solution([0, 12345678, 1, 2, 0, 0, 0, 0, 32])) // solve [0, 1, 2, 12345678, 0]