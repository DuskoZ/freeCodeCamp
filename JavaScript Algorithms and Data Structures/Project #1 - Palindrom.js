const palindrome = str => {
    let newStr = str.replace(/\W/g, '');
    newStr = newStr.replace(/_/, '').toLowerCase();
    console.log(newStr);
    let word = '';
    for (let i = 0; i < newStr.length; i++) {
        word += newStr.charAt(newStr.length - 1 - i);
        }    
    return (word === newStr) ? true : false;
  }
  
palindrome("eye");