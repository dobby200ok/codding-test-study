function solution(N, C, xi) {
  xi.sort((a, b) => a - b);

  let left = 1,
    right = xi[N - 1] - xi[0],
    answer = 0;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    let count = 1,
      last = xi[0];

    for (let i = 1; i < N; i++) {
      if (xi[i] - last >= mid) {
        count++;
        last = xi[i];
      }
    }

    if (count >= C) {
      answer = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return answer;
}

console.log(solution(5, 3, [1, 2, 8, 4, 9])); // 3 : solve
