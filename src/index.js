
  //funcion, boton cifrar
  const textResult = document.getElementById("respuesta");
  const botonCifrar = document.getElementById("btn-cifrar");

 
    botonCifrar.addEventListener("click", () => {
     const inputString = document.getElementById("text").value;
     const offsetValue = document.getElementById("desplazamiento").value;
     textResult.innerHTML = cipher.encode(parseInt(offsetValue),inputString);
    })


//funcion , boton descifrar

    const textResultOne = document.getElementById("respuesta2");
    const botonDescifrarTwo = document.getElementById("btn-descifrar");

      botonDescifrarTwo.addEventListener("click", () => {
        const inputString = document.getElementById("text2").value;
        const offsetValue = document.getElementById("desplazamiento2").value;
        textResultOne.innerHTML = cipher.decode(parseInt(offsetValue),inputString);
      })

  //ocultando partes de div cifrar y descifrar
document.getElementById("inicio").style.display = "none"
document.getElementById("partecifrar").style.display = "none"
document.getElementById("partedescifrar").style.display = "none"

//boton para de inicio para empezar a jugar
const btnJugarInicio= document.getElementById("btn-jugar");

function btnJugar(){
  document.getElementById("inicio").style.display = "block"
  document.getElementById("parteinicio0").style.display = "none"
}

btnJugarInicio.addEventListener("click",btnJugar);

//boton cifrar para jugar
const btnCifrar= document.getElementById("btn-inicio-cifrar");

function jugarCifrar(){
   
  document.getElementById("partecifrar").style.display = "block"
  document.getElementById("inicio").style.display = "none"
}

btnCifrar.addEventListener("click",jugarCifrar);

//boton para copiar lo cifrado desde cifrar 

const btnCopy = document.getElementById("btn-copiar");

btnCopy.addEventListener('click', () => {
  let aux = document.getElementById('respuesta');
  aux.select();
  // Copia el texto seleccionado
  document.execCommand("copy");
});


//boton para copiar los descifrado desde descifrar

const botonPegar = document.getElementById("btn-copiar2");

botonPegar.addEventListener('click', () => {
  let aux = document.getElementById('respuesta2');
  aux.select();
  // Copia el texto seleccionado
  document.execCommand("copy");
});

//boton volver al inicio desde cifrar
const btnInicio = document.getElementById("btn-volver1");

function volverIncioOne(){

  document.getElementById("inicio").style.display = "block"
  document.getElementById("partecifrar").style.display = "none"
}
btnInicio.addEventListener("click",volverIncioOne);

//boton descifrar jugar
const btnDescifrar = document.getElementById("btn-inicio-descifrar");

function jugarDescifrar(){

  document.getElementById("partedescifrar").style.display = "block"
  document.getElementById("inicio").style.display = "none"
}
btnDescifrar.addEventListener("click",jugarDescifrar);


//boton volver al inicio desde descifrar
const  btnIncioDescifrar = document.getElementById("btn-volver2");
function volverDescifrar(){
  
  document.getElementById("inicio").style.display = "block"
  document.getElementById("partedescifrar").style.display = "none"
}
btnIncioDescifrar.addEventListener("click",volverDescifrar);

//mostrando el valor de range cifrar

const inputRange = document.getElementById("desplazamiento");
const claveRange = document.getElementById("clave");

const valorRange = function range1(){
  claveRange.innerHTML = inputRange.value;
}

inputRange.addEventListener("change",valorRange);


//mostrando el valor de range descifrar
const inputRange2 = document.getElementById("desplazamiento2")
const claveRange2 = document.getElementById("clave2")

const valorRange2 = function range2(){
  claveRange2.innerHTML = inputRange2.value;
}

inputRange2.addEventListener("change",valorRange2);
