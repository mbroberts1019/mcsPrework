// jshint esversion:6
// Function to find a sub string within a longer string and return number of times substring appears

function stringSearch(long, short) {

  let count = 0;

// Loop throgh each character and check to see if first characters are the same
  for (let i = 0; i < long.length; i++) {
    let isMatch = false;
    if (long[i] === short[0]) {
// If first characters match loop through substring and compare consecutive letters of long string to substring
      for (let j = 0; j < short.length; j++) {
        if (long[(i + j)] === short[j]) {
          isMatch = true;
        } else {
          isMatch = false;
          return;
        }
      }
    }
    if (isMatch) {
      count++;
    }
  }
  return count;
}
