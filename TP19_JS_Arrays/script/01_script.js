const numeros = [2, 9, 12, 5, 8, 3];

console.log(numeros);

// Seleccionar elemento

/* console.log(numeros[3]);

console.log(numeros.slice(2, 5)); */

// Agregar elementos

/* numeros.push(7);
console.log(numeros);

numeros.unshift(6);
console.log(numeros); */

// Quitar elementos

/* numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros); */

// Splice
/* let letras = ["a", "b", "c", "d"]
console.log(letras);

letras.splice(0, 2);
console.log(letras);

letras.splice(0, 0, "a", "b");
console.log(letras);

letras.splice(4, 0, "e", "f");
console.log(letras); */

// Unir y separar cadenas

/* let join = numeros.join();
console.log(join);

let split = join.split(",");
console.log(split);

let nuevoArray = [];

function convertir(a, b){
    for(let i = 0; i < b.length; i++){
        a[i] = parseInt(b[i]);
    }
};

convertir(nuevoArray, split);

console.log(nuevoArray); */

// Ordenar

/* let palabras = ["Pablo", "Ariel", "Pedro", "Bastian", "José"];
console.log(palabras); */

/* console.log(palabras.sort());
console.log(palabras); */

/* let palabrasOrdenadas = palabras.slice(0);
palabrasOrdenadas.sort();
console.log(palabras);
console.log(palabrasOrdenadas); */

/* let numerosOrdenados = numeros.slice(0);
numerosOrdenados.sort();
console.log(numerosOrdenados);

let numerosReordenados = numeros.slice(0);

numerosReordenados.sort(comparacion);

function comparacion(a, b){
    if(a > b){
        return 1;
    }
    if(a < b){
        return -1;
    }
    return 0;
}

// function comparacion(a, b){return a-b};

// numerosReordenados.sort((a, b) => a - b);


console.log(numerosReordenados); */