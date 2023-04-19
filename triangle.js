function triangle(str, height) {
    var result = "";
    for (var i = 1; i <= height; i++) {
      for (var j = 0; j < i; j++) {
        result += str;
      }
      if (i < height) {
        result += "\n";
      }
    }
    return result;
  }