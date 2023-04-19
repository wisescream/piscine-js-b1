function map(array, func) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
      result.push(func(array[i], i, array));
    }
    return result;
  }
  function flatMap(arr, action) {
    return arr.reduce(
        (acc, val, i, arr) => acc.concat(action(val, i, arr)),
        []
    );
}