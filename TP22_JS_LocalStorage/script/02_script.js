let tareas = [];
let inputId = document.querySelector("#modId");
let inputTarea = document.querySelector("#modTarea");
let inputEstado = document.querySelector("#modEstado");
let botonOk = document.querySelector("#modificarTareaOk");
let botonCancelar = document.querySelector("#modificarTareaCancelar");

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
    let tareaInput = document.querySelector("#tarea");
    tareas.push({
        id: tareas.length,
        tarea: tareaInput.value,
        estado: "Pendiente"
    });
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    obtenerDatos();
    tareaInput.value = "";
});

function obtenerDatos(){
    limpiarPantalla();
    tareas = JSON.parse(localStorage.getItem("Tareas")) || [];
    mostrarDatos();
};

function limpiarPantalla(){
    document.querySelector("#tareas>tbody").innerHTML = "";
};

function mostrarDatos(){
    tareas.forEach((tarea) => {
        if(tarea.estado != "Eliminado"){
            const estado = function (){
                if(tarea.estado == "Completa"){
                return `<span class="tareaCompleta" id="${tarea.id}">Completa</span>`
                } else {return `<span class="tareaPendiente" id="${tarea.id}">Pendiente</span>`}};
            let fila = `<tr>
            <td>${tarea.id}</td>
            <td>${tarea.tarea}</td>
            <td>${estado()}</td>
            <td>
                <span class="editarTarea" id="${tarea.id}">Editar</span>
                <span class="borrarTarea" id="${tarea.id}">Borrar</span>
            </td>
        </tr>`;
        document.querySelector("#tareas>tbody").innerHTML += fila;
        };
        vincularBotones();
    });
}

function completarTarea(id){
    tareas[id].estado = "Completa";
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    obtenerDatos();
    
}

function tareaPendiente(id){
    tareas[id].estado = "Pendiente";
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    obtenerDatos();
}

function borrarTarea(id){
    tareas[id].estado = "Eliminado";
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    obtenerDatos();
}

function modificarTarea(id){
    document.querySelector("#modificar").style.display = "block";
    inputId.value = tareas[id].id;
    inputTarea.value = tareas[id].tarea;
    inputEstado.value = tareas[id].estado;
    };

botonOk.addEventListener("click", (e) => {  
    e.preventDefault();
    let id = inputId.value;
    tareas[id].tarea = inputTarea.value;
    tareas[id].estado = inputEstado.value;
    localStorage.setItem("Tareas", JSON.stringify(tareas));
    obtenerDatos();
    document.querySelector("#modificar").style.display = "none";
});

botonCancelar.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#modificar").style.display = "none";
});