function solution(N, Ai) {
  const arr = Array.from({ length: N }, () => [1, 1]);

  for (let i = 1; i < N; i++) {
    for (let n = 0; n < i; n++) {
      if (Ai[i] > Ai[n]) {
        arr[i][0] = Math.max(arr[i][0], arr[n][0] + 1);
      }
    }
  }

  for (let i = N - 2; i >= 0; i--) {
    for (let n = N - 1; n > i; n--) {
      if (Ai[i] > Ai[n]) {
        arr[i][1] = Math.max(arr[i][1], arr[n][1] + 1);
      }
    }
  }

  let answer = 0;
  for (let i = 0; i < N; i++) {
    answer = Math.max(answer, arr[i][0] + arr[i][1] - 1);
  }

  return answer;
}

console.log(solution(10, [1, 5, 2, 1, 4, 3, 4, 5, 2, 1])); // 7 : solve
