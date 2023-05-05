class Animal{
    constructor(nombre, color, alto, peso, region){
        this.nombre = nombre;
        this.color = color;
        this.alto = alto;
        this.peso = peso;
        this.region = region
        this.saludar = function() {
        console.log("Hola, soy un " + this.nombre);
        }
    }
    // Funcion de la clase
    saludar2() {
        console.log("Hola, soy otro " + this.nombre);
    }
}

const elefante = new Animal("Elefante", "Gris", "3 metros", "2500 kg", "Africa");

console.log(elefante);

elefante.saludar();
elefante.saludar2();

// Array de objetos

let animales = [];

animales.push(elefante);
const jirafa = new Animal("Jirafa", "Amarillo", "6 metros", "800 kg", "Asia");
animales.push(jirafa);
const hipopotamo = new Animal("Hipopotamo", "Gris", "3 metros", "2000 kg", "Africa");
animales.push(hipopotamo);
const jabali = new Animal("Jabalí", "Negro", "2 metros", "300 kg", "América");
animales.push(jabali);
const tapir = new Animal("Tapir", "Marrón", "1.5 metros", "120 kg", "América");
animales.push(tapir);

console.log(animales);


// Busqueda con find()

console.log(animales.find(Animal => Animal.nombre == "Jabalí"));

function buscarAnimal(animal){
    return animales.find(Animal => Animal.nombre == animal);
}
console.log(buscarAnimal("Jirafa"));

// Busqueda con filter()

function buscarAnimales(region){
    return animales.filter(Animal => Animal.region == region);
}
console.log(buscarAnimales("América"));