// Constructor

function Producto(codigo, nombre, precio, cantidad){
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidad = cantidad;

    this.valuacion = () => this.precio * this.cantidad;
}

let prod1 = new Producto(101, "Teclado USB", 1200, 100);

console.log(prod1);

console.log(prod1.valuacion());

let prod2 = new Producto(102, "Mouse USB", 1600, 60);
let prod3 = new Producto(103, "Monitor", 45000, 35);
let prod4 = new Producto(104, "Pendrive", 1500, 250);

console.log(prod2);
console.log(prod2.valuacion());
console.log(prod3);
console.log(prod3.valuacion());
console.log(prod4);
console.log(prod4.valuacion());

let capital = prod1.valuacion() + prod2.valuacion() + prod3.valuacion() + prod4.valuacion();
console.log("$" + capital);