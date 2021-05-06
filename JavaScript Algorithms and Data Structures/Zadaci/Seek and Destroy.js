/* Intermediate Algorithm Scripting: Seek and Destroy
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note
You have to use the arguments object. */

function destroyer(arr) {
    let args = Array.prototype.slice.call(arguments);
    let tempArr = args.slice(1);
    args = args[0];
    let newArr = args.filter(element => !tempArr.includes(element));
    console.log(newArr)
    return newArr;
  }
  
  destroyer([3, 5, 1, 2, 2], 2, 3, 5);

// 2. nacin:

function destroyer(arr) {
    var args = Array.prototype.slice.call(arguments);
  
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < args.length; j++) {
        if (arr[i] === args[j]) {
          delete arr[i];
        }
      }
    }
    return arr.filter(Boolean);
  }

//   3. nacin:

function destroyer(arr) {
    var args = Array.from(arguments).slice(1);
    return arr.filter(function(val) {
      return !args.includes(val);
    });
  }

// 4. nacin:

const destroyer = (arr, ...valsToRemove) => arr.filter(elem => !valsToRemove.includes(elem));




/* Test Cases:

destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

destroyer([2, 3, 2, 3], 2, 3) should return [].

destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].

*/