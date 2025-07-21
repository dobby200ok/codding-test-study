function solution(N, alphabets) {
  const map = new Map(),
    numMap = new Map();
  let count = 9,
    answer = 0;

  for (let i = 0; i < N; i++) {
    const { length } = alphabets[i];

    for (let n = 0; n < length; n++) {
      const alphabet = alphabets[i][n],
        pow = length - n - 1;

      map.set(alphabet, (map.get(alphabet) || 0) + Math.pow(10, pow));
    }
  }

  const sort = [...map].sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < sort.length; i++) {
    numMap.set(sort[i][0], count--);
  }

  for (let i = 0; i < alphabets.length; i++) {
    let number = "";
    for (let n = 0; n < alphabets[i].length; n++) {
      number += numMap.get(alphabets[i][n]);
    }
    answer += Number(number);
  }

  return answer;
}

console.log(solution(2, ["AAA", "AAA"]));
console.log(solution(2, ["GCF", "ACDEB"]));
console.log(solution(10, ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"]));
console.log(solution(2, ["AB", "BA"]));
