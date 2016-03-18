exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    // rotate through the array, incrementing counter i each time
    for (i = 0; i < arr.length; i++){
      // if the item is equal to the object at the array index i
      if (item === arr[i]){
        // return that index position
        return i;
      }
    }
    // if nothing is found return -1
    return -1;
  },

  sum : function(arr) {
    // set sum var to zero
    var sum = 0
    // rotate through the array and increment i each time
    for (i = 0; i < arr.length; i++){
      // add the value of the current index of the array to the total sum
      sum = sum + arr[i];
    }
    // return the sum
    return sum
  },

  remove : function(arr, item) {
    

  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {

  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
