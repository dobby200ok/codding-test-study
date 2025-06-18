function solution(N, M, ...inputs) {
  const [start, end] = inputs.pop(),
    map = new Map();

  for (let b of inputs) {
    const [s, e, c] = b;

    map.set(s, map.has(s) ? [...map.get(s), [e, c]] : [[e, c]]);
  }

  const cost = Array(N + 1).fill(Infinity);

  function dfs(x, sum) {
    if (sum >= cost[x]) return;
    cost[x] = sum;

    const s = map.get(x);
    if (!s) return;

    for (const [e, c] of s) {
      dfs(e, sum + c);
    }
  }

  dfs(start, 0);

  const answer = cost[end];

  return answer;
}

console.log(
  solution(
    5,
    8,
    [1, 2, 2],
    [1, 3, 3],
    [1, 4, 1],
    [1, 5, 10],
    [2, 4, 2],
    [3, 4, 1],
    [3, 5, 1],
    [4, 5, 3],
    [1, 5]
  )
); // 4 : solve;
