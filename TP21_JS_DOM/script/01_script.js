console.log(window);

console.log(window.document);

// Selectores

let elementoGet = document.getElementById("texto1");
console.log(elementoGet);

let elementosGet = document.getElementsByTagName("p");
console.log(elementosGet);

let elemento = document.querySelector("p");
console.log(elemento);

let elementos = document.querySelectorAll("p");
console.log(elementos);

let elementoId = document.querySelector("p#texto2");
console.log(elementoId);

let elementoAtributo = document.querySelector("p#texto2").attributes;
console.log(elementoAtributo);

let elementoTexto = document.querySelector("p#texto2").textContent;
console.log(elementoTexto);

let elementoChild = document.querySelector("main p:nth-child(2)");
console.log(elementoChild);

let elementoClase = document.querySelector("main p.azul");
console.log(elementoClase);

// Escribir contenido

document.querySelector("#destino").textContent = "Hola Mundo!!!";


// Crear elementos

const div2 = document.createElement("div");
div2.textContent = "Soy el segundo DIV";

document.querySelector("section").appendChild(div2);

document.querySelector("section").innerHTML += '<div id="div3">Soy el tercer div</div>'; 