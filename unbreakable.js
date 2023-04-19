function split(str, separator) {
    const parts = [];
    let startIndex = 0;
    while (true) {
      const separatorIndex = str.indexOf(separator, startIndex);
      if (separatorIndex === -1) {
        parts.push(str.slice(startIndex));
        break;
      }
      parts.push(str.slice(startIndex, separatorIndex));
      startIndex = separatorIndex + separator.length;
    }
    return parts;
  };
function join(arr, separator) {
    let result = "";
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      if (i !== arr.length - 1) {
        result += separator;
      }
    }
    return result;
  };