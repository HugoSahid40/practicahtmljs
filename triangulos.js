
var lado1=0,lado2=0,lado3=0,area=0;
var resultado=0;
var texto="";

function valor1(){
    lado1=parseFloat(document.getElementById("valor1").value)
    console.log(lado1)
}
function valor2(){
     lado2=parseFloat(document.getElementById("valor2").value)
    console.log(lado2)
    
}
function valor3(){
     lado3=parseFloat(document.getElementById("valor3").value)
    console.log(lado3)
}
function calcularPerimetro(){
resultado=(lado1+lado2+lado3)/2;
console.log(resultado);
document.getElementById("mostrar").innerHTML+='<p id="d">el perimetro es:'+resultado+'</p>'

}
 function calcularArea(){
    if(resultado>lado1 && resultado>lado2 && resultado>lado3){
    var x=(resultado-lado1);
    var x2=(resultado-lado2);
    var x3=(resultado-lado3);
    
    area=Math.sqrt(resultado*x*x2*x3)
    texto=document.getElementById("mostrar").innerHTML+='<p id="d">el area es:'+area+'</p>'    
    }
    else{
        texto=document.getElementById("mostrar").innerHTML+='<p id="d">error</p>'    
    }
 }

 function tipoFigura(){
    if(lado1==lado2 && lado2==lado3 && lado3==lado1){
    document.getElementById("mostrar").innerHTML+='<p id="d">El triangulo es equilatero</p>'
   }
   else if(lado1==lado2 && lado2!=lado3 && lado3!=lado1 || lado1!=lado2 && lado2==lado3 && lado3!=lado1 || lado1!=lado2 && lado2!=lado3 && lado3==lado1){
    document.getElementById("mostrar").innerHTML+='<p id="d">El triangulo es isoceles</p>'
   }
   else if(lado1!=lado2 && lado2!=lado3 && lado3!=lado1){
    document.getElementById("mostrar").innerHTML+='<p id="d">El triangulo es escaleno</p>'
    
   }


 }
 function eliminar(){
 var lista=document.getElementById("mostrar")
    lista.removeChild(lista.children[0])
 }

