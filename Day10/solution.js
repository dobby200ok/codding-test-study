function solution(N, M, buttons) {
  const max = 500000,
    button = buttons.map((e) => String(e));

  let answer = Math.abs(N - 100);

  for (let i = 0; i <= max; i++) {
    const channel = String(i),
      set = [...new Set(channel.split("").filter((c) => button.includes(c)))];

    if (set.length > 0) {
      continue;
    }

    answer = Math.min(answer, channel.length + Math.abs(N - i));
  }

  return answer;
}

console.log(solution(5457, 3, [6, 7, 8])); // 6 : solve
console.log(solution(100, 5, [0, 1, 2, 3, 4])); // 0 : solve
console.log(solution(500000, 8, [0, 2, 3, 4, 6, 7, 8, 9])); // 11117 : solve
console.log(solution(100, 3, [1, 0, 5])); // 0 : solve
console.log(solution(14124, 1, [0])); // 5 : solve
console.log(solution(1, 9, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 2 : solve
console.log(solution(80000, 2, [8, 9])); // 2228 : solve
