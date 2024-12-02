//funcion suma
function suma (a,b){
    return a+b;
}
//funcion de resta
function resta (a,b){
    return a-b;
}
function multi (a,b){
    return a*b;
}
function dividir (a,b){
    if (b===0){
        return "Error en la divicion"
    }return a/b;
}


//funcion calculadora.

function calculadora(num1, num2, operacion){
    switch(operacion){
        case 'suma':
            return suma(num1, num2);
        case 'resta':
            return resta(num1, num2);
        case 'multi':
            return multi(num1, num2);
        case 'dividir':
            if(num2!==0){
                return dividir(num1, num2);
            }else
            return 'error en la divicion'
    }
}
let numero1=parseFloat(prompt("ingrese el numero 1"));
let numero2=parseFloat(prompt("ingrese el numero 2"));
let operacion=prompt("ingrese la operacion(suma, resta, multi, dividir)");

let resultado=calculadora(numero1, numero2, operacion);
document.write("El resultado es : "+resultado);