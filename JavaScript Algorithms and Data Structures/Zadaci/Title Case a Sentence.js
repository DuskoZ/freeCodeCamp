/* Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of". */

function titleCase(str) {
    let words = str.split(' ');
    let index = 0;
    
    while (index < words.length) {
      words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1).toLowerCase();
      index++;
    } 
    
    return words.join(' ');
    }
  
  titleCase("I'm a little tea pot");

  /* Test Cases:

titleCase("I'm a little tea pot") should return a string.

titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.

titleCase("sHoRt AnD sToUt") should return Short And Stout.

titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return Here Is My Handle Here Is My Spout. */