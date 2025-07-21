function solution(routes) {
  routes.sort((a, b) => a[1] - b[1]);

  let answer = 0,
    last = -Infinity;

  for (let [i, o] of routes) {
    if (i > last) {
      answer++;
      last = o;
    }
  }

  return answer;
}
