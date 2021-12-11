function palindrome(str) {
    //Devuelve true si la cadena proporcionada es un palíndromo. De lo contrario, devuelve false.
    let expReg = /\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\+|\=|\[|\{|\]|\}|\||\\|\'|\<|\,|\.|\>|\?|\/|\""|\;|\:|\-|\_|\s/g
    let testPal = str.replace(expReg,"").toLowerCase();
    let palTest = testPal.split('').reverse().join('');

    return palTest === testPal ? true: false;
  }
  
  console.log (palindrome("Luz azul"));