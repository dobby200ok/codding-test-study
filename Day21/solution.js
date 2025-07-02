function solution(SP, string, condition) {
  const [s, p] = SP,
    required = ["A", "C", "G", "T"].reduce((sum, cur, i) => {
      sum[cur] = condition[i];
      return sum;
    }, {}),
    answer = [];

  function validation(str) {
    const valid = {
      A: str.match(/A/g) || [],
      C: str.match(/C/g) || [],
      G: str.match(/G/g) || [],
      T: str.match(/T/g) || [],
    };

    for (const key in valid) {
      if (required[key] > valid[key].length) {
        return false;
      }
    }

    return true;
  }

  for (let i = 0; i <= s - p; i++) {
    const str = string.substr(i, p);

    if (validation(str)) {
      answer.push(str);
    }
  }

  return answer.length;
}

console.log(solution([9, 8], "CCTGGATTG", [2, 0, 1, 1])); // 0 : solve
console.log(solution([4, 2], "GATA", [1, 0, 0, 1])); // 2 : solve
