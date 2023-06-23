// FORMULARIO

let mensajeMostrado = false;

const leerDatos = () => {
  if (mensajeMostrado) {
    return; // Si el mensaje ya ha sido mostrado, salir de la función
  }

  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('correo').value;
  let tema = document.getElementById('contrasena').value;

  const datos = {
    nombre: nombre,
    correo: correo,
    contrasena: contrasena
  };

  // Aquí se guarda, se debe usar JSON.stringify porque en localStorage se almacena como texto
  localStorage.setItem('datos', JSON.stringify(datos));

  // Cuando se leen, se pasan nuevamente a JSON con JSON.parse
  const showConsole = JSON.parse(localStorage.getItem('datos'));
  console.log('Estos son los datos:');
  console.log(showConsole);

  // Limpiar los campos del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('contrasena').value = '';

  // Mostrar mensaje de formulario enviado
  mostrarMensaje('¡Felicidades! Ha completado su registro exitosamente.');
  mensajeMostrado = true; // Marcar el mensaje como mostrado
};

const mostrarMensaje = (mensaje) => {
  // Crear elemento de mensaje si aún no se ha mostrado
  if (!mensajeMostrado) {
    const mensajeElement = document.createElement('p');
    mensajeElement.textContent = mensaje;
    mensajeElement.classList.add('mensaje');

    // Agregar mensaje al DOM
    const formulario = document.querySelector('.form');
    formulario.appendChild(mensajeElement);
  }
};
