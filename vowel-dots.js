const vowels = /[aeiou]/gi;
function vowelDots(string) {
    return string.replace(vowels, (match) => `${match}.`);
  }
console.log(vowelDots('teste'))