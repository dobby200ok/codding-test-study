function solution(input) {
  const n = Number(input[0]),
        ops = input.slice(1).map(Number),
        heap = [],
        answer = [];

  function push(x) {
    heap.push(x);
    let i = heap.length - 1;
    while (i > 0) {
      let parent = Math.floor((i - 1) / 2);
      if (compare(heap[i], heap[parent]) < 0) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
      } else break;
    }
  }

  function pop() {
    if (heap.length === 0) return 0;

    const min = heap[0],
          last = heap.pop();
          
    if (heap.length === 0) return min;

    heap[0] = last;
    let i = 0;

    while (true) {
      let left = i * 2 + 1,
          right = i * 2 + 2,
          smallest = i;

      if (left < heap.length && compare(heap[left], heap[smallest]) < 0) {
        smallest = left;
      }
      if (right < heap.length && compare(heap[right], heap[smallest]) < 0) {
        smallest = right;
      }
      if (smallest === i) break;
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }
    return min;
  }

  function compare(a, b) {
    const absA = Math.abs(a),
          absB = Math.abs(b);
    if (absA !== absB) return absA - absB;
    return a - b;
  }

  for (let x of ops) {
    if (x === 0) {
      answer.push(pop());
    } else {
      push(x);
    }
  }

  return answer;
}

console.log(solution([18, 1, -1, 0, 0, 0, 1, 1, -1, -1, 2, -2, 0, 0, 0, 0, 0, 0, 0])); // [-1, 1, 0, -1, -1, 1, 1, -2, 2, 0] : solve