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
    arr = str.split()
    result = []
    for (i = 0; i < arr.length; i++){
      line_added = arr[i].toString();
      line_added += "\n";
      result.push(line_added)
    }
    alert(result)


    // arr = str.split(" ");
    // result = [];
    // for (i = 0; i < arr.length; i++){
    //   str_length = arr[i];
    //   x = 1;
    //   while (str_length.length <= cols){
    //     str_length = str_length.concat(arr[i + x]);
    //     // str_length = str_length.join("");
    //     x++;
    //   }
    //   string_final = str_length.concat("\n")  
    //   result.push(string_final)
    // }
    // formattedStr = result.join();
    // alert(formattedStr);
    // return formattedStr;
  },


  reverseString: function(str) {
    // turn into array, reverse, then join back into string
    result = str.split("").reverse().join("")
    // return result
    return result
  }
};
