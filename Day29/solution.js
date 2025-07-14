function solution(n, times) {
  let left = 0,
    right = Math.max(...times) * n,
    answer = right;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2),
      count = times.reduce((sum, time) => sum + Math.floor(mid / time), 0);

    if (count < n) {
      left = mid + 1;
    } else {
      answer = Math.min(answer, mid);
      right = mid - 1;
    }
  }
  return answer;
}

console.log(solution(6, [7, 10])); // 28 : solve
