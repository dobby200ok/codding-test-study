function solution(T, ...input) {
  const answer = input.map((e) => {
    const [N, ...grades] = e;

    grades.sort((a, b) => a[0] - b[0]);

    let max = grades[0][1];

    return grades.reduce((sum, cur) => {
      const [a, b] = cur;

      if (b < max) {
        max = b;
        return sum + 1;
      } else {
        return sum;
      }
    }, 1);
  });

  return answer.join(",");
}

console.log(
  solution(
    2,
    [5, [3, 2], [1, 4], [4, 1], [2, 3], [5, 5]],
    [7, [3, 6], [7, 3], [4, 2], [1, 4], [5, 7], [2, 5], [6, 1]]
  )
); // 4, 3 : solve
