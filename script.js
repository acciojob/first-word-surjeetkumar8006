function firstWord(s) {
  // Trim leading spaces to handle cases like ' Hello World!'
  s = s.trimStart();

  // Find the index of the first space
  let spaceIndex = s.indexOf(' ');

  // If no space found, return the whole string
  if (spaceIndex === -1) {
    return s;
  }

  // Return substring from start to the first space
  return s.substring(0, spaceIndex);
}

// Example tests
// console.log(firstWord('see and stop'));    // 'see'
// console.log(firstWord(' Hello World!'));   // 'Hello'
// console.log(firstWord('12345'));            // '12345'
// console.log(firstWord(''));                  // ''
