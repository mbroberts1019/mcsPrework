// jshint esversion: 6

const prompt = require("prompt");


console.log("We will determine if, within a set a set of single digit numbers, any two numbers sum to another value.");

// Schema for Prompt

var schema = {
  properties: {
    number: {
      message: "Enter several single digit numbers with commas seperating them but no spaces."
    },
    value: {
      message: "Enter a value for the sum"
    }
  }
};

prompt.start(); // is this necessary? seemed to work w/o


// Get request for prompt, set prompts as parameters for function. call function within console log with parameters
prompt.get(schema, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    // asign 1st prompt to a variable as a string
    const numsString = result.number;
    // change string to array of numbers (thanks stack overflow for the short version)
    const numsArray = numsString.split(",").map(Number);
    // set 2nd prompt value to k and convert to integer(parseInt)
    const k = parseInt(result.value);


    console.log(sumNums(numsArray, k));

  }
});

// Function to determine if any two numbers sum to k, passing in an array of numbers and a specific number
function sumNums(givenNums, x) {
  let isSum = "Nope, sums are incongruent"; // indicator of whether or not two numbers sum to value; false until proven true

  // forEach loops through given number array
  givenNums.forEach(function(element) {
    // for loop assigns elements index position as starting point then checks if that initial number plus any of the following numbers sums to k. set isSum to true if k is a sum. "givenNums.length-1" because we dont need to run function on the last item in array
    for (i = givenNums.indexOf(element); i < (givenNums.length - 1); i++) {
      if ((givenNums[givenNums.indexOf(element)] + givenNums[(i + 1)]) === x) {
        isSum = "Sweet... at least two numbers sum correctly";
      }
    }
  });

  return isSum;

}
