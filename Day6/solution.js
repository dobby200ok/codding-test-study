function solution(N, ...input) {
  const map = input.map((e) => e.split(" ").map(Number));

  const answer = map.reduce((sum, cur, i) => {
    const [x, y] = cur,
      [nextX, nextY] = map[(i + 1) % N];

    return (sum += x * nextY - nextX * y);
  }, 0);

  return (Math.abs(answer) / 2).toFixed(1);
}

console.log(solution(4, "0 0", "0 10", "10 10", "10 0")); // 100.0 : solve
