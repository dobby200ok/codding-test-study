function solution(S, T) {
  const answer = [];

  function dfs(str) {
    if (str === S) {
      answer.push(str);
      return;
    }

    str[str.length - 1] === "A" && dfs(str.slice(0, -1));

    if (str[str.length - 1] === "B") {
      const reverse = str.slice(0, -1).split("").reverse().join("");
      dfs(reverse);
    }
  }

  dfs(T);
  return answer.length;
}

console.log(solution("B", "ABBA")); // 1 : solve
console.log(solution("AB", "ABB")); // 0 : solve
