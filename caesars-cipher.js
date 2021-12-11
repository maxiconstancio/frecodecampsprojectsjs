function rot13(str) {
    /*Función que recibe una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.
    El cifrado ROT13 es donde los valores de las letras son desplazados por 13 lugares.*/
    let descipher = str.split('')
    for (let i=0; i<descipher.length;i++) {
        numAscii = (descipher[i].charCodeAt(0) + 13) > 90 ? descipher[i].charCodeAt(0) -13 :  descipher[i].charCodeAt(0) + 13; 
        if (descipher[i].charCodeAt(0) >= 65 && descipher[i].charCodeAt(0) <= 90) {
            descipher[i] = String.fromCharCode(numAscii);
            
        }
    }
    return descipher.join('');
  }
  
  console.log (rot13("SERR PBQR PNZC!!!"));