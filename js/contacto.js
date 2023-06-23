// Formulario
let mensajeMostrado = false;

const leerDatos = () => {
  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('correo').value;
  let mensaje = document.getElementById('mensaje').value;
  
  const datos = {
    nombre: nombre,
    correo: correo,
    mensaje: mensaje
  };
  
  // Aquí se guarda, se debe usar JSON.stringify porque en localStorage se almacena como texto
  localStorage.setItem('datos', JSON.stringify(datos));

  // Cuando se leen, se pasan nuevamente a JSON con JSON.parse
  const showConsole = JSON.parse(localStorage.getItem('datos'));
  console.log('Equipo:');
  console.log(showConsole);

  // Limpiar los campos del formulario
  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('mensaje').value = '';

  // Mostrar mensaje de formulario enviado
  mostrarMensaje('¡El formulario ha sido enviado con éxito!');
  mensajeMostrado = true;
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

  