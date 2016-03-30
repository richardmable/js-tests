exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    // match any digit
    if (str.match(/\d/) != null){
      return true
    }else {
      return false
    }
  },

  containsRepeatingLetter : function(str) {
    // match any repeating letter (first capture group)
    // \1 matches the same text as most recently captured group
    if (str.match(/([a-z])\1/i) != null){
      return true
    }else {
      return false
    }
  },

  endsWithVowel : function(str) {
    // check for a vowel at the end of the string with the $(assert position at end of line) modifier
    if (str.match(/[aeiou]$/i) != null){
      return true
    }else {
      return false
    }
  },

  captureThreeNumbers : function(str) {
    if (str.match(/\d{3}/) != null){
      // if there is a match return the 0 index position of the array
      // which should be the matched numbers
      return str.match(/\d{3}/)[0];
    }else {
      return false
    }
  },

  matchesPattern : function(str) {
    // check for phone number pattern, be sure to start at
    // beginning and end of string
    if (str.match(/^\d{3}-\d{3}-\d{4}$/) != null){
      return true
    }else {
      return false
    }
  },
  isUSD : function(str) {
    // modified with the $ char, from: http://stackoverflow.com/questions/354044/what-is-the-best-u-s-currency-regex
    if (str.match(/^\$[+-]?[0-9]{1,3}(?:,?[0-9]{3})*(?:\.[0-9]{2})?$/) != null){
      return true
    }else {
      return false
    }
  }
};
