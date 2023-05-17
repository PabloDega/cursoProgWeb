document.addEventListener("load", cargaTexto(1));
let botones = document.querySelectorAll("nav a")
botones.forEach((boton) => boton.addEventListener("click", () => cargaTexto(boton.dataset.btn)));

let main = document.querySelector("main");

function cargaTexto(btn){
    fetch(`./data/texto${btn}.txt`)
    .then((res) => res.text())
    .then((res) => main.innerHTML = res)
}