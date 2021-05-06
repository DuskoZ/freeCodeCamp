/* ntermediate Algorithm Scripting: Search and Replace
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

Note
Preserve the case of the first character in the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog" */

function myReplace(str, before, after) {

    (before === before.toLowerCase()) ? 
      (after = after.charAt(0).toLowerCase() + after.slice(1)) : (after = after.charAt(0).toUpperCase() + after.slice(1));
    
      return (str.includes(before)) ? str.replace(before, after) : false;
    
    }
    
    myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
    
// 2. nacin:

function myReplace(str, before, after) {
    // Check if first character of argument "before" is a capital or lowercase letter and change the first character of argument "after" to match the case
    if (/^[A-Z]/.test(before)) {
      after = after[0].toUpperCase() + after.substring(1)
    } else {
      after = after[0].toLowerCase() + after.substring(1)
    }
  
    // return string with argument "before" replaced by argument "after" (with correct case)
    return str.replace(before, after);
  }
  
  // test here
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// 3. nacin:

function myReplace(str, before, after) {
    const myArr = str.split(" ");
    const [wordToReplace] = myArr.filter(item => item === before);
    return wordToReplace[0].toUpperCase() !== wordToReplace[0]
      ? myArr.map(item => (item === before ? after : item)).join(" ")
      : myArr
          .map(item =>
            item === before ? after[0].toUpperCase() + after.slice(1) : item
          )
          .join(" ");
  }
  
  // test:
  myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

/* Test Cases: 

myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".

myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".

myReplace("I think we should look up there", "up", "Down") should return "I think we should look down there".

myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".

myReplace("His name is Tom", "Tom", "john") should return "His name is John".

myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms". */