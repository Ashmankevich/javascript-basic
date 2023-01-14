/*
DESCRIPTION:
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

let multiplicationTable = function (size) {
  let arr = [];
  for (let i = 1; i <= size; i++) arr.push([i]);

  return arr.map((item) => {
    let num = 0;
    for (let k = 0; k < size; k++) {
      num += item[0];
      if (num == item[0]) {
        continue;
      }
      item.push(num);
    }
    return item;
  });
};
multiplicationTable(4);

//best practice
/*const multiplicationTable = n => {
  const res = [];
  for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 1; j <= n; j++)
      row.push(i * j);
    res.push(row);
  }
  return res;
}*/
