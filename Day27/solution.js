function solution(N, M, map) {
  const dx = [0, 0, 1, -1],
    dy = [1, -1, 0, 0];

  const isValidYn = (x, y) => x >= 0 && y >= 0 && x < N && y < M;

  const calc = () => {
    const newMap = map.map((row) => [...row]);
    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (map[x][y] === 0) continue;
        let s = 0;
        for (let d = 0; d < 4; d++) {
          const nx = x + dx[d],
            ny = y + dy[d];
          if (isValidYn(nx, ny) && map[nx][ny] === 0) s++;
        }
        newMap[x][y] = Math.max(0, map[x][y] - s);
      }
    }
    map = newMap;
  };

  const getCountDFS = () => {
    const visited = Array.from({ length: N }, () => Array(M).fill(false));
    let count = 0;

    const dfs = (x, y) => {
      visited[x][y] = true;
      for (let d = 0; d < 4; d++) {
        const nx = x + dx[d],
          ny = y + dy[d];
        if (isValidYn(nx, ny) && !visited[nx][ny] && map[nx][ny] > 0)
          dfs(nx, ny);
      }
    };

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < M; y++) {
        if (map[x][y] > 0 && !visited[x][y]) {
          count++;
          dfs(x, y);
        }
      }
    }

    return count;
  };

  let answer = 0;
  while (true) {
    const c = getCountDFS();
    if (c >= 2) return answer;
    if (c === 0) return 0;
    calc();
    answer++;
  }
}

console.log(
  solution(5, 7, [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 2, 4, 5, 3, 0, 0],
    [0, 3, 0, 2, 5, 2, 0],
    [0, 7, 6, 2, 4, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
  ])
); // 2 : solve
