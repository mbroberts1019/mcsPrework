//jshint esversion: 6

///////  Function only works up to 170, beyond that returns infinity why is this?

// *********Require Prompt*********
const prompt = require("prompt");

// ******** Establish Schema for prompt*********
var schema = {
  properties: {
    number: {
      message: 'Please enter number:',
    }
  }
};

console.log("This program will return the factorial of a given number. Can you figure out what javascript thinks is too big of a number for humans to comprehend?");


//******** Start Prompt****************
prompt.start();

// ********** Get information from Prompt first console log if error else run factorial function
prompt.get(schema, function(err, result) {
  if (err) {
    console.log(err);
  } else {
    ////   Get number string inputted in prompt
    const userNumString = result.number;
    //// Convert number string to number
    const userNum = parseInt(userNumString);
    /// Log to terminal <userNum>! is : <call factorial on userNum>
    console.log(userNumString + "! is : " + factorial(userNum));
  }
});


//// Create factorial function
const factorial = function(num) {

  const numsArray = [];

  /////   For loop to create Array of numbers counting down from inputed number
  for (var i = num; i > 0; i--) {
    numsArray.push(i);
  }

  /// Sum will be total after each multiplication in forEach loop
  let sum = 1;
  numsArray.forEach(function(num) {
    sum = sum * num;
  });

  return sum;

};


// and then I learned a simple recursive way:
//
// const factorial = function(num){
//     if(num === 1){            // can condense to if(num === 1) return 1;
//         return 1;
//     }
//     return num * factorial(num - 1)
// };
