document.addEventListener("onload", obtenerDatos());

function vincularBotones(){
let botonCompleta = document.querySelectorAll(".tareaCompleta");
botonCompleta.forEach((boton) => boton.addEventListener("click", (e) => tareaPendiente(e.target.id)));

let botonPendiente = document.querySelectorAll(".tareaPendiente");
botonPendiente.forEach((boton) => boton.addEventListener("click", (e) => completarTarea(e.target.id)));

let botonBorrar = document.querySelectorAll(".borrarTarea");
botonBorrar.forEach((boton) => boton.addEventListener("click", (e) => borrarTarea(e.target.id)));

let botonModificar = document.querySelectorAll(".editarTarea");
botonModificar.forEach((boton) => boton.addEventListener("click", (e) => modificarTarea(e.target.id)));
}

document.querySelector("#agregarTareaOk").addEventListener("click", (e) =>{
    e.preventDefault();
    let tarea = document.querySelector("#tarea");
    let tareaObj = {
        id: localStorage.length,
        tarea: tarea.value,
        estado: "Pendiente"
    };
    localStorage.setItem(localStorage.length, JSON.stringify(tareaObj));
    obtenerDatos();
    tarea.value = "";
});

function obtenerDatos(){
    limpiarPantalla();
    let ordenar = [];
    for(i = 0; i < localStorage.length; i++){
        let clave = localStorage.key(i);
        let resultado = JSON.parse(localStorage.getItem(clave));
        ordenar.push(resultado);
    }
    mostrarDatos(ordenar);
};

function limpiarPantalla(){
    document.querySelector("#tareas>tbody").innerHTML = "";
};

function mostrarDatos(ordenar){
    ordenar.sort((a, b) => a.id - b.id);
    ordenar.forEach((ordenar) => {
        if(ordenar.estado != "eliminado"){
            const estado = function (){
                if(ordenar.estado == "Completa"){
                return `<span class="tareaCompleta" id="${ordenar.id}">Completa</span>`
                } else {return `<span class="tareaPendiente" id="${ordenar.id}">Pendiente</span>`}};
            let fila = `<tr>
            <td>${ordenar.id}</td>
            <td>${ordenar.tarea}</td>
            <td>${estado()}</td>
            <td>
                <span class="editarTarea" id="${ordenar.id}">Editar</span>
                <span class="borrarTarea" id="${ordenar.id}">Borrar</span>
            </td>
        </tr>`;
        document.querySelector("#tareas>tbody").innerHTML += fila;
        };
        vincularBotones();
    });
}

function completarTarea(id){
    let valor = localStorage.getItem(id);
    valor = JSON.parse(valor);
    valor.estado = "Completa";
    valor = JSON.stringify(valor);
    localStorage.setItem(id, valor);
    obtenerDatos();
}

function tareaPendiente(id){
    let valor = localStorage.getItem(id);
    valor = JSON.parse(valor);
    valor.estado = "Pendiente";
    valor = JSON.stringify(valor);
    localStorage.setItem(id, valor);
    obtenerDatos();
}

function borrarTarea(id){
    let valor = localStorage.getItem(id);
    valor = JSON.parse(valor);
    valor.estado = "eliminado";
    valor = JSON.stringify(valor);
    localStorage.setItem(id, valor);
    obtenerDatos();
}

let valor;
let idMod;
let inputId = document.querySelector("#modId");
let inputTarea = document.querySelector("#modTarea");
let inputEstado = document.querySelector("#modEstado");
let botonOk = document.querySelector("#modificarTareaOk");
let botonCancelar = document.querySelector("#modificarTareaCancelar");

function modificarTarea(id){
    idMod = id;
    valor = localStorage.getItem(id);
    valor = JSON.parse(valor);
    document.querySelector("#modificar").style.display = "block";
    inputId.value = valor.id;
    inputTarea.value = valor.tarea;
    inputEstado.value = valor.estado;
    };

botonOk.addEventListener("click", (e) => {  
    e.preventDefault();
    valor.id = inputId.value;
    valor.tarea = inputTarea.value;
    valor.estado = inputEstado.value;
    valor = JSON.stringify(valor);
    console.log(valor);
    localStorage.setItem(idMod, valor);
    obtenerDatos();
    document.querySelector("#modificar").style.display = "none";
});

    
botonCancelar.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#modificar").style.display = "none";
});