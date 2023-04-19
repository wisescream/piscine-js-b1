function max () {
    var max = -Infinity;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
        max = arguments[i];
        }
    }
    return max;
}
function min () {
    var min = Infinity;
    for (var i = 0; i < arguments.length; i++) {
        if (arguments[i] < min) {
        min = arguments[i];
        }
    }
    return min;
}
