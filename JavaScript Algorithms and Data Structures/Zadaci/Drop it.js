/* Intermediate Algorithm Scripting: Drop it
Given the array arr, iterate through and remove each element starting from the first element (the 0 index) until the function func returns true when the iterated element is passed through it.

Then return the rest of the array once the condition is satisfied, otherwise, arr should be returned as an empty array. */

function dropElements(arr, func) {
  
    let tempArr = arr.filter(elem => func(elem));
    
    return (tempArr.length === 0) ? tempArr : arr.slice(arr.indexOf(tempArr[0]));
  }
  
  dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;});

// 2. nacin:

function dropElements(arr, func) {
    while (arr.length > 0 && !func(arr[0])) {
      arr.shift();
    }
    return arr;
  }
  
  // test here
  dropElements([1, 2, 3, 4], function(n) {
    return n >= 3;
  });

// 3. nacin:

function dropElements(arr, func) {
    let sliceIndex = arr.findIndex(func);
    return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
  }

// 4. nacin:

function dropElements(arr, func) {
    // drop them elements.
    var times = arr.length;
    for (var i = 0; i < times; i++) {
      if (func(arr[0])) {
        break;
      } else {
        arr.shift();
      }
    }
    return arr;
  }

// 5. nacin:

function dropElements(arr, func, i = 0) {
    return i < arr.length && !func(arr[i])
      ? (dropElements(arr.slice(i + 1), func, i)) : arr;
  }
  

/* Test Cases: 

dropElements([1, 2, 3, 4], function(n) {return n >= 3;}) should return [3, 4].

dropElements([0, 1, 0, 1], function(n) {return n === 1;}) should return [1, 0, 1].

Passed
dropElements([1, 2, 3], function(n) {return n > 0;}) should return [1, 2, 3].

dropElements([1, 2, 3, 4], function(n) {return n > 5;}) should return [].

dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}) should return [7, 4].

dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;}) should return [3, 9, 2].

*/