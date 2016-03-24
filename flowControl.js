exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or the value provided is not a number

    // first check if divisible by 3 and 5 evenly
    // important to do this first or else test will not pass
    if (num % 3 === 0 && num % 5 === 0){
        return 'fizzbuzz';
    // check for 5 and 3 even divisions
    }else if (num % 5 === 0){
        return 'buzz';
    }else if (num % 3 === 0){
        return 'fizz';
    // check to see if input is a number
    }else if (typeof num != 'number'){
        return false;
    }else{
    // if none of those work, return the number
        return num;
    };
  }
};
