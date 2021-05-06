/* Intermediate Algorithm Scripting: Sorted Union
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples. */

function uniteUnique(arr) {
    let args = Array.prototype.slice.call(arguments);
    let tempArr = args[0];
  
    for (let i = 1; i < args.length; i++){
      for (let j = 0; j < args[i].length; j++){
        (tempArr.includes(args[i][j])) ? true : tempArr.push(args[i][j]);
      }
    }
  
    return tempArr;
  }
  
  uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]);

//  2. nacin:

function uniteUnique(arr1, arr2, arr3) {
    var newArr;
    //Convert the arguments object into an array
    var args = Array.prototype.slice.call(arguments);
    //Use reduce function to flatten the array
    newArr = args.reduce(function(arrA, arrB) {
      //Apply filter to remove the duplicate elements in the array
      return arrA.concat(
        arrB.filter(function(i) {
          return arrA.indexOf(i) === -1;
        })
      );
    });
  
    return newArr;
  }

// 3. nacin:

function uniteUnique() {
    var concatArr = [];
    var i = 0;
    while (arguments[i]) {
      concatArr = concatArr.concat(arguments[i]);
      i++;
    }
    uniqueArray = concatArr.filter(function(item, pos) {
      return concatArr.indexOf(item) == pos;
    });
    return uniqueArray;
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 4. nacin: 

function uniteUnique(...arrays) {
    //make an array out of the given arrays and flatten it (using the spread operator)
    const flatArray = [].concat(...arrays);
  
    // create a Set which clears any duplicates since it's a regular set and not a multiset
    return [...new Set(flatArray)];
  }
  
  // test here
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// 5. nacin:

function uniteUnique(...arr) {
    return [...new Set(arr.flat())]
  }
  
  // Or as an arrow function
  const uniteUnique = (...arr) => [...new Set(arr.flat())]


/* Test Cases:

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]) should return [1, 3, 2, 5, 4].

uniteUnique([1, 2, 3], [5, 2, 1]) should return [1, 2, 3, 5].

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]. */