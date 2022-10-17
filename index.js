const condicion = true;

if(condicion){
    //hago cosas si se cumple la condicion
}

if(condicion){
    //hago cosas si se cumple la condicion
}else{
    //hago cosas si no se cumple la condicion
}

function nombreDeLaFuncion(numero){ 
    // hago cosas
}

/*
El equivalente de:
function doble(numero){
    return numero * 2
}
es:
*/
const doble = numero => numero * 2

const triple = numero => numero * 3
const dobleDelTriple = numero => doble(triple(numero))
const resultado = dobleDelTriple(25);

console.log(resultado)