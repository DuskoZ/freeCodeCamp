/* Intermediate Algorithm Scripting: Steamroller
Flatten a nested array. You must account for varying levels of nesting.
*/
function steamrollArray(arr) {
  
    const flattened = arr => [].concat(...arr);
  
    let tempArr = flattened(arr);
    
    for (let i = 0; i < tempArr.length; i++){
      (typeof tempArr[i] == Number) ? true : tempArr = flattened(tempArr);
    }
    return tempArr;
  }
  
  steamrollArray([1, {}, [3, [[4]]]]);

// 2. nacin:

function steamrollArray(arr) {
    let flat = [].concat(...arr);
    return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);

// 3. nacin:

function steamrollArray(arr) {
    return arr
      .toString()
      .replace(",,", ",") // "1,2,,3" => "1,2,3"
      .split(",") // ['1','2','3']
      .map(function(v) {
        if (v == "[object Object]") {
          // bring back empty objects
          return {};
        } else if (isNaN(v)) {
          // if not a number (string)
          return v;
        } else {
          return parseInt(v); // if a number in a string, convert it
        }
      });
  }

// 4. nacin:

function steamrollArray(arr, flatArr = []) {
    const elem = arr.pop();
    return elem
      ? !Array.isArray(elem)
        ? steamrollArray(arr, [elem, ...flatArr])
        : steamrollArray(arr.concat(elem), flatArr)
      : flatArr;
  }

/* Test Cases:

steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].

steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].

steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].

steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].

Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

*/