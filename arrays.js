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
    // loop through all elements in the array
    for (i = 0; i < arr.length; i++){
      // if the array equals the item provided
      if (arr[i] === item){
        // remove it using .splice
        arr.splice(i, 1);
        // then add one to i as the array is now shorter
        // otherwise the loop will skip over the next element
        i = i - 1
      }
    }
    // return the modified array, as .slice returns an array of the deleted elements
    return arr
  },

  removeWithoutCopy : function(arr, item) {
    // not sure how this is different from .remove, but same idea
    for (i = 0; i < arr.length; i++){
      // if the array equals the item provided
      if (arr[i] === item){
        // remove it using .splice
        arr.splice(i, 1);
        // then add one to i as the array is now shorter
        // otherwise the loop will skip over the next element
        i = i - 1
      }
    }
    // return the modified array, as .slice returns an array of the deleted elements
    return arr
  },

  append : function(arr, item) {
    // use .push to push the item onto the end of the array
    // and return the newly modified array
    arr.push(item)
    return arr
  },

  truncate : function(arr) {
    // use .pop to remove the last item in the array
    arr.pop()
    // return the modified array
    return arr
  },

  prepend : function(arr, item) {
    // reverse the array
    arr.reverse();
    // push the item onto the end of the array
    arr.push(item);
    // reverse the array to the original state with
    // the new element prepended to the begining of the array
    arr.reverse();
    // return the array
    return arr
  },

  curtail : function(arr) {
    // reverse the array
    arr.reverse();
    // use .pop to remove the last element
    arr.pop();
    // reverse the array back to the original state
    arr.reverse();
    // return the array
    return arr
  },

  concat : function(arr1, arr2) {
    // join the two arrays using .concat and set to result
    result = arr1.concat(arr2);
    // return the result as expected in the test
    return result
  },

  insert : function(arr, item, index) {
    // use .splice to insert item by setting the howmany param to be 0
    arr.splice(index, 0, item);
    // return the modified array
    return arr
  },

  count : function(arr, item) {
    // set the counter to zero
    result = 0;
    // rotate through all elements in the array
    for (i = 0; i < arr.length; i++){
      // check to see if the current index matches the provided search element
      if (arr[i] === item){
        // if it does, increment the result by one
        result++;
      }
    }
    // return the total number of elements found
    return result
  },

  duplicates : function(arr) {
    // function to sort the numbers in ascending order in array
    function compareNumbers(a, b){
      return a - b;
    };
    // use .sort with compareNumbers to sort array
    arr.sort(compareNumbers);
    // set an empty result array to put the duplicates into
    var result = []
    // loop through the provided array
    for (i = 0; i < arr.length; i++){
      // check if the array index object matches the next one
      // and that the array index object is not already in the results array
      if (arr[i] === arr[i + 1] && result.indexOf(arr[i]) === -1){
        // if true, put the duplicate object into the results array
        result.push(arr[i])
      }
    }
    // return the result array
    return result
  },

  square : function(arr) {
    // function to square a number
    function square(num){
      return num * num
    }
    // set a result var to equal each squared valued of arr
    // use to map to iterate through each object in arr and perform
    // function square on it
    var result = arr.map(square)
    // return the result array
    return result
  },

  findAllOccurrences : function(arr, target) {
    // return an array of index values where target is found
    // set an empty result array
    var result = []
    // rotate through all the objects in the array
    for (i = 0; i < arr.length; i++){
      // if the current index matches the target
      if (arr[i] === target)
        // push the index value into the results array
        result.push(i)
    }
    // return the result array
    return result
  }
};
