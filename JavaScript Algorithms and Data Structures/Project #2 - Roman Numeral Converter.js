/* Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case. */

function convertToRoman(num) {
    if (typeof num !== 'number') 
        return false; 

    let roman = [
     [1000, 'M'],
     [900, 'CM'],
     [500, 'D'],
     [400, 'CD'],
     [100, 'C'],
     [90, 'XC'],
     [50, 'L'],
     [40, 'XL'],
     [10, 'X'],
     [9, 'IX'],
     [5, 'V'],
     [4, 'IV'],
     [1, 'I']
];
  
    let result = '';

    for (let i = 0; i < roman.length; i++){
        while (num >= roman[i][0]){
            result += roman[i][1];
            num -= roman[i][0];
        }
    }
    return result;
}

console.log(convertToRoman(4));

// varijacija sa 2 niza:

function convertToRoman(num) {
    if (typeof num !== 'number') 
        return false; 

    let roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    let decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  
    let result = '';

    for (let i = 0; i < decimal.length; i++){
        while (num >= decimal[i]){
            result += roman[i];
            num -= decimal[i];
        }
    }
    return result;
}

console.log(convertToRoman(4));



/* Test Cases:

convertToRoman(2) should return "II".
convertToRoman(3) should return "III".
convertToRoman(4) should return "IV".
convertToRoman(5) should return "V".
convertToRoman(9) should return "IX".
convertToRoman(12) should return "XII".
convertToRoman(16) should return "XVI".
convertToRoman(29) should return "XXIX".
convertToRoman(44) should return "XLIV".
convertToRoman(45) should return "XLV".
convertToRoman(68) should return "LXVIII"
convertToRoman(83) should return "LXXXIII"
convertToRoman(97) should return "XCVII"
convertToRoman(99) should return "XCIX"
convertToRoman(400) should return "CD"
convertToRoman(500) should return "D"
convertToRoman(501) should return "DI"
convertToRoman(649) should return "DCXLIX"
convertToRoman(798) should return "DCCXCVIII"
convertToRoman(891) should return "DCCCXCI"
convertToRoman(1000) should return "M"
convertToRoman(1004) should return "MIV"
convertToRoman(1006) should return "MVI"
convertToRoman(1023) should return "MXXIII"
convertToRoman(2014) should return "MMXIV"
convertToRoman(3999) should return "MMMCMXCIX"
*/