let div = document.querySelector("#div1");
document.querySelector("#boton1").addEventListener("click", () => console.log(div.dataset));
document.querySelector("#boton2").addEventListener("click", () => console.log(div.dataset.id));
document.querySelector("#boton3").addEventListener("click", () => console.log(div.dataset.precio));
document.querySelector("#boton4").addEventListener("click", () => console.log(div.dataset.nombre));