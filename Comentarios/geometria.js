//markus scholz y Andres Revellon
function main_calculadora(){
    var menu = prompt("que operacion desea hacer (digite el numero)\n 1.suma \n 2resta \n 3.multiplicacion \n 4.division \n 5.potencia")

    var numero1 = parseFloat(prompt("ingrese el primer valor"))
    var numero2 = parseFloat(prompt("ingrese el segundo valor"))

    if(menu==1){
        console.log(suma(numero1, numero2))
    }else if(menu == 2){
        console.log(resta(numero1, numero2))
    }else if(menu == 3){
        console.log(multiplicacion(numero1, numero2))
    }else if(menu == 4){
        console.log(division(numero1, numero2))
    }else if(menu == 5){
    console.log(potencia(numero1, numero2))}
}


console.log("punto 2")

function main_geometria(){
    var menu = prompt("que desea elegir para la operacion (digite el numero)\n 1.hallar el area \n 2.hallar perimetro")

    function main_figura(){
        var menu(prompt("cual figura desea elegir(digite el numero) \n 1.cuadrado \n 2.rectangulo \n 3.paralelogramo \n 4.triangulo"))
    }

    var numero1 = parseFloat(prompt("ingrese el primer valor"))
    var numero2 = parseFloat(prompt("ingrese el segundo valor"))

    if(menu==1){
        console.log(suma(numero1, numero2))
    }else if(menu == 2){
        console.log(resta(numero1, numero2))
    }else if(menu == 3){
        console.log(multiplicacion(numero1, numero2))
    }else if(menu == 4){
        console.log(division(numero1, numero2))
    }else if(menu == 5){
    console.log(potencia(numero1, numero2))}
}

