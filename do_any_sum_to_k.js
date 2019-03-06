// jshint esversion: 6

const prompt = require ("prompt");

// Schema for Prompt

var schema = {
  properties: {
    number: {
      message: "We will determine if within a set a set of numbers any two digits sum to another number. Enter several single digit numbers with commas seperating them but no spaces."
    },
    value: {
      message: "Enter a value for the sum"
    }
  }
} ;

prompt.start(); // is this necessary? seemed to work w/o


//
prompt.get(schema, function(err, result){
  if (err){
    console.log(err);
  }else{
    // asign 1st prompt to a variable as a string
    const numsString = result.number;
    // change string to array of numbers (thanks stack overflow for the short version)
    const numsArray = numsString.split(",").map(Number);
    // set 2nd prompt value to k and convert to integer(parseInt)
    const k = parseInt(result.value);


    sumNums(numsArray, k);

  }
});

// Function to determine if any two numbers sum to k
function sumNums(givenNums, x) {
    let isSum = "False";// indicator of whether or not two numbers sum to value
    // forEach loops through given number array
    givenNums.forEach(function(element){
        // for loop assigns elements index position as starting point then checks if that initial number plus any of the following numbers sums to k. set isSum to true if k is a sum.
        for (i = givenNums.indexOf(element); i < (givenNums.length - 1); i++){
              if ((givenNums[givenNums.indexOf(element)] + givenNums[(i + 1)]) === x) {
                isSum = "true";
              }
            }
    });

    console.log(isSum);

}
