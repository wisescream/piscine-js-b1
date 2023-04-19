function ionOut(inputStr) {
    const regex = /\b(\w*)tion\b/g;
    const matches = inputStr.match(regex);
    const result = matches ? matches.map(match => match.replace("ion", "")) : [];
    return result;
  }