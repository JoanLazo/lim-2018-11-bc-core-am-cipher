// declarando la variales texto, desplazamiento y respuesta
//   const inputString  = document.getElementById("text");
//   const offsetValue = document.getElementById("desplazamiento");
  const textResult = document.getElementById("respuesta");
  const botonCifrar = document.getElementById("btn-cifrar");
  const botonDescifrar = document.getElementById("btn-decifrar");

  function cifrar(inputString,offsetValue){
    let subjectText;     
    let subjectAscii;
    let textResultado = "";

    for(let i=0; i<inputString.length ;i++){
     subjectText = inputString[i].charCodeAt(); // obtenemos su codigo ASCII
     subjectAscii = subjectText + offsetValue; // al valor de la letra de sumamos el desplazamiento
     textResultado = textResultado.concat(String.fromCharCode(subjectAscii)); // se unio el valor ascci con el resultado fromCharCode devolvera el valor en letras
    }
    return textResultado;
    }

    
    console.log(cifrar("HolaLLL",3));
 
    botonCifrar.addEventListener("click", () => {
     const inputString = document.getElementById("text").value;
     const offsetValue = document.getElementById("desplazamiento").value;
     textResult.innerHTML = cifrar(inputString,parseInt(offsetValue))
    })


    function descifrar(inputString,offsetValue){
        let subjectText;     
        let subjectAscii;
        let textResult = "";
    
        for(let i=0; i<inputString.length ;i++){
         subjectText = inputString[i].charCodeAt(); // obtenemos su codigo ASCII
         subjectAscii = subjectText - offsetValue; // al valor de la letra de sumamos el desplazamiento
         textResult = textResult.concat(String.fromCharCode(subjectAscii)); // se unio el valor ascci con el resultado fromCharCode devolvera el valor en letras
        }
        return textResult;
        }

console.log(descifrar("krodOOO",3));