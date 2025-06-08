function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

function solution([T, ...input]) {
  const answer = input.map(([M, N, x, y]) => {
    const max = lcm(M, N);
    let k = x;

    while (k <= max) {
      if (((k - 1) % N) + 1 === y) return k;
      k += M;
    }
    return -1;
  });

  return answer;
}

console.log(solution([3, [10, 12, 3, 9], [10, 12, 7, 2], [13, 11, 5, 6]]));
