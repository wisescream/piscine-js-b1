function sameAmount(str, regex1, regex2) {
    const matchCount1 = (str.match(new RegExp(regex1, 'g'))  ||[]).length;
    const matchCount2 = (str.match(new RegExp(regex2, 'g'))  ||[]).length;
    return matchCount1 === matchCount2;
  }