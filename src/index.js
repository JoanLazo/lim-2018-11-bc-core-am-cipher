// creando la función para cifrar
//   let inputString = document.getElementsById("sujeto").value;
//   let offsetValue = document.getElementsById("valor_movimiento").value;
// const inputString = document.getElementById("sujeto").value;
// const offsetValue = document.getElementById("valor_movimiento").value;

 function cifrar(inputString,offsetValue){
    // let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let subjectText; 
    let subjectAscii;
    let textResult = "";

    for(let i=0; i<inputString.length ;i++){
     subjectText = inputString[i].charCodeAt(); // obtenemos su codigo ASCII
     subjectAscii = subjectText + offsetValue; // al valor de la letra de sumamos el desplazamiento
     textResult = textResult.concat(String.fromCharCode(subjectAscii)); // se unio el valor ascci con el resultado fromCharCode devolvera el valor en letras
    }
    return textResult;
    }
    
//  console.log(cifrar("HOLA MUNDO",2));
// function descifrar(){
//      const decipherText = document.getElementById("sujeto").value;
//      document.getElementById("cuadro_respuesta").innerHTML = subjectText;
// }


// const cifradoResul = cifrado(inputString,offsetValue);
// // console.log(cifradoResul);

// function cifrar(){
//     const resultOne = document.getElementById("sujeto").value;
    
// console.log(cifrar("HolaJoan",5));