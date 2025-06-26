function solution(A, Ai) {
  const answer = Array(A).fill(1);

  for (let i = 1; i < A; i++) {
    for (let n = 0; n < i; n++) {
      if (Ai[i] > Ai[n]) {
        answer[i] = Math.max(answer[i], answer[n] + 1);
      }
    }
  }

  return Math.max(...answer);
}

console.log(solution(6, [10, 20, 10, 30, 20, 50])); // 4 : solve
