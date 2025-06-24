function solution(N, input) {
  const list = input.map((e) => {
    const [start, end] = e.split(" ");

    return [Number(start), Number(end)];
  });

  list.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  const answer = [[...list[0]]];

  for (let e of list) {
    const [start, end] = e,
      [, last] = answer.at(-1);

    if (start >= last) {
      answer.push(e);
    }
  }
  return answer.length;
}

console.log(
  solution(11, [
    "1 4",
    "3 5",
    "0 6",
    "5 7",
    "3 8",
    "5 9",
    "6 10",
    "8 11",
    "8 12",
    "2 13",
    "12 14",
  ])
);
