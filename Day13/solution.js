function solution(N, K) {
  const max = 100001,
    visited = Array(max).fill(-1),
    count = Array(max).fill(0),
    queue = [];

  queue.push(N);
  visited[N] = 0;
  count[N] = 1;

  while (queue.length) {
    const c = queue.shift();

    for (const j of [c - 1, c + 1, c * 2]) {
      if (j < 0 || j >= max) continue;

      if (visited[j] === -1) {
        visited[j] = visited[c] + 1;
        count[j] = count[c];
        queue.push(j);
      } else if (visited[j] === visited[c] + 1) {
        count[j] += count[c];
      }
    }
  }

  const answer = `${visited[K]}, ${count[K]}`;

  return answer;
}

console.log(solution(5, 17)); // 4, 2 : solve
