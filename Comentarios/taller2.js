var lado;
lado = parseInt( prompt("Por favor Ingresar El Lado Para Hallar el Area del Cuadrado") );
console.log("El Area Del Cuadrado Es ", lado * lado)
var lado2
lado2 = parseInt( prompt("Por favor Ingresar El Lado Para Hallar el Area del Cubo") );
console.log("El Volumen Del Cubo Es ", lado2 * lado2 * lado2)

//Punto 2
console.log("Punto 2");

var base
base = parseInt( prompt("Por favor Ingresar La Base Del Rectangulo") );
var altura
altura = parseInt( prompt("Por favor Ingresar La Altura Del Rectangulo") );
console.log("El Perimetro es de " + 2 * (base + altura));
console.log("El Area es de " + (base + altura));

//Punto 3
console.log("Punto 3");

var radio;
radio = parseInt(prompt("Por favor Ingresar El Radio") );
console.log("El Area Del Circulo Es ", Math.PI * radio * radio)

//Punto 4
console.log("Punto 4");

var base1;
var base2;
var h;
base1 = parseInt(prompt("Por favor de ingresar la primera base") );
base2 = parseInt(prompt("Por favor de ingresar la segunda base") );
h = parseInt(prompt("Por favor de ingresar la altura") );
console.log("El Area Del Trapezoide Es ", + (h * (base1 + base2) / 2) );

//Punto 5
console.log("Punto 5");

var ancho;
var largo;
var profundo;
ancho = parseInt(prompt("Por favor de ingresar lo ancho") );
largo = parseInt(prompt("Por favor de ingresar lo largo") );
profundo = parseInt(prompt("Por favor de ingresar lo profundo") );
console.log("La piscina se llenaria con", + ancho * largo * profundo, "litros");

//Punto 6
console.log("Punto 6");

var alto1;
var ancho1;
var total;
alto1 = parseInt(prompt("Por favor de ingresar lo alto") );
ancho1 = parseInt(prompt("Por favor ingresar lo ancho") );
total = (alto1 * ancho1) * 22000
console.log("El Total a pagar es de: " + total + "$");

//Punto 7A
console.log("Punto 7A");

var cm;
var resultado;
cm = parseInt(prompt("Por favor ingresar la longitud de centimetros que quieres convertir a kilometros"))
resultado = cm*(1/100)*(1/1000)
console.log("Los Centimetros han sido convertidos son " + resultado + "Km")

//Punto 7B
console.log("Punto 7B");

var dl;
var resultado2;
dl = parseInt(prompt("Por favor ingresar los decilitros que quieres convertir a litro"))
resultado2 = dl*(0.1/1.0)
console.log("Los Decilitros han sido convertidos son " + resultado2 + "L")

//Punto 7C
console.log("Punto 7C");

var mg;
var resultado3;
mg = parseInt(prompt("Por favor ingresar los microgramos que quieres convertir a gramos"))
resultado3 = mg*(1.0/1000000)
console.log("Los Microgramos han sido convertidos son " + resultado3 + "G")

//Punto 7D
console.log("Punto 7D");

var kilo;
var resultado4;
kilo = parseInt(prompt("Por favor ingresar los kilometros que quieres convertir a milimetros"))
kilo = prompt("Por favor ingresar los kilometros que quieres convertir a milimetros")
resultado4 = kilo*1000000
console.log("Los Kilometros han sido convertidos son " + resultado4 + " mm ")