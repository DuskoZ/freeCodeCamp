/* Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien". */

function mutation(arr) {
    let tempArr = arr[0].toLowerCase().split('');
    let compareArr = arr[1].toLowerCase().split('');
    let status = true;
    let i = 0;

    while (status && i < compareArr.length) {
      (tempArr.indexOf(compareArr[i]) >= 0) ? status = true : status = false;
      i++;
    }
    return status;
  }
  
  mutation(["hello", "hey"]);

// 2. nacin:

function mutation(arr) {
    var test = arr[1].toLowerCase();
    var target = arr[0].toLowerCase();
    for (var i = 0; i < test.length; i++) {
      if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
  }

/* Test Cases:

mutation(["hello", "hey"]) should return false.

mutation(["hello", "Hello"]) should return true.

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) should return true.

mutation(["Mary", "Army"]) should return true.

mutation(["Mary", "Aarmy"]) should return true.

mutation(["Alien", "line"]) should return true.

mutation(["floor", "for"]) should return true.

mutation(["hello", "neo"]) should return false.

mutation(["voodoo", "no"]) should return false.

mutation(["ate", "date"] should return false.

mutation(["Tiger", "Zebra"]) should return false.

mutation(["Noel", "Ole"]) should return true. */

