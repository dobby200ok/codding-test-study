function solution(input) {
  const length1 = input[0].length,
    length2 = input[1].length,
    answer = Array.from({ length: length1 + 1 }, () =>
      Array(length2 + 1).fill(0)
    );

  for (let i = 1; i <= length1; i++) {
    for (let n = 1; n <= length2; n++) {
      answer[i][n] =
        input[0][i - 1] === input[1][n - 1]
          ? answer[i - 1][n - 1] + 1
          : Math.max(answer[i - 1][n], answer[i][n - 1]);
    }
  }

  return answer[length1][length2];
}

console.log(solution(["ACAYKP", "CAPCAK"])); // 4 : solve
