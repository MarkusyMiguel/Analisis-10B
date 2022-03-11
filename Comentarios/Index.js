console.log ("Hola Mundo");//imprimir por consola
//comentario en linea   
/*comentario
en
varias
lineas
o
multilinea
*/ 
/*son espacios de memoria que almacenen la informacion
existen varios tipos de variables en js, pero generalmente se utilizan los siguientes:
string: Almacena cadenas de texto, se debe aclarar o almacenar el valor entre comillas 
int: Almacena numeros enteros 
Double: Almacena numeros reales 
boolean: Almacenan valores de verdad (true o false)
*/
/* Declarar variables
Declarar una variable es crearla, decirle al lenguaje como se llama la variable eh indicarle que ya existe.
Para declarar una variable se puede utilizar ya sea la palabra reservada var o let
*/
var nombre;

console.log(nombre);
/* inicializar variables
Para inicializar variables es necesario asignar un valor cuando se crea esta variable
*/
var apellido = "Scholz";
console.log(apellido);
/* asignar un valor:
Asignar un valor se hace mediante del signo =, se debe hacer sobre una variable que ya fue declarada 
*/
nombre = "Markus"
console.log(nombre + " " + apellido);
//desde otra variable
var edad=16
var edadestudiante=edad
//desde teclado
var gradoEstudiante=prompt("Ingrese Un Grado");
console.log("El grado es:" + gradoEstudiante);
/* Constantes: 
Son valores que una vez inicializados no se pueden cambiar lo que almacenan. Se crean con la palabra reservada Const, El nombre de las constantes se escriben todo en mayuscula para diferenciarlo de la variables Enter 
*/

var suma;
suma = 5+4;
console.log (suma);

let a = 10;
suma = 8 + a;
console.log(suma);

let b = 20
suma = a + b;
console.log (suma);

var resultado; 
resultado= a - b;
console.log(resultado)

resultado = b-a
console.log (resultado)

var producto;

producto = a * b
console.log (producto)

var res;

res=a*2
console.log(res);
res=a*2 - 1;
console.log(res)
res = a*2 - 1;
console.log (res);

var residuo;

residuo=12%2;
console.log(residuo)
//incremento
var incre=1;
console.log(incre);

incre=incre+1;
console.log(incre);

incre+=1;
console.log(incre);

incre++;
console.log(incre);

//decremento

var decre=1;
console.log (decre);//1

decre -=1;
console.log (decre);//2

decre-= 1
console.log(decre);//3

decre--;
console.log(decre);//4
 //operaciones aumentadas 
// Son operaciones que se le realizan a una variable y el resultado se guarda en si mismo. La variable debe tener un valor antes de realizar la operacion 


var SumaAumento=0;

SumaAumento += 1;
SumaAumento += 48;
console.log(SumaAumento);

var RestaAumento=20;

RestaAumento-=1;
RestaAumento-=8;
console.log(RestaAumento);

var Aumento=20;

Aumento-=1;
Aumento-=8;
console.log(Aumento);

var exp 
exp = 3**2;
console.log (exp);

exp=3**3;
console.log(exp);


var nombre="Miguel"
var apellido="scholz"
var nomCompleto=nombre + " " + apellido;
console.log(nomCompleto);

var cadenita1= "3";
var cadenita2= "5";

var cadenatotal= cadenita1 + cadenita2;
console.log(cadenatotal);
//.length
//Permite conocer la longitud de una cadena o la longitud de un vector 
console.log(nomCompleto.length);
console.log(nombre[3]);


