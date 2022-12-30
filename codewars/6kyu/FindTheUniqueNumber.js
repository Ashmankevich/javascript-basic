function findUniq(arr) {
  let uniq = [];
  let newArr = Array.from(new Set(arr));
  for (let i = 0; i < newArr.length; i++) {
    arr.indexOf(newArr[i]) == arr.lastIndexOf(newArr[i])
      ? uniq.push(newArr[i])
      : null;
  }
  return Number(uniq.toString());
}
findUniq([3, 10, 3, 3, 3]);
