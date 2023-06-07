//arays
let nombre1 = ["Ingrid Sastoque", "Carolina Carrillo", "Marielys Herrera", "Stefany Cruz", "Nadia Nievas", "Anonimo"];
let divNombre1 = document.querySelector("#nombre1");
divNombre1.innerHTML = nombre1[0];

let nombre2 = ["Ingrid Sastoque", "Carolina Carrillo", "Marielys Herrera", "Stefany Cruz", "Nadia Nievas", "Anonimo"];
let divNombre2 = document.querySelector("#nombre2");
divNombre2.innerHTML = nombre2[1];

let nombre3 = ["Ingrid Sastoque", "Carolina Carrillo", "Marielys Herrera", "Stefany Cruz", "Nadia Nievas", "Anonimo"];
let divNombre3 = document.querySelector("#nombre3");
divNombre3.innerHTML = nombre3[2];

let nombre4 = ["Ingrid Sastoque", "Carolina Carrillo", "Marielys Herrera", "Stefany Cruz", "Nadia Nievas", "Anonimo"];
let divNombre4 = document.querySelector("#nombre4");
divNombre4.innerHTML = nombre4[3];

let nombre5 = ["Ingrid Sastoque", "Carolina Carrillo", "Marielys Herrera", "Stefany Cruz", "Nadia Nievas", "Anonimo"];
let divNombre5 = document.querySelector("#nombre5");
divNombre5.innerHTML = nombre5[4];

let nombre6 = ["Ingrid Sastoque", "Carolina Carrillo", "Marielys Herrera", "Stefany Cruz", "Nadia Nievas", "Anonimo"];
let divNombre6 = document.querySelector("#nombre6");
divNombre6.innerHTML = nombre6[5];




// const leerDatos = () => {
//     let nombre = document.getElementById('nombre').value
//     let mensaje = document.getElementById('mensaje').value
  
//     const datos = {
//         nombre: nombre,
//         mensaje: mensaje
//     }
  
//     // Aquí se guarda, se debe usar JSON.stringify porque en localStorage se almacena como texto
//     localStorage.setItem('datos', JSON.stringify(datos))
  
//     // Cuando se leen, se pasan nuevamente a JSON con JSON.parse
//     const showConsole = JSON.parse(localStorage.getItem('datos'))
//     console.log('Estos son los datos:')
//     console.log(showConsole)
//   }