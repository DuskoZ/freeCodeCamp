/* Falsy Bouncer

Remove all falsy values from an array.
Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.

Hint: Try converting each value to a Boolean. */

function bouncer(arr) {
    let falsy = ['', null, false, undefined, 0, NaN];
    for (let i = 0; i < arr.length; i++){
      if (falsy.includes(arr[i])) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }
  
  bouncer([7, "ate", "", false, 9]);

// 2. nacin:

function bouncer(arr) {
    let newArray = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
  }

//3. nacin:

function bouncer(arr) {
    return arr.filter(Boolean);
  }

/* Test Cases:

bouncer([7, "ate", "", false, 9]) should return [7, "ate", 9].

bouncer(["a", "b", "c"]) should return ["a", "b", "c"].

bouncer([false, null, 0, NaN, undefined, ""]) should return [].

bouncer([null, NaN, 1, 2, undefined]) should return [1, 2]. */