function solution(N, input) {
  input.sort((a, b) => a - b);

  let closest = Infinity,
    answer = [];

  for (let i = 0; i < N - 2; i++) {
    let left = i + 1,
      right = N - 1;

    while (left < right) {
      const sum = input[i] + input[left] + input[right];

      if (Math.abs(sum) < Math.abs(closest)) {
        closest = sum;
        answer = [input[i], input[left], input[right]];
      }

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        return [input[i], input[left], input[right]];
      }
    }
  }

  return answer;
}

console.log(solution(5, [-2, 6, -97, -6, 98]));
console.log(solution(7, [-2, -3, -24, -6, 98, 100, 61]));
