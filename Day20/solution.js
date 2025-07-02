function heapify(compare) {
  const heap = [null];

  function insert(value) {
    heap.push(value);

    let current = heap.length - 1;

    while (current > 1) {
      let parent = Math.floor(current / 2);

      if (compare(heap[current], heap[parent])) {
        [heap[current], heap[parent]] = [heap[parent], heap[current]];
        current = parent;
      } else {
        break;
      }
    }
  }

  function remove() {
    if (heap.length === 1) return null;
    if (heap.length === 2) return heap.pop();

    const top = heap[1];
    heap[1] = heap.pop();

    let current = 1;

    while (true) {
      let left = current * 2,
        right = current * 2 + 1,
        next = current;

      if (left < heap.length && compare(heap[left], heap[next])) {
        next = left;
      }
      if (right < heap.length && compare(heap[right], heap[next])) {
        next = right;
      }
      if (next !== current) {
        [heap[current], heap[next]] = [heap[next], heap[current]];
        current = next;
      } else {
        break;
      }
    }

    return top;
  }

  function peek() {
    return heap[1] ?? null;
  }

  function size() {
    return heap.length - 1;
  }

  return {
    insert,
    remove,
    peek,
    size,
  };
}

function solution(N, input) {
  const max = heapify((a, b) => a > b),
    min = heapify((a, b) => a < b),
    answer = [];

  for (let i = 0; i < N; i++) {
    const num = input[i];

    max.size() === 0 || num <= max.peek() ? max.insert(num) : min.insert(num);

    if (max.size() > min.size() + 1) {
      min.insert(max.remove());
    } else if (min.size() > max.size()) {
      max.insert(min.remove());
    }

    answer.push(max.peek());
  }

  return answer;
}

console.log(solution(7, [1, 5, 2, 10, -99, 7, 5])); // solve : [1, 1, 2, 2, 2, 2, 5]
