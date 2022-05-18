// Andres Revellon y Markus Scholz

console.log("punto 1")
var Cantrepeticiones = 1;
 
while(Cantrepeticiones <= 7){
    console.log("numero"+Cantrepeticiones)
    Cantrepeticiones += 1;
}

console.log("punto 2")
var ciclo=0

while(ciclo<=30){
    console.log(ciclo);
    ciclo+=3;
}

console.log("punto 3")

var ciclo3=0

while(ciclo3<=50){
    console.log(ciclo3);
    ciclo3+=2;
}
console.log("punto 4")
var ciclo4=1

while(ciclo4<=10){
    console.log(ciclo4);
    ciclo4+=2;
}

console.log("punto 5")

var numerito =prompt("ingrese un numero")

{
  while (numerito%2==0); 
  console.log("el numero "+ numerito +" es impar, ingrese otro")
} 

console.log("punto 6")

var acu=0

while(acu<=27){
var edad =parseInt(prompt("ingrese la edad"))
acu+=edad
}
console.log("el acomulado de edades es "+ edad)

console.log ("punto 7")

var rifa 
var intento=prompt("ingrese un color");
while(intento != rifa){
    console.log("repuesta incorrecta");
    intento=prompt("lo lamento, siguento turno");
}
console.log("felicidades gano la rifa");

console.log("punto 8")

var acu=0
var Estuadiante=prompt ("ingrese el nombre del estudiante");
var CantidadNotas=prompt("Ingrese las notas que tiene el estudiante")
var notas=0
while(notas<CantidadNotas){
    var notafin=parseFloat(prompt("Las notas que tiene el estudiante"))
    acu+notafin;
    console.log (acu);
    notas;
}

var promedio = acu/CantidadNotas;

if (promedio>3.5){
    console.log (Estuadiante+"Gano la asignatura en " +promedio)
}
else console.log (Estuadiante+"perdio la asignatura en "+promedio)