


  const textResult = document.getElementById("respuesta");
  const botonCifrar = document.getElementById("btn-cifrar");

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

    // console.log(cifrar("HolaLLL",3));
 
    botonCifrar.addEventListener("click", () => {
     const inputString = document.getElementById("text").value;
     const offsetValue = document.getElementById("desplazamiento").value;
     textResult.innerHTML = cifrar(inputString,parseInt(offsetValue))
    })




    const textResultOne = document.getElementById("respuesta2");
    const botonDescifrarTwo = document.getElementById("btn-descifrar");

    function descifrar(inputString,offsetValue){
        let subjectTextTwo;     
        let subjectAsciiTwo;
        let textResultTwo = "";
    
        for(let i=0; i<inputString.length ;i++){
         subjectTextTwo = inputString[i].charCodeAt(); // obtenemos su codigo ASCII
         subjectAsciiTwo = subjectTextTwo - offsetValue; // al valor de la letra de sumamos el desplazamiento
         textResultTwo = textResultTwo.concat(String.fromCharCode(subjectAsciiTwo)); // se unio el valor ascci con el resultado fromCharCode devolvera el valor en letras
        }
        return textResultTwo;
        }

// console.log(descifrar("krodOOO",3));

      botonDescifrarTwo.addEventListener("click", () => {
        const inputString = document.getElementById("text2").value;
        const offsetValue = document.getElementById("desplazamiento2").value;
        textResultOne.innerHTML = descifrar(inputString,parseInt(offsetValue))
      })
