window.cipher = {
  
  cipher.encode(offsetValue,inputString) : cipherEncode => {
    let subjectText;     
    let subjectAscii;  
    let textResultado = "";
    
    for(let i=0; i<inputString.length ;i++){

     subjectText = inputString[i].charCodeAt(); 

     if(subjectText === 32){
       subjectText += " ";
     }
     if(subjectText >= 65 && subjectText <= 90){
      subjectText = (subjectText - 65 + offsetValue) % 26 + 65;
     }
     if(subjectText >= 97 && subjectText <= 122){
       subjectText = (subjectText - 97 + offsetValue) % 26 + 97;
     }
     subjectAscii = subjectText;
     textResultado = textResultado.concat(String.fromCharCode(subjectAscii));
    }
    return textResultado;
    }


    cipher.decode(offsetValue,inputString) :  cipherDecode => {
      let subjectTextTwo;     
      let subjectAsciiTwo;
      let textResultTwo = "";
      
      for(let i=0; i<inputString.length ;i++){

       subjectTextTwo = inputString[i].charCodeAt();

       if(subjectTextTwo === 32){
        subjectTextTwo += " ";
      }
      if(subjectTextTwo >= 65 && subjectTextTwo <= 90){
       subjectTextTwo = (subjectTextTwo - 90 - offsetValue) % 26 + 90;
      }
      if(subjectTextTwo >= 97 && subjectTextTwo <= 122){
        subjectTextTwo = (subjectTextTwo - 122 - offsetValue) % 26 + 122;
      }
       subjectAsciiTwo = subjectTextTwo;
       textResultTwo = textResultTwo.concat(String.fromCharCode(subjectAsciiTwo)); // se unio el valor ascci con el resultado fromCharCode devolvera el valor en letras
      }
      return textResultTwo;
      }
};

