x=5;
console.log(x>7);//false
console.log(x<7);//true
console.log(x=="5");//true
console.log(x==="5");//false
console.log(x>=1);//true
console.log(x!=10);//true
console.log(2 < 12); //true
console.log(2 < "12"); //true
console.log(2 < "John"); //false
console.log(2 > "John"); //false
console.log(2 == "John"); //false
console.log("John" == "John"); //true
console.log("john" == "John"); //false
console.log("2" < "12"); //false
console.log("2" > "12"); //true
console.log("2" == "12"); //false

console.log("ejercicios")
x=12;   
y=7;
x<15 && y!=7 //false
y>8 && x<20 //false
x==12 && x<18 //true
//("lunes" == "Lunes") || (y!=9) //false
!(x==10) && y>=6 //false
x>6 && y==12 && 2>3 //false
(x*2)>22 && y<(2*4) //true
(x>10 || x<10) && !(y!=7 && y<21) //false
((x/2)<=(2*3) || (x*2)>23 ) && (15==="15" && y!=="7") //false

var hayGaseosa = "si";
var bebida;
 
if(hayGaseosa == "si"){
    bebida = "gaseosa";
}else{
    bebida = "refresco de fruta"
}
 
console.log("la bebida que acompaña su pedido es " + bebida);


var diaSiguiente;
var cuaderno;
 
if(diaSiguiente == "lunes" || diaSiguiente == "martes"){
    cuaderno="analisisi";
}else if(diaSiguiente == "miercoles"){
    cuaderno="Tecnología";
}else if(diaSiguiente == "jueves"){
    cuaderno="Desarrollo"
}else{
    cuaderno="desarrollo";
}
 
console.log("Para la clase de mañana con el profesor Andres debe guardar el cuaderno de " +cuaderno);


