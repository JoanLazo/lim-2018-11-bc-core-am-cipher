const cipherEncode =  (offset,string) => {
  let subjectText;     
  let subjectAscii;  
  let textResultado = "";
  
  for(let i=0; i<string.length ;i++){

   subjectText = string[i].charCodeAt(); 

   if(subjectText === 32){
     subjectText += " ";
   }
   if(subjectText >= 65 && subjectText <= 90){
    subjectText = (subjectText - 65 + offset) % 26 + 65;
   }
   if(subjectText >= 97 && subjectText <= 122){
     subjectText = (subjectText - 97 + offset) % 26 + 97;
   }
   subjectAscii = subjectText;
   textResultado = textResultado.concat(String.fromCharCode(subjectAscii));
  }
  return textResultado;
  } 

  const cipherDecode = (offset,string) => {
    let subjectTextTwo;     
    let subjectAsciiTwo;
    let textResultTwo = "";
    
    for(let i=0; i<string.length ;i++){

     subjectTextTwo = string[i].charCodeAt();

     if(subjectTextTwo === 32){
      subjectTextTwo += " ";
    }
    if(subjectTextTwo >= 65 && subjectTextTwo <= 90){
     subjectTextTwo = (subjectTextTwo - 90 - offset) % 26 + 90;
    }
    if(subjectTextTwo >= 97 && subjectTextTwo <= 122){
      subjectTextTwo = (subjectTextTwo - 122 - offset) % 26 + 122;
    }
     subjectAsciiTwo = subjectTextTwo;
     textResultTwo = textResultTwo.concat(String.fromCharCode(subjectAsciiTwo)); // se unio el valor ascci con el resultado fromCharCode devolvera el valor en letras
    }
    return textResultTwo;
    }

    
window.cipher = {
  encode : cipherEncode,
  decode : cipherDecode,
};


