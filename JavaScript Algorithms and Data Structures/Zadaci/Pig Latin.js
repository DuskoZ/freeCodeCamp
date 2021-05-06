/* Intermediate Algorithm Scripting: Pig Latin
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
    let regex = /[aeiou]/;
    let index = str.search(regex);
    let arr = str.split('');
  
    const consonant = (tempArr, i) => {
      return tempArr.slice(index).join('') + tempArr.slice(0, index).join('') + 'ay';
    }
    
    return (index === 0) ? (arr.join('') + 'way') : (index === -1) ? arr.join('') + 'ay' : consonant(arr, index);
  }
  
  console.log(translatePigLatin("schwartz"));

// 2. nacin:

function translatePigLatin(str) {
    let consonantRegex = /^[^aeiou]+/;
    let myConsonants = str.match(consonantRegex);
    return myConsonants !== null
      ? str
          .replace(consonantRegex, "")
          .concat(myConsonants)
          .concat("ay")
      : str.concat("way");
  }
  
  translatePigLatin("consonant");

// 3. nacin:

function translatePigLatin(str) {
    // Create variables to be used
    var pigLatin = "";
    var regex = /[aeiou]/gi;
  
    // Check if the first character is a vowel
    if (str[0].match(regex)) {
      pigLatin = str + "way";
    } else if (str.match(regex) === null) {
      // Check if the string contains only consonants
      pigLatin = str + "ay";
    } else {
      // Find how many consonants before the first vowel.
      var vowelIndice = str.indexOf(str.match(regex)[0]);
  
      // Take the string from the first vowel to the last char
      // then add the consonants that were previously omitted and add the ending.
      pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";
    }
  
    return pigLatin;
  }

  // 4. nacin: 

  function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
  
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
  }
  
  // test here
  translatePigLatin("consonant");

  // 5. nacin:

  function translatePigLatin(str) {
    return str
      .replace(/^[aeiou]\w*/, "$&way")
      .replace(/(^[^aeiou]+)(\w*)/, "$2$1ay");
  }
  
  // test here
  translatePigLatin("consonant");

  // 6. nacin:

  function translatePigLatin(str, charPos = 0) {
    return ['a', 'e', 'i', 'o', 'u'].includes(str[0])
      ? str + (charPos === 0 ? 'way' : 'ay')
      : charPos === str.length
        ? str + 'ay'
        : translatePigLatin(str.slice(1) + str[0], charPos + 1);
  }


/* Test Cases:

translatePigLatin("california") should return "aliforniacay".

translatePigLatin("paragraphs") should return "aragraphspay".

translatePigLatin("glove") should return "oveglay".

translatePigLatin("algorithm") should return "algorithmway".

translatePigLatin("eight") should return "eightway".

Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".

Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay". */