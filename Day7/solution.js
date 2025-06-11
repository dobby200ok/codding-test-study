function solution(N, input) {
  const map = new Map();

  for (let i of input) {
    map.set(i, map.has(i) ? map.get(i) + 1 : 1);
  }

  const answer = [...map.values()]
    .sort((a, b) => b - a)
    .splice(0, 2)
    .reduce((sum, cur) => {
      return (sum += cur);
    }, 0);

  return answer;
}

console.log(solution(5, [5, 1, 1, 2, 1])); // 4 : solve
console.log(solution(3, [1, 1, 1])); // 3 : solve
console.log(solution(9, [1, 2, 3, 4, 5, 6, 7, 8, 9])); // 2 : solve
