/* // nombre = "Tomas";
let nombre;
// nombre = "Pablo";
window.alert(nombre); */

/* let nombre;
nombre = window.prompt("Ingresá tu nombre:");
window.alert("Tu nombre es " + nombre);
 */

/* let nombre;
const apellido = " Deganis";
nombre = window.prompt("Ingresá tu nombre:");
console.log(nombre + apellido);
nombre = "Tomás";
// apellido = "Gonzalez";
console.log(nombre + apellido); */



/* let numero1 = 6;
let numero2 = 4;
let suma = numero1 + numero2;
console.log(suma); */


/* let numero1 = window.prompt("Ingresá el primer número: ");
let numero2 = window.prompt("Ingresá el segundo número: ");;
let suma = Number(numero1) + Number(numero2);
window.alert("El resultado es: " + suma);
document.write("El resultado es: " + suma); */


// Scoope - bloques de codigo {}
let numero = 12;
console.log(numero);
{
    // numero = 13;
    let numero = 13;
    console.log(numero);
}
// numero = 14;
console.log(numero);

const letra = "A";
console.log(letra)
{
    // letra = "B"
    const letra = "B";
    console.log(letra);
}
// letra = "C";
console.log(letra);