// jshint esversion:6

console.log("This program will help you determine the probability that something will be sucessful by tossing a coin as many times as you like to evaluate the probability of sucess");


// Prompt section see factorial.js for deeper explanation
const prompt = require("prompt");


const schema = {
  properties: {
    number: {
      message: "How many times would you like to toss the coin?",// message with an "a" you dingdong
    }
  }
};

prompt.start();

prompt.get(schema, function(err, result){
  if (err){
    console.log(err);
  }else{
    const numberOfTosses = result.number;
    console.log("Probability of sucess is: " +coinToss(numberOfTosses)+ "%");

  }
});

/*
  I prefer using these multiline comments whenever text goes beyond the 'guide'
  line. It should show up in gray in Atom. (if you are using atom).
*/
// Cointoss function generate 0 or 1 a specified number of times 1's increment heads 0s increment tails. calculate probability from heads/(heads+tails)
const coinToss = function(tossCount){
  let heads = 0;
  let tails = 0;

  for (var i = 0; i < tossCount; i++){
    let currentNum = Math.floor(Math.random()*2);// use .floor to round down

    if (currentNum === 1){
      heads++;
    } else if (currentNum === 0){
      tails++;
    }else{
      /*
        check out console.error()! It will provide you with a stack trace and
        will be highlighted in red in the console.
      */
      console.log("Error, Math is broken");
    }
  }

  /*
    Here you could go ahead and just return the value, instead of assign it to
    a constant.

    return Math.round((heads / (heads+tails))*100);

    just small stuff!
  */

  const probability = Math.round((heads / (heads+tails))*100);

  return probability;

};
