/*
Your goal in this kata is to implement a difference function,
which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

/* 
tests
    assert.deepEqual(arrayDiff([1,2], [1]), [2], "a was [1,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [1]), [2,2], "a was [1,2,2], b was [1]");
    assert.deepEqual(arrayDiff([1,2,2], [2]), [1], "a was [1,2,2], b was [2]");
    assert.deepEqual(arrayDiff([1,2,2], []), [1,2,2], "a was [1,2,2], b was []");
    assert.deepEqual(arrayDiff([], [1,2]), [], "a was [], b was [1,2]");
    assert.deepEqual(arrayDiff([1,2,3], [1,2]), [3], "a was [1,2,3], b was [1,2]")
*/

//first solutions
function arrayDiff(a, b) {
  let result;
  if (b.length == 0) {
    return a;
  } else {
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j <= a.length; j++) {
        result = a.filter((item) => item !== b[i]);
      }
      a = result;
    }
  }
  return result;
}
arrayDiff([1, 2, 2], []);

//second solutions
function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}
