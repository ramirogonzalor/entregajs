
let nombre = prompt("Ingresa tu nombre")
const saludo = alert("Hola " + nombre + ", vamos a usar la calculadora?")
const saludoConsola = console.log("Hola " + nombre + ", vamos a usar la calculadora?")
for (let i = 1 ; i <= 3; i++){
const numeroUno = parseInt(prompt("Ingresa un numero"))
const operacion = prompt("Que operacion quiere realizar?")
const numeroDos = parseInt(prompt("Ingrese otro numero"))
switch (operacion) {
    case "suma":
        console.log(numeroUno + numeroDos)
        break;
    case "resta":
        console.log(numeroUno - numeroDos)
        break;
    case "division":
        console.log(numeroUno / numeroDos)
        break;
    case "multiplicacion":
        console.log(numeroUno * numeroDos)
        break;
    case "dividido":
        console.log(numeroUno / numeroDos)
        break;
    case "por":
        console.log(numeroUno * numeroDos)
        break;
    case "+":
        console.log(numeroUno + numeroDos)
        break;
    case "-":
        console.log(numeroUno - numeroDos)
        break;
    case "/":
        console.log(numeroUno / numeroDos)
        break;
    case "*":
        console.log(numeroUno * numeroDos)
        break;
    default:
        console.log("hay un error")
        break;
}
}