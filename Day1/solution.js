
function solution(length, ...clothes) {

  const map = new Map();

  clothes.map((e) => {
    
    const item = e.split(' ');

    map.set(item[1], map.has(item[1]) ? [...map.get(item[1]), item[0]] : [item[1]]);

  });

  const answer = [...map.values()].reduce((sum, c) => {
    return sum *= (c.length + 1);
  }, 1);

  return answer - 1;
}

console.log(solution(3, 'hat headgear', 'sunglasses eyewear', 'turban headgear')); // 5 : solve
console.log(solution(3, 'mask face', 'sunglasses face', 'makeup face')); // 3 : solve