function solution(input1, input2) {
  const length1 = input1.length,
    length2 = input2.length,
    dp = Array.from({ length: length1 + 1 }, () => Array(length2 + 1).fill(""));

  for (let i = 1; i <= length1; i++) {
    for (let n = 1; n <= length2; n++) {
      if (input1[i - 1] === input2[n - 1]) {
        dp[i][n] = dp[i - 1][n - 1] + input1[i - 1];
      } else {
        dp[i][n] =
          dp[i - 1][n].length >= dp[i][n - 1].length
            ? dp[i - 1][n]
            : dp[i][n - 1];
      }
    }
  }

  const lcs = dp[length1][length2];
  return lcs.length > 0 ? [lcs.length, lcs] : [0];
}

console.log(solution("ACAYKP", "CAPCAK")); // [4, 'ACAK'] : solve
