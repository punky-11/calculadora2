
function sumar(){

    let valor1=parseInt(num1.value);
    let valor2=parseInt(num2.value);
    let valor=parseInt(res.value);
    if ((isNaN(valor1)) || (isNaN(valor2 ))){
        alert("ingresa dos numeros ");

    }else if ((valor1,valor2) ){
        valor=valor1+valor2

        return (res.value)=(valor);
    }
}
function resta(){

    let valor1=parseInt(num1.value);
    let valor2=parseInt(num2.value);
    let valor=parseInt(res.value);
    if ((isNaN(valor1)) || (isNaN(valor2 ))){
        alert("ingresa dos numeros ");

    }else if ((valor1,valor2) ){
        valor=valor1-valor2

        return (res.value)=(valor);
    }
}
function multiplicar(){

    let valor1=parseInt(num1.value);
    let valor2=parseInt(num2.value);
    let valor=parseInt(res.value);
    if ((isNaN(valor1)) || (isNaN(valor2 ))){
        alert("ingresa dos numeros ");

    }else if ((valor1,valor2) ){
        valor=valor1*valor2

        return (res.value)=(valor);
    }
}
function division(){

    let valor1=parseInt(num1.value);
    let valor2=parseInt(num2.value);
    let valor=parseInt(res.value);
    if ((isNaN(valor1)) || (isNaN(valor2 ))){
        alert("ingresa dos numeros ");

    }else if ((valor1,valor2) ){
        valor=valor1/valor2

        return (res.value)=(valor);
    }
}

function multiplo(){

    let valor1=parseInt(num1.value);
    let valor2=parseInt(num2.value);
    
    
if(Number.isNaN(valor1) || Number.isNaN(valor2) ){
    alert("escribe dos numeros correctos");

 
}
else if(valor2 <=0){
    alert("el valor no puede ser menor a 0");
    return;
}else{

while (valor1,valor2) {
    
    
    if (valor1 % valor2 == 0){
         res.value  =("es multipo");
    }else{
        res.value  =("no es multipo");

    }
    break;

}
}

}

function potencia() {
    let valor1=parseFloat(num1.value);
    let valor2=parseFloat(num2.value);

    if(Number.isNaN(valor1) || Number.isNaN(valor2) ){
        alert("escribe dos numeros correctos");
    }
    let resultado = Math.pow(valor1, valor2);
    res.value = "El resultado es: " + resultado;
    
}


