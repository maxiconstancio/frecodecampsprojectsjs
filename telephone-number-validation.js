function telephoneCheck(str) {
    //Devuelve true si la cadena pasada concuerda con un número de teléfono válido en Estados Unidos.
    let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
        rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

    if (rex1.test(str)) {
        return true;
    }
    else {
        return rex2.test(str) ? true : false
    }
}
  
  console.log (telephoneCheck("555-555-5555"));