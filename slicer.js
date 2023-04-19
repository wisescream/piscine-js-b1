function slice(input, startIndex, endIndex) {
  if (Array.isArray(input) || typeof input === 'string') {
    const result = [];
    const length = input.length;
    if (startIndex < 0) {
      startIndex += length;
      if (startIndex < 0) {
        startIndex = 0;
      }
    }
    if (endIndex === undefined) {
      endIndex = length;
    } else if (endIndex < 0) {
      endIndex += length;
    }
    for (let i = startIndex; i < endIndex && i < length; i++) {
      result.push(input[i]);
    }
    return Array.isArray(input) ? result : result.join('');
  } else {
    throw new Error('Input must be an array or a string.');
  }
}