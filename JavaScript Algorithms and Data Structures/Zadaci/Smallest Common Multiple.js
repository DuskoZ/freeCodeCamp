/* Intermediate Algorithm Scripting: Smallest Common Multiple
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6. */

const smallestCommons = arr => {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let scm = max;
  
    for (let i = max - 1; i >= min; i--) {
      if (scm % i) {
        scm += max;
        i = max;
      }
    }
    return scm;
  };
  
  console.log(smallestCommons([1, 4]));

// 2. nacin:

function smallestCommons(arr) {
    // Sort array from greater to lowest
    // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
    arr.sort(function(a, b) {
      return b - a;
    });
  
    // Create new array and add all values from greater to smaller from the
    // original array.
    var newArr = [];
    for (var i = arr[0]; i >= arr[1]; i--) {
      newArr.push(i);
    }
  
    // Variables needed declared outside the loops.
    var quot = 0;
    var loop = 1;
    var n;
  
    // Run code while n is not the same as the array length.
    do {
      quot = newArr[0] * loop * newArr[1];
      for (n = 2; n < newArr.length; n++) {
        if (quot % newArr[n] !== 0) {
          break;
        }
      }
  
      loop++;
    } while (n !== newArr.length);
  
    return quot;
  }

// 3. nacin:

function smallestCommons(arr) {
  // Euclidean algorithm for the greatest common divisor.
  // ref: https://en.wikipedia.org/wiki/Euclidean_algorithm
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

  // Least Common Multiple for two numbers based on GCD
  const lcm = (a, b) => (a * b) / gcd(a, b);

  // range
  let [min, max] = arr.sort((a, b) => a - b);
  let currentLCM = min;

  while (min < max) {
    currentLCM = lcm(currentLCM, ++min);
  }

  return currentLCM;
}

// test here
smallestCommons([1, 5]);

/* Test Cases:

smallestCommons([1, 5]) should return a number.

smallestCommons([1, 5]) should return 60.

smallestCommons([5, 1]) should return 60.

smallestCommons([2, 10]) should return 2520.

smallestCommons([1, 13]) should return 360360.

smallestCommons([23, 18]) should return 6056820.

*/