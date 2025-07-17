function solution(n, results) {
  const game = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (const [w, l] of results) {
    game[w][l] = 1;
    game[l][w] = -1;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (game[i][k] === 1 && game[k][j] === 1) {
          game[i][j] = 1;
          game[j][i] = -1;
        } else if (game[i][k] === -1 && game[k][j] === -1) {
          game[i][j] = -1;
          game[j][i] = 1;
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let count = 0;
    for (let j = 1; j <= n; j++) {
      if (i !== j && game[i][j] !== 0) {
        count++;
      }
    }
    if (count === n - 1) answer++;
  }

  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
); // 2 : solve
