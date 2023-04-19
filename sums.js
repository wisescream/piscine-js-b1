function sums(num) {
    const result = [];
    if (num <= 0) {
      return result;
    }
    function partitionHelper(start, target, partition) {
      if (target === 0) {
        result.push(partition);
        return;
      }
      for (let i = start; i < num && i <= target; i++) {
        const newPartition = partition.concat([i]);
        partitionHelper(i, target - i, newPartition);
      }
    }
    partitionHelper(1, num, []);
    return result;
  }