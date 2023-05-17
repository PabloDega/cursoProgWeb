
fetch("./data/data.json")
.then((res) => res.json())
.then((res) => {
    console.log(res);
    respuesta = res;
    parrafo.innerHTML = JSON.stringify(res);
    // ordenar();
    })
.catch((e) => console.log(e));


let parrafo = document.querySelector("#txt1");
let respuesta;

/* function ordenar(){
    let texto = "<table><thead><tr><th>Nombre</th><th>Apellido</th><th>Mail</th><th>Direccion</th><th>Telefono</th></tr></thead><tbody>";
    respuesta.forEach(i => {
        texto += `<tr><td>${i.nombre}</td><td>${i.apellido}</td><td>${i.mail}</td><td>${i.direccion}</td><td>${i.telefono}</td>`;
    });
    texto += "</tbody></table>";
    parrafo.innerHTML = texto;
} */

