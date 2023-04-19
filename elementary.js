function multiply(a, b) {
    let result = 0;
    for (let i = 0; i < Math.abs(b); i++) {
        result += a;
    }
    if (b < 0) {
        result = -result;
    }
    return result;
}
function divide(a, b) {
    if (b === 0) {
        return NaN;
    }
     let quotient = 0;
    let dividend = Math.abs(a);
    const divisor = Math.abs(b);
     while (dividend >= divisor) {
        dividend -= divisor;
        quotient++;
    }
     if ((a < 0 && b > 0) || (a > 0 && b < 0)) {
        quotient = -quotient;
    }
     return quotient;
}
function modulo(a, b) {
    if (b === 0) {
        return NaN;
    }
     let dividend = Math.abs(a);
    const divisor = Math.abs(b);
     while (dividend >= divisor) {
        dividend -= divisor;
    }
     if (a < 0) {
        dividend = -dividend;
    }
     return dividend;
}