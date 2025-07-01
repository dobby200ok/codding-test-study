function solution(N, top) {
  const answer = Array(N).fill(0),
    tops = top.reverse();

  for (let i = 0; i < N; i++) {
    for (let n = i; n < N; n++) {
      if (tops[n] > tops[i]) {
        answer[i] = N - n;
        break;
      }
    }
  }
  return answer.reverse();
}

console.log(solution(5, [6, 9, 5, 7, 4])); // [0, 0, 2, 2, 4]
