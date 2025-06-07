
function solution (n, m, s) {

  const pattern = 'I' + 'OI'.repeat(n),
        regax = new RegExp(`(?=${pattern})`, 'g'),
        matchs = s.match(regax),
        answer = matchs ? matchs.length : 0;

  return answer;
}

console.log(solution(1, 13, 'OOIOIOIOIIOII')); // 4 : solve
console.log(solution(2, 13, 'OOIOIOIOIIOII')); // 2 : solve