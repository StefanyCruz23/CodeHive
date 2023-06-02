// // Ejercicios clase 15

// // 1


let nombreCompleto = prompt("Ingrese su nombre y apellido:");
console.log(nombreCompleto);

// // 2
let datos = prompt("Ingresa tu nombre, color preferido, comida favorita, mejor película y trabajo actual separados por comas");

let [nombre, color, comida, pelicula, trabajo] = datos.split(",");

let presentacion = 
`Hola, mi nombre es ${nombre}. Mi color preferido es ${color}, mi comida favorita es ${comida} y mi película favorita es ${pelicula}. Actualmente trabajo como ${trabajo}.`;

alert (presentacion);

// // Ingrid,color indigo, lasagna, crepusculo, diseñadora

// // 3
alert(`¡Bienvenido/a a nuestra web, ${nombre}!`);

// // 4
 let numero = prompt("Ingresa un número aleatorio:");

if (numero % 2 === 0) {
console.log(`${numero} es par`);
} 
else {
 alert (`${numero} es impar`);
}


// // Ejercicios clase 16

// Ejercicio 1
let fimDeSemana = "Sábado";

if (fimDeSemana == "Sábado" || fimDeSemana == "Domingo") {
  console.log("Hoy no se trabaja!");
} 
else {
  console.log("Aún falta para final de semana");
}

// Ejercicio 2

let precioDepilacion = 50;
let precioManicure = 30;

let maisCaro = (precioDepilacion > precioManicure) ? "Depilación" : "Manicure";

console.log(maisCaro + " es el servicio más caro de este spa");



// Ejercicio 3
let destino = prompt("Indica tu destino de viaje preferido: \n1- Canadá \n2- España \n3- Bariloche \n4- Japón");

switch(destino) {
  case "1":
    console.log("Un excelente destino para aprender a esquiar");
    break;
  case "2":
    console.log("Belo destino para caminhar ruas con paralelepípedos");
    break;
  case "3":
    console.log("Muy buen destino para excursiones en el hielo!");
    break;
  case "4":
    console.log("Destino precioso para conocer cientos de tiendas, una al lado de la otra");
    break;
  default:
    console.log("Debe elegir un número entre 1 y 4");
}



