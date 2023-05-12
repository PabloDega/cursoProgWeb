localStorage.setItem("Nombre", "Pablo");

document.querySelector("#p1").textContent = localStorage.getItem("Nombre");

const datos1 = {
    nombre: "Pablo",
    apellido: "Deganis",
    mail: "pablodeganis@yahoo.com.ar",
    direccion: "Calle falsa 123",
    telefono: 46421317
};

document.querySelector("#grabar").addEventListener("click", () =>{grabar(datos1)});

document.querySelector("#obtener").addEventListener("click", () =>{obtener(datos1)});

document.querySelector("#borrar").addEventListener("click", () =>{localStorage.clear(); p2.innerHTML = ""});

let p2 = document.querySelector("#p2");

function grabar(a){
    for(x in a){
        localStorage.setItem(x, a[x]);
    }
}

function obtener(){
   for(let i = 0; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    let respuesta = clave + ": " + localStorage.getItem(clave) + "<br>";
    p2.innerHTML += respuesta;
   }
}