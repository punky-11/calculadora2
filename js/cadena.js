function palabra(){

    let valor1=(palabra1.value);
    let valor2=(palabra2.value);


    if (valor1==="" || valor2 ===""){
    alert("ingresa la cadenas")
    }else if (valor1.length==valor2.length ){

        cadena.value ="son iguales";

    }else if (valor1.length>=valor2.length){

        cadena.value ="la cadena uno es mas grande";
    }else if (valor2.length>=valor2.length){

        cadena.value ="la cadena dos es mas grande";

    }


}


function Contar(){
    let valor1=(palabra1.value);
    let valor2=(palabra2.value);
    if (valor1==="" || valor2 ===""){
        alert("ingresa la cadenas")
        }else {

        cadena.value = valor1.split(valor2).length - 1;
    }

        
  
    

}


function espacios(){
    let valor1= (palabra1.value);
    if (valor1==="" ){
        alert("ingresa la cadenas")
    }else{
        let eliminar= valor1.replace(/( )/gi,"")
        cadena.value =(eliminar);
        }
}

function iser(){
    let valor1=(palabra1.value);
    let valor2=(palabra2.value);
    let nn= valor1.length /2;

    if (valor1==="" || valor2 ===""){
        alert("ingresa la cadenas")
        }else{
     cadena.value = valor1.substring(0, nn) + valor2 + valor1.substring(nn);
        }
    


    

}