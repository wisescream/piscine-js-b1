function filter(arr, callback) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
      if(callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  function reject(arr, callback) {
    const result = [];
    for(let i = 0; i < arr.length; i++) {
      if(!callback(arr[i], i, arr)) {
        result.push(arr[i]);
      }
    }
    return result;
  }
  function partition(arr, callback) {
    const result = [[], []];
    for(let i = 0; i < arr.length; i++) {
      if(callback(arr[i], i, arr)) {
        result[0].push(arr[i]);
      } else {
        result[1].push(arr[i]);
      }
    }
    return result;
  }