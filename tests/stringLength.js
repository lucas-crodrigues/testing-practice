const stringLength = (string) => {
  let letters = [];

  string.split('').forEach((element) => {
    letters.push(element);
  })

  if (letters.length > 0 & letters.length < 11) {
    return letters.length;
  } else {
    return 'String must be between 1 and 10 characters';
  }
}

module.exports = stringLength;