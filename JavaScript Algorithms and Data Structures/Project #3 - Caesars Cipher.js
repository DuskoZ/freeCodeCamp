/* Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */

function rot13(str) {
  let alpha = ['A', 'B', 'C', 'D', 'E', 'F','G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z'];

  let rot13 = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W','X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F','G','H', 'I', 'J', 'K', 'L', 'M'];

  let arr = str.toUpperCase().split('');
  let result = '';

  const letter = glyph => {
    let regex = /[A-Z]/;
    return regex.test(glyph);
  }

  for (let i = 0; i < arr.length; i++){
    (letter(arr[i])) ? result += alpha[rot13.indexOf(arr[i])] : result += arr[i];
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC")); //FREE CODE CAMP

// 2. nacin:

function rot13(str) {
    // Split str into a character array
    return (
      str
        .split("")
        // Iterate over each character in the array
        .map.call(str, function(char) {
          // Convert char to a character code
          var x = char.charCodeAt(0);
          // Checks if character lies between A-Z
          if (x < 65 || x > 90) {
            return String.fromCharCode(x); // Return un-converted character
          }
          //N = ASCII 78, if the character code is less than 78, shift forward 13 places
          else if (x < 78) {
            return String.fromCharCode(x + 13);
          }
          // Otherwise shift the character 13 places backward
          return String.fromCharCode(x - 13);
        })
        .join("")
    ); // Rejoin the array into a string
  }

// 3. nacin:

function rot13(str) {
    var rotCharArray = [];
    var regEx = /[A-Z]/;
    str = str.split("");
    for (var x in str) {
      if (regEx.test(str[x])) {
        // A more general approach
        // possible because of modular arithmetic
        // and cyclic nature of rot13 transform
        rotCharArray.push(((str[x].charCodeAt() - 65 + 13) % 26) + 65);
      } else {
        rotCharArray.push(str[x].charCodeAt());
      }
    }
    str = String.fromCharCode.apply(String, rotCharArray);
    return str;
  }

// 4. nacin:

function rot13(str) {
    // LBH QVQ VG!
    return str.replace(/[A-Z]/g, L =>
      String.fromCharCode((L.charCodeAt(0) % 26) + 65)
    );
  }

// 5. nacin:

function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return str
      .split('')
      .map(char => {  
        const pos = alphabet.indexOf(char);      
        return pos >= 0 ? alphabet[(pos + 13) % 26] : char;
      })
      .join('');
}

/* Test Cases:

rot13("SERR PBQR PNZC") should decode to FREE CODE CAMP

rot13("SERR CVMMN!") should decode to FREE PIZZA!

rot13("SERR YBIR?") should decode to FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG. */