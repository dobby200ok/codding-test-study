function isValid(maps, y, x, input) {
  for (let i = 0; i < 9; i++) {
    const areaY = Math.floor(y / 3) * 3 + Math.floor(i / 3),
      areaX = Math.floor(x / 3) * 3 + (i % 3);
    if (
      maps[y][i] === input ||
      maps[i][x] === input ||
      maps[areaY][areaX] === input
    ) {
      return false;
    }
  }
  return true;
}

function dfs(maps) {
  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (maps[y][x] === 0) {
        for (let input = 1; input <= 9; input++) {
          if (isValid(maps, y, x, input)) {
            maps[y][x] = input;
            if (dfs(maps)) {
              return true;
            }
            maps[y][x] = 0;
          }
        }
        return false;
      }
    }
  }
  return true;
}

function solution(maps) {
  dfs(maps);
  return maps;
}

console.log(
  solution([
    [0, 3, 5, 4, 6, 9, 2, 7, 8],
    [7, 8, 2, 1, 0, 5, 6, 0, 9],
    [0, 6, 0, 2, 7, 8, 1, 3, 5],
    [3, 2, 1, 0, 4, 6, 8, 9, 7],
    [8, 0, 4, 9, 1, 3, 5, 0, 6],
    [5, 9, 6, 8, 2, 0, 4, 1, 3],
    [9, 1, 7, 6, 5, 2, 0, 8, 0],
    [6, 0, 3, 7, 0, 1, 9, 5, 2],
    [2, 5, 8, 3, 9, 4, 7, 6, 0],
  ])
); // [
// [1, 3, 5, 4, 6, 9, 2, 7, 8],
// [7, 8, 2, 1, 3, 5, 6, 4, 9],
// [4, 6, 9, 2, 7, 8, 1, 3, 5],
// [3, 2, 1, 5, 4, 6, 8, 9, 7],
// [8, 7, 4, 9, 1, 3, 5, 2, 6],
// [5, 9, 6, 8, 2, 7, 4, 1, 3],
// [9, 1, 7, 6, 5, 2, 3, 8, 4],
// [6, 4, 3, 7, 8, 1, 9, 5, 2],
// [2, 5, 8, 3, 9, 4, 7, 6, 1],
// ] : solve
