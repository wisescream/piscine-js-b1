function pyramid(str, height) {
    var result = "";
    var spaces = height - 1;
    for (var i = 1; i <= height; i++) {
      for (var j = 0; j < spaces; j++) {
        result += " ";
      }
      for (var k = 1; k <= 2 * i - 1; k++) {
        result += str;
      }
      if (i < height) {
        result += "\n";
      }
      spaces--;
    }
    return result;
  }