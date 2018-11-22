
  //funcion cifrar
  const textResult = document.getElementById("respuesta");
  const botonCifrar = document.getElementById("btn-cifrar");

  const cipherEncode =  (inputString,offsetValue) => {
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
 
    botonCifrar.addEventListener("click", () => {
     const inputString = document.getElementById("text").value;
     const offsetValue = document.getElementById("desplazamiento").value;
     textResult.innerHTML = cipherEncode(inputString,parseInt(offsetValue))
    })


//funcion descifrar

    const textResultOne = document.getElementById("respuesta2");
    const botonDescifrarTwo = document.getElementById("btn-descifrar");

    const cipherDecode = (inputString,offsetValue) => {
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


      botonDescifrarTwo.addEventListener("click", () => {
        const inputString = document.getElementById("text2").value;
        const offsetValue = document.getElementById("desplazamiento2").value;
        textResultOne.innerHTML = cipherDecode(inputString,parseInt(offsetValue))
      })

  //ocultando partes de div cifrar y descifrar
document.getElementById("partecifrar").style.display = "none"
document.getElementById("partedescifrar").style.display = "none"

//boton cifrar para jugar
const btnCifrar= document.getElementById("btn-inicio-cifrar");

function jugarCifrar(){
  const inicioCifrarJugar = document.getElementById("inicio").value; 
  document.getElementById("partecifrar").style.display = "block"
  document.getElementById("inicio").style.display = "none"
}

btnCifrar.addEventListener("click",jugarCifrar);

//boton volver al inicio desde cifrar
const btnInicio = document.getElementById("btn-volver1");

function volverIncioOne(){
  const volverIncioCifrar = document.getElementById("partecifrar").value;
  document.getElementById("inicio").style.display = "block"
  document.getElementById("partecifrar").style.display = "none"
}
btnInicio.addEventListener("click",volverIncioOne);

//boton descifrar jugar
const btnDescifrar = document.getElementById("btn-inicio-descifrar");

function jugarDescifrar(){
  const inicioDescifrarJugar = document.getElementById("inicio").value;
  document.getElementById("partedescifrar").style.display = "block"
  document.getElementById("inicio").style.display = "none"
}
btnDescifrar.addEventListener("click",jugarDescifrar);


//boton volver al inicio desde descifrar
const  btnIncioDescifrar = document.getElementById("btn-volver2");
function volverDescifrar(){
  const inicioDescifrarVolver = document.getElementById("partedescifrar").value;
  document.getElementById("inicio").style.display = "block"
  document.getElementById("partedescifrar").style.display = "none"
}
btnIncioDescifrar.addEventListener("click",volverDescifrar);



