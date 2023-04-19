function first(arrOrStr) {
    return arrOrStr[0];
  }
  function last(arrOrStr) {
    return arrOrStr[arrOrStr.length - 1];
  }
  function kiss(arrOrStr) {
    return [last(arrOrStr), first(arrOrStr)];
  }