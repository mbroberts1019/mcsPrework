// jshint esversion: 6

// ***** Require prompt ******
const prompt = require("prompt");

// *****establish schema for prompt******
var schema = {
  properties: {
    number: {
      message: 'Please enter number',
    }
  }
};


console.log("This program will return to you, given a number (N) the Nth number in the Fibonacci Sequence.");

/// ****initialize prompt*****
prompt.start();


prompt.get(schema, function(err, result){
    if (err){
      console.log(err);
    } else{
      const userNumStr = result.number;
      const userNum = parseInt(userNumStr);

      console.log("The "+ userNum + "th number in the Fibonacci secuence is: " + fib(userNum));
    }
});


const fib = function(num){
    if (num === 1 || num === 2){
            return 1;
        }

    let fibArr = [];

    function buildFibArr(input){
        if(input === 0){
            return;
        }
        if (fibArr.length === 0){
            fibArr.push(1);
        }
        else if (fibArr.length === 1){
            fibArr.push(1);

        } else{

        fibArr.push(fibArr[fibArr.length-1] + fibArr[fibArr.length-2]);
        }

        buildFibArr(input-1);

        return ;
    }

    buildFibArr(num);

    return fibArr[(num - 1)];

};
