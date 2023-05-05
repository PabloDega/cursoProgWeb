// Funciones declaradas

/* function holaMundo(){
    console.log("Hola mundo!!!");
}

holaMundo(); */

// Expresion

/* const saludo = function(){
    console.log("Hola mundo");
}

saludo();

console.log(saludo); */

// Return

/* function calculo(){
    let suma = 30 + 20;
    // return suma;
}

console.log(calculo);

console.log(calculo()); */

// Parametros y argumentos

/* function saludar(nombre){
    // return "Hola " + nombre;
    return `Hola ${nombre}`;
}

let texto = saludar("pablo");
console.log(texto); */

// sintesis de lo anterior
/* function saludar(nombre){
    console.log("Hola " + nombre)
}

saludar("pablo");
saludar("pedro");
saludar("juan") */

//Calculadora

/* let suma = function(num1, num2){
    let suma = num1 + num2;
    return suma;
}

console.log(suma(3, 3)); */

/* let resta = function(num1, num2){
    let resta = num1 - num2;
    return resta;
}

console.log(resta(6, 3)); */


//Calculadora

/* function calculadora(num1, num2, operacion){
    let resultado;
    switch(operacion){
        case "suma":
        resultado = num1 + num2;
        break;
        case "resta":
        resultado = num1 - num2;
        break;
        case "multiplicacion":
        resultado = num1 * num2;
        break;
        case "division":
        resultado = num1 / num2;
        break;
    };
    return resultado;
}

console.log(calculadora(2, 2, "resta")); */

// Funcion de Flecha

/* const sumar = (a, b) => a + b;

console.log(sumar(1, 2)) */

// Sentencia multiple

/* const calculadora = (a, b) =>{
    let suma = a + b;
    let resta = a - b;
    let multiplicacion = a * b;
    let division = a / b;
    return "" + suma + resta + multiplicacion + division;
}
console.log(calculadora(3, 3)); */


// Callback

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const multiplicacion = (a, b) => a * b;
const division = (a, b) => a / b;

const calculadora = (a, b, operacion) =>{
    return operacion(a, b);
}

console.log(calculadora(3, 3, suma));
console.log(calculadora(3, 3, resta));
console.log(calculadora(3, 3, multiplicacion));
console.log(calculadora(3, 3, division));