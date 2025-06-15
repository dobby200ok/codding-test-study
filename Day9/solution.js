function solution(N, S, input) {
  const valid = [];

  function dfs(i, sum, visited) {
    if (i >= N) return;

    const value = sum + input[i];

    if (value === S) valid.push([...visited, input[i]]);

    dfs(i + 1, value, [...visited, input[i]]);
    dfs(i + 1, sum, visited);
  }

  dfs(0, 0, []);

  const answer = valid.length;

  return answer;
}

console.log(solution(5, 0, [-7, -3, -2, 5, 8])); // 1 : solve
