exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	// make the string lowercase for easier comparison
  	var str = str.toLowerCase();
    // set an array that consists of the string separated by same chars
  	var arr = str.match(/((.)\2*)/g);
    // set an empty result array
    var result = [];
    // rotate through the array of separated chars
    for (i = 0; i < arr.length; i++){
      // if the array's index's length is not shorter than the amount desired
      if (!arr[i].length <= amount){
        // reduce the string by that amount
        var reduced = arr[i].slice(0, amount);
        // push the result into the result array
        result.push(reduced);
      }else{
        // if the string doesn't need to be modified just push it into the array
        result.push(arr[i]);
      }
    }
    // join the result array together into a single string
    result = result.join("")
    // return the result
    return result;
  },
  wordWrap: function(str, cols) {
    // insertAt from http://stackoverflow.com/questions/4364881/inserting-string-at-position-x-of-another-string
    String.prototype.insertAt=function(index, string) { 
      return this.substr(0, index) + string + this.substr(index);
    }
    // split into array based on spaces for each word
    // arr = str.split(" ");
    // loop through the string's length
    for (i = 0; i < str.length; i++){
      // if the current position is a multiple of the column
      if (i % cols === 0){
        // check if that position has a space
        if (str.charAt(i) === " "){
          // insert a line break
          str.insertAt(i, "\n");
          // search forwards and backwards for the space and find length
          // if the word's length is greater than the columns
        }else if ((str.indexOf(" ", i) - (str.lastIndexOf(" ", i))) > cols){
          // find the last space and insert a break there
          last_space = str.lastIndexOf(" ", i);
          str.insertAt(last_space, "\n");
        }
      } 
    }
    // alert(str);
    // set the modified string the the result
    result = str;
    // return the result
    return result;
  },


  reverseString: function(str) {
    // or:
    //
    // turn into array, reverse, then join back into string
    result = str.split("").reverse().join("")
    // return result
    return result
  }
};
