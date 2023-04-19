Array.prototype.flat = undefined;
 function flat(arr, depth = 1) {
  if (depth === 0) {
    return arr.slice();
  }
  return arr.reduce((result, item) => {
    if (Array.isArray(item)) {
      result.push(...flat(item, depth - 1));
    } else {
      result.push(item);
    }
    return result;
  }, []);
}