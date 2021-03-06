# Crypto Class

[Crypto Class](https://joanlazo.blogspot.com/2018/11/cripto-class.html) es una juego educativo orientado a la  creación de oraciones, con el apoyo del docente un estudiante de primaria podrá conocer, identificar y crear sus propias oraciones que tendran un mensaje oculto al ser cifrada y divertirse descifrando la oración , con Crypto Class aprendez de forma divertida .

![crypto class](https://4.bp.blogspot.com/-WWARTLqKoU8/W_yJq4DG8sI/AAAAAAAAJmQ/zVmYyxqhK508-P5yHUD0x6_A8W58wki3ACK4BGAYYCw/s1600/CongratsClass%2Bof2018%2521.png)

Con Crypto Class podras crear oraciones simples y compuestas y jugar creando estas oraciones en forma encryptada o secreta. Este juego permite al docente tener una herramienta educativa para aplicarla en clase reforzando el aprendizaje en el área de comunicación con apoyo de un juego encryptado que hara divertido el aprendizaje.

***
## Consideraciones generales

### ¿Cómo funciona Crypto Class?

Cryto Class nos permite crear oraciones y escoger una clave secreta para así poder cifrar nuestra oración, de esta manera los alumnos se divertiran creando oraciones y luego compartirlas con sus compañeros en clase para ver el resultado de ellas de forma cifrada. Esta oración cifrara tambien puede descrifrarce con la opción descifrar el cual funciona pegando el mensaje cifrado, deslizando la barra para encontrar la clave secreta que revelará el mensaje, luego de esto se da clic en descifrar y podrás ver el mensaje descifrado.
Puede repetir el proceso tantas veces quieras volviendo al inicio, y escogiendo las dos opciones de cifrar o descifrar.
***

## Proceso y decisiones de diseño

### Proceso

En el proceso de diseño y desarrollo para esta aplicación como primer paso se diseño la maqueta de lo que seria la idea de interfaz de Crypto Class, a partir de esa idea se hicieron modificaciones.
Como segundo paso se realizo el flujo de diseño de la app, luego de ello se realizo el codigo empezando por los archivos HTML, CSS y Javascript; luego de ello se paso a realizar los test unitarios con Node.js. Se utilizo Visual Studio Code como editor de código.
Crypto Class es una aplicación orientada a las necesidades de los docentes ya que es una herramienta didáctica para la creación de oraciones con cifrado y descifrado. 

### Decisiones de diseño

- El diseño fue orientado para niños de primaria entre los 6 a 8 años de edad, por ello la interfaz tiene un fondo llamativo y relacionado a la escula donde aprenderaz jugando. 
- La caja de texto tiene un fondo ligeramente oscuro que da contraste con las letras blancas, escogi este color ya que es amigable y claro al momento de leer.
- El tipo de texto usado es 'Allerta Stencil', sans-serif.
- El color usado en los botones es `#2fdef5`.
- La primera ventana nos muestra la bienvenida a la aplicación donde nos explica brevemente que es Crypto Class con un icono como referencia y nos pregunta si el usuario es un docente donde invita a acceder a un link donde podrá conocer más sobre la aplicación y su modo de uso, en caso no sea un docente pasamos al boton jugar.
 - Luego de ello nos encontramos con la ventana donde observamos los pasos para jugar, uno de los más importantes es el número uno donde nos indica que debemos crear un oración compuesta y en caso no recordemos como hacerla nos indica de color celeste un link para liberar esas duda y nos dirige al blog de Crypto Class donde hay información sobre la creación de oraciones.
 - Luego nos pregunta si conocemos los conceptos cifrar o descifrar, en caso sea que no se muestra un icono donde nos dirige a un blog donde se da información sobre estos conceptos y las opciones con los botones de las principales funciones de la aplicación (cifrar y descifrar), cada uno de los botones nos dirige a una nueva ventana donde podremos cifrar la oración o descifrar según sea el caso, además de ello cuenta con la parte de la clave secreta, que es la clave para poder revelar el mensaje de nuestra oración , para poder tener la clave se ha usado un "input type range", el cual hace más divertido el uso de la aplicación pues al deslizarla se revelara el valor de la clave secreta.
 - En las ventanas de cifrar o descifrar se encuentran los botones de copiar para hacer mas facil el ejercicio de cifrar y descifrar, ademas de tener el boton de inicio que nos lleva a la parte de los pasos para empezar a jugar de nuevo. 
 - Para finalizar en la parte final o footer se encuentra las redes sociales de la aplicación para poder ser compartida entre otros docentes o conocer más sobre Crypto Class.

![crypto class](https://3.bp.blogspot.com/-77HGSJiC6NU/XAAUtMqUFII/AAAAAAAAJoY/eb9yBIO2P24gmhCj7ggHGvyfynrhGbXcACLcBGAs/s640/inicio.png)

![crypto class](https://1.bp.blogspot.com/-_VwuazomGI0/XAAUyvCl07I/AAAAAAAAJoc/YCrff2BjCDEbiXhd3GcH3eiBfBjNDo-ygCLcBGAs/s640/jugar.png)

![crypto class](https://3.bp.blogspot.com/-SSd0lpEmGu0/XAAVAurszNI/AAAAAAAAJok/_av1KeO6zQsYcxF9UmoUbB8oivHmB1BZwCLcBGAs/s640/cifrar.png)

***
## Usuarios y su relación con el producto

Los usuarios para esta aplicación son los docentes del área de primaria y alumnos de primaria de 1ero a 3ero.

![crypto class](https://1.bp.blogspot.com/-NQ5TrWK7mb0/W_31lla9kBI/AAAAAAAAJm0/Rg5rQRMYVJgmoDlyDWSlNhFuz7eOOoHBACLcBGAs/s640/cRYPTO%2BCLASS.png)


### Profesores

Profesores 4.0 que buscan mejorar el aprendizaje significativo de sus alumnos innovando con herramientas de apoyo educativo. La falta de atención o ínteres por las clases genera la busqueda de nuevas alternativas para lograr un aprendizaje significativo que pueda ser usado en todo momento, que sea divertido para los alumnos y que este orientado a sus necesidades y de facil uso. Crypto Class es una alternativa para cubrir la necesidad de profesores en el área de primaria con el curso de comunicación ayudando en el uso de las TICS y mejorando la relación del alumno con el profesor.

### Niños / estudiantes de primaria (1er , 2do y 3ero de primaria)

Niños dentro de la [generación T](https://es.wikipedia.org/wiki/Generaci%C3%B3n_T), prefieren tener un aprendizaje que este relacionado o compartido con la tecnologia. Crypto Class es una alternativa para poder aprender jugando junto con la tecnologia, adaptandose a las necesidades de una educación 4.0.
*** 
## Problemática/Necesidad

* Falta de interés en los niños de primaria por el curso de Comunicación/Gramática en el tema de formación de oraciones simples y compuestas. 

* Falta de herramientas educativas tecnológicas para el aprendizaje, con las cuales el docente puede generar un aprendizaje significativo adaptandoce a las necesidades y costumbres de una [generación T](https://es.wikipedia.org/wiki/Generaci%C3%B3n_T).

* Reforzar las clases de Comunicación de forma divertida.

***
## Solución de problema

![crypto class](https://3.bp.blogspot.com/-MbfXTaaauAY/W_yJAXvweCI/AAAAAAAAJmE/_mVSgKHC0dsHBpbYpzsnBtC2ipF-hkPUgCLcBGAs/s640/Aprende%2Bjugado%2Bcon%2Bcripto%2Bclass%2521.png)

### Para el docente
Crypto Class permite al [docente 4.0](https://elpais.com/tecnologia/2012/06/08/actualidad/1339156111_565965.html) poder reforzar el aprendizaje de sus alumnos desarrollando sus conocimiento en la práctica creando oraciones de forma divertida, Cryto Class permite al docente tener material de apoyo para complementar el aprendizaje en el salón de clases; contiene una guía explicativa sobre el uso de esta herramienta educativa y los pasos a seguir para crear las oraciones y utilizarlas en el cifrado y descifrado de estas.

Crypto Class no solo permite al docente poder mejorar el aprendizaje significativo y conseguir competencias tecnológicas en sus alumnos sino que aplica una dinámica de [gamificación](https://iiemd.com/gamificacion/que-es-gamificacion) haciendo que los alumnos aprendan jugando.


### Para el estudiante
 La aplicación permite al estudiante poder resolver sus dudas tanto sobre la creación de oraciónes como los significados de cifrar y descifrar. 

 El estudiante con apoyo de su profesor podra crear oraciones tanto simples como compuestas y escoger entre la opción de cifrar o descifrar según sea la forma de su oración y poder compartirlo en clase con sus compañeros tratando de descubrir el mensaje oculto, esto lo hace más divertido ya que para poder resolver el cifrado es necesario conocer la clave secreta que se consigue al deslizar la barra, solo el creador de la oració conocera la clave secreta y la usará para descifrar su oración.



