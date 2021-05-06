/* Slice and Splice
You are given two arrays and an index.
Copy each element of the first array into the second array, in order.
Begin inserting elements at index n of the second array.
Return the resulting array. The input arrays should remain the same after the function runs. */

function frankenSplice(arr1, arr2, n) {
    let counterArr1 = 0;
    let tempArr = arr2.slice(); //pravi kopiju niza, na taj nacin niz arr2 je netaknut

    for (let i = n; i < n + arr1.length; i++){
      tempArr.splice(i, 0, arr1[counterArr1]);
      counterArr1++;
    }
    return tempArr;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);

// 2. nacin:

function frankenSplice(arr1, arr2, n) {

    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }

  /* Test Cases:

frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5].

frankenSplice([1, 2], ["a", "b"], 1) should return ["a", 1, 2, "b"].

frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2) should return ["head", "shoulders", "claw", "tentacle", "knees", "toes"].

All elements from the first array should be added to the second array in their original order.

The first array should remain the same after the function runs.

The second array should remain the same after the function runs. */