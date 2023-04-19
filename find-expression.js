function findExpression(num) {
    if (num === 1) {
      return '1';
    } else if (num <= 0) {
      return undefined;
    }
    const sequences = [
      { value: 1, sequence: '1' }
    ];
    let i = 0;
    while (i < sequences.length) {
      const current = sequences[i].value;
      if (current === num) {
        return sequences[i].sequence.trim();
      }
      const nextMul = current * 2;
      const nextAdd = current + 4;
      if (nextMul <= num) {
        sequences.push({
          value: nextMul,
          sequence: sequences[i].sequence + ' * 2'
        });
      }
      if (nextAdd <= num) {
        sequences.push({
          value: nextAdd,
          sequence: sequences[i].sequence + ' + 4'
        });
      }
      i++;
    }
    return undefined;
  }
  