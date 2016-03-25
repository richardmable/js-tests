exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	// make the string lowercase for easier comparison
  	var str = str.toLowerCase();
    // set an array that consists of the string seperated by same chars
  	var arr = str.match(/((.)\2*)/g);
    // set an empty result array
    var result = [];
    // rotate through the array of seperated chars
    for (i = 0; i < arr.length; i++){
      // if the array's index's length is not shorter than the amount desired
      if (!arr[i].length <= amount){
        // reduce the string by that amount
        var reduced = arr[i].slice(0, amount);
        // push the result into the result array
        result.push(reduced)
      }else{
        // if the string doesn't need to be modified just push it into the array
        result.push(arr[i])
      }
    }
    // join the result array together into a single string
    result = result.join("")
    // return the result
    return result
  },
  wordWrap: function(str, cols) {

  },
  reverseString: function(str) {

  }
};
