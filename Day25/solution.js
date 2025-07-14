const c = 1000000007n,
  map = new Map();

function solution(n) {
  const N = BigInt(n);

  if (N <= 2n) return 1n;
  if (map.has(N)) return map.get(N);

  let answer;

  if (N % 2n === 0n) {
    const k = N / 2n;

    answer = (solution(k) * (2n * solution(k - 1n) + solution(k))) % c;
  } else {
    const k = (N + 1n) / 2n,
      aft = solution(k),
      bef = solution(k - 1n);

    answer = (aft * aft + bef * bef) % c;
  }

  map.set(N, answer);

  return answer;
}

console.log(Number(solution(1000))); // solve : 517691607
