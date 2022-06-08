//markus scholz Andres Revellon :D y Miguel Angel Martinez

console.log("punto 1")
var repeticiones=0;
var num= parseInt(prompt("ponga un numero hasta el cual desea llegar y asi saber cual es multiplo de 5"))

while (repeticiones<=num){
    if(repeticiones%5==0){
    console.log("el numero crack" +repeticiones+ "es multiplo de 5")
    }else{
        console.log("crack perdon pero" +repeticiones+ "no es multiplo 5 :(")
    } 
    repeticiones+=1   
}

console.log("punto 2")
var compras= parseInt(prompt("cuantos articulos de la tienda desea comprar"));
var sumatoria=0;
var acumulado=0;
while(acumulado<compras){
    var precio= parseInt(prompt("ingrese cuanto vale su articulo"))
    sumatoria += precio
    acumulado += 1
}
console.log("el total es" +sumatoria)

console.log ("punto 3")
var suma=0;
var acumulatoria=0;
var respuesta= prompt("bueno pa va a seguir registrando si o no??")

while(respuesta!="si")
    var compras= parseInt(prompt("cuantos articulos de la tienda desea comprar"));
    var sumatoria=0;
    var acumulado=0;
console.log("el total es" +sumatoria)


console.log("punto 4")

var compras= parseInt(prompt("cuantos articulos de la tienda desea comprar"));
var sumatoria=0;
var acumulado=0;
while(acumulado<compras){
    var precio= parseInt(prompt("ingrese cuanto vale su articulo"))
    sumatoria += precio
    acumulado += 1
}if(acumulado>= 25){
     sumatoria=precio*0.8
     console.log("el precio total con el descuento es de "+sumatoria)
}
else if(acumulado>=15){
sumatoria=precio*0.85
console.log("el precio total con el descuento es de "+sumatoria)
}
else if(acumulado>=8){
    sumatoria=precio*0.90
    console.log("el precio total con el descuento ")
}

console.log("punto 5")

var acumulacion=0;
var nota = prompt("Cuantas notas queires digitar")
var notasguardadas = 0;
var Ganaron = 0;
var perdieron = 0;

while(acumulacion<nota){
    var pregunta = parseFloat(prompt("que nota tienes?"))
    notasguardadas+=pregunta
    acumulacion++
    if(pregunta<3.5){
        console.log ("perdiste el año" + acumulacion)
        perdieron ++

    }else if(pregunta>=3.5){
        console.log ("no perdiste el año" + acumulacion)
        Ganaron ++
    }

}

var totalnotas = notasguardadas/nota

if (totalnotas > 3.5){
    console.log ("la cantidad de estudiantes no es suficiente para curso de verano")
} else console.log ("debe abrirse el curso de verano")

 HEAD
console.log ("La cantiadad de estudiantes que ganaron fueron " + Ganaron + " y los reprobados fueron" + perdieron)

 




console.log ("La cantiadad de estudiantes que ganaron fueron " + Ganaron + "y los reprobados fueron" +perdieron)
 e6452c61b07db5fbc5d5231d74b3a3ecf456394c
