function calc(a, b, c) {
  if (b === 0n) return 1n;

  const h = calc(a, b / 2n, c),
    answer = (h * h) % c;

  return b % 2n === 0n ? answer : (answer * (a % c)) % c;
}

function solution(A, B, C) {
  const a = BigInt(A),
    b = BigInt(B),
    c = BigInt(C);

  return Number(calc(a, b, c));
}

console.log(solution(10, 11, 12));
