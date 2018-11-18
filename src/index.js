// declarando la variales texto, desplazamiento y respuesta
  const oracionTexto  = document.getElementById("text");
  const lineaDesplazamiento = document.getElementById("desplazamiento");
  const textoRespuesta = document.getElementById("respuesta");

  //creando la funcion cifrar utilizando split()para agregar el espacio y map() para agregar mayuscula y minuscula
function cifrado(){
    const oracionIngresada = text.value;
    textoRespuesta.value = oracionIngresada.split("").map(i =>{
        let capitalLetter  = (i === i.toUpperCase()) ? true :false;
        let valorEntero = i.toLowerCase().charCodeAt(0);
        if(valorEntero >= 97 && valorEntero <= 122){
            const valorDesplazamiento = parseInt(desplazamiento.value);

            if(valorEntero + valorDesplazamiento > 122)
            valorEntero = 97 + (valorEntero - 122) + valorDesplazamiento - 1;
				else
					valorEntero = valorEntero + valorDesplazamiento;
        }
        let cifrado = String.fromCharCode(valorEntero);
        return capitalLetter ? cifrado.toUpperCase() : cifrado;
    }).join('');
    text.addEventListener("string",cifrado);
    desplazamiento.addEventListener("change", cifrado);
}

//creando variables para descifrar
const oracionTexto1  = document.getElementById("text2");
const lineaDesplazamiento1 = document.getElementById("desplazamiento2");
const textoRespuesta1 = document.getElementById("respuesta2");
//creando al funcion descifrar
function descifrar_respuesta(){
    const oracionIngresada1 = text2.value;
    textoRespuesta1.value = oracionIngresada1.split("").map(i =>{
        let capitalLetter1  = (i === i.toUpperCase()) ? true :false;
        let valorEntero1 = i.toLowerCase().charCodeAt(0);
        if(valorEntero1 >= 97 && valorEntero1 <= 122){
            const valorDesplazamiento1 = parseInt(desplazamiento2.value);

            if(valorEntero1 + valorDesplazamiento1 > 122)
            valorEntero1 = 97 + (valorEntero1 - 122) + valorDesplazamiento1 - 1;
				else
					valorEntero1 = valorEntero1 - valorDesplazamiento1;
        }
        let descifrar_respuesta = String.fromCharCode(valorEntero1);
        return capitalLetter1 ? descifrar_respuesta.toUpperCase() : descifrar_respuesta;
    }).join('');
    text.addEventListener("string",descifrar_respuesta);
    desplazamiento.addEventListener("change", descifrar_respuesta);
}


// window.onload = function(){
//     document.getElementById("cifrar").onclick = function(){
//         let content = document.getElementById("text").value;
//         document.getElementById("respuesta").innerHTML = content;
//      }
//     }  
    
    
    // function cifrar(inputString,offsetValue){
    // let subjectText;     
    // let subjectAscii;
    // let textResult = "";

    // for(let i=0; i<inputString.length ;i++){
    //  subjectText = inputString[i].charCodeAt(); // obtenemos su codigo ASCII
    //  subjectAscii = subjectText + offsetValue; // al valor de la letra de sumamos el desplazamiento
    //  textResult = textResult.concat(String.fromCharCode(subjectAscii)); // se unio el valor ascci con el resultado fromCharCode devolvera el valor en letras
    // }
    // return textResult;
    // }
    
// console.log(cifrar("HolaJoan",5));