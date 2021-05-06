/* Intermediate Algorithm Scripting: Convert HTML Entities
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities. */

function convertHTML(str) {
    let tempArr = str.split('');
  
    for (let i = 0; i < tempArr.length; i++){
      (tempArr[i] === '&') ? tempArr.splice(i, 1, '&amp;') : false;
      (tempArr[i] === '<') ? tempArr.splice(i, 1, '&lt;') : false;
      (tempArr[i] === '>') ? tempArr.splice(i, 1, '&gt;') : false;
      (tempArr[i] === '"') ? tempArr.splice(i, 1, '&quot;') : false;
      (tempArr[i] === "'") ? tempArr.splice(i, 1, '&apos;') : false;
    }
  
      return tempArr.join('');
}
  
  convertHTML('Stuff in "quotation marks"');

// 2. nacin:

function convertHTML(str) {
    // Split by character to avoid problems.
  
    var temp = str.split("");
  
    // Since we are only checking for a few HTML elements, use a switch
  
    for (var i = 0; i < temp.length; i++) {
      switch (temp[i]) {
        case "<":
          temp[i] = "&lt;";
          break;
        case "&":
          temp[i] = "&amp;";
          break;
        case ">":
          temp[i] = "&gt;";
          break;
        case '"':
          temp[i] = "&quot;";
          break;
        case "'":
          temp[i] = "&apos;";
          break;
      }
    }
  
    temp = temp.join("");
    return temp;
  }
  
  //test here
  convertHTML("Dolce & Gabbana");

// 3. nacin:

function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    // Using a regex, replace characters with it's corresponding html entity
    return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
  }
  
  // test here
  convertHTML("Dolce & Gabbana");

// 4. nacin:

function convertHTML(str) {
    // Use Object Lookup to declare as many HTML entities as needed.
    const htmlEntities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&apos;"
    };
    //Use map function to return a filtered str with all entities changed automatically.
    return str
      .split("")
      .map(entity => htmlEntities[entity] || entity)
      .join("");
  }
  
  // test here
  convertHTML("Dolce & Gabbana");

/* Test Cases:

convertHTML("Dolce & Gabbana") should return "Dolce &amp; Gabbana".

convertHTML("Hamburgers < Pizza < Tacos") should return "Hamburgers &lt; Pizza &lt; Tacos".

convertHTML("Sixty > twelve") should return "Sixty &gt; twelve".

convertHTML('Stuff in "quotation marks"') should return "Stuff in &quot;quotation marks&quot;".

convertHTML("Schindler's List") should return "Schindler&apos;s List".

convertHTML("<>") should return "&lt;&gt;".

convertHTML("abc") should return "abc". */