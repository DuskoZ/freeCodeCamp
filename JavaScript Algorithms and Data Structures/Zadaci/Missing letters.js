/* Intermediate Algorithm Scripting: Missing letters
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined. */

function fearNotLetter(str) {
    let code = str.charCodeAt(0);
    let i = 0;
  
    while (str.charCodeAt(i) === code){
      i++;
      code++;
    }
  
    return (code > 122) ? undefined : String.fromCharCode(code);
  }
  
  fearNotLetter("ijkmn");


// 2. nacin:

function fearNotLetter(str) {
    for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  }

// 3. nacin:

function fearNotLetter(str) {
    for (var i = 0; i < str.length; i++) {
      /* code of current character */
      var code = str.charCodeAt(i);
  
      /* if code of current character is not equal to first character + no of iteration
          hence character has been escaped */
      if (code !== str.charCodeAt(0) + i) {
        /* if current character has escaped one character find previous char and return */
        return String.fromCharCode(code - 1);
      }
    }
    return undefined;
  }
  
  // test here
  fearNotLetter("abce");

/* Test Cases:

fearNotLetter("abce") should return "d".

fearNotLetter("abcdefghjklmno") should return "i".

fearNotLetter("stvwx") should return "u".

fearNotLetter("bcdf") should return "e".

fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.

*/