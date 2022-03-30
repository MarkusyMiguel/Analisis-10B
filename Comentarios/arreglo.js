/*es el que almacena cualquier tipo de dato y cualquier cantidad, es decir, string, int, double, array, objetos entre otros.
los arreglos o arrays tienen operaciones como insertar, eliminar, modificar y consultar.
la declaracion de un arreglo se hace con [] y los elementos dentro de el se separan con ,.Tambien se crea o se declara con las palabras reservadas var o net seguiudas del nombre de la regla*/
var miPrimerArreglo=["Markus", 14];
console.log(miPrimerArreglo);
//arreglo de arreglos
var notaEst=[["Markus",4.5],["Miguel",5.0]];
console.log(notaEst);
//consultar segun su posicion
//recordar que las posiciones de un vector o arreglo comienzan desde cero 0
console.log(miPrimerArreglo[0][0]);
//consultar posiciones 
//primero se accede a la posicion de arreglo mas grande y luego a las posiciones de arreglos internos 
console.log(notaEst[0][1]);
console.log(notaEst[1][0]);

//modificar elementos
//Se debe indiccar la posicion del elemento y luego se le asigna el nuevo valor 

miPrimerArreglo [0]= "Markus";
console.log (miPrimerArreglo);
notaEst[1][0]= "laura";
console.log(notaEst[1]);
miPrimerArreglo[1]=18;
console.log (miPrimerArreglo);
notaEst[0][1]= 4.8;
console.log(notaEst[0])

//agregar elemento al arreglo 
miPrimerArreglo.push("10b");
console.log (miPrimerArreglo);

miPrimerArreglo.unshift("gomez");
console.log (miPrimerArreglo);


//quiz
//punto 1
var ArregloNumero2 = ["Analisis","tecnologia","Desarollo"];
console.log(ArregloNumero2);

//punto 2
ArregloNumero2 [2] = "BBDD"
console.log(ArregloNumero2);

//punto 3 
ArregloNumero2.unshift("introduccion");
console.log(ArregloNumero2);
ArregloNumero2.pop ("BBDD");
console.log(ArregloNumero2);
