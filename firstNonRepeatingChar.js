function firstNonRepeatingCharacter(string) {
  const results = new Map();
  const value = 1;
  let finalValue;
  for (let index = 0; index < string.length; index++) {
    if (results.get(string[index]) === undefined) {
      results.set(string[index], value);
    } else {
      results.set(string[index], value + 1);
    }
  }

  for (let index = 0; index < string.length; index++) {
    let char = string[index];
    if (results.get(char) === 1) {
      return index;
    }
  }

  return -1;
}

module.exports = firstNonRepeatingCharacter;
