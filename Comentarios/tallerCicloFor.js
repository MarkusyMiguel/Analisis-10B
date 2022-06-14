//Markus Scholz(la fiera alemana) y Andres Revellon(el pro)
//con cariño al profe XD

console.log("punto 1")
var numInicio = parseInt(prompt("Ingrese desde qué número inicia el ciclo"))
var numFin = parseInt(prompt("Ingrese hasta qué número va el ciclo"))
 
for(var i=numInicio; i<=numFin; i++){
    console.log(i)
}
for(i=numFin; i<=numInicio; i++){
    console.log(i)
}

console.log("punto 2")

var multiplo=parseInt(prompt("Ingrese un número hasta donde quiere conocer la multiplicacion"))
 
for(var i=0; i<=10; i++)

console.log(multiplo+ "x" + i +"="+ multiplo*i);

console.log("punto 3")

var multiplo=parseInt(prompt("Ingrese un número hasta donde quiere conocer la multiplicacion"))
var numerofinal=parseInt(prompt("ingrese el numero que ira la multiplicacion"))
for(var i=0; i<=numerofinal; i++)
console.log(multiplo+ "x" + i +"="+ multiplo*i);

console.log("punto 4")

var arreglonumeros=[]  
var nombre
var mayorcito

for(var i=1; i<10; i++){
    nombre=prompt("Ingrese el número "+1)
    arreglonumeros.push(nombre) 
}
mayorcito=arreglonumeros[0]
for(var i=0; i<10; i++){

    if(arreglonumeros[i]>mayorcito){
    mayorcito=arreglonumeros[i]
    }
}

console.log("punto 5")

var arreglaso=[]
var producto

for(var i=1; i<=5; i++){
    producto=prompt("ponga los productos que va a comparar XD ")
    arreglaso.push(producto)
}
arreglosxd=[]
for(var i=0; i<arreglaso.length; i++){
    var valorsito=parseInt(prompt("ingresa el precio de "+arreglaso[i]))
    arreglosxd.push(valorsito)
}




