/* Intermediate Algorithm Scripting: Spinal Tap Case
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/
function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
    }
    
    console.log(spinalCase("AllThe-small Things"));

// 2. nacin:

function spinalCase(str) {
    // Create a variable for the white space and underscores.
    var regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
  }
  
  // test here
  spinalCase("This Is Spinal Tap");



/* Test Cases:

spinalCase("This Is Spinal Tap") should return "this-is-spinal-tap".

spinalCase("thisIsSpinalTap") should return "this-is-spinal-tap".

spinalCase("The_Andy_Griffith_Show") should return "the-andy-griffith-show".

spinalCase("Teletubbies say Eh-oh") should return "teletubbies-say-eh-oh".

spinalCase("AllThe-small Things") should return "all-the-small-things".

*/