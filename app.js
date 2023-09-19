// todo: hacer el front de la calculadora
const process =require ('process')
const suma= require('./sumar')
const {argv} =process 
function calculadora(comando,a,b){
switch (comando) {
    case "sumar":
        suma(a,b)
        break;
    case "restar":
        break
    case "multiplicar":
        break
    case "dividir":
        break
    default:
        break;
}
}
console.log(calculadora(argv[2], argv[3],argv[4]));