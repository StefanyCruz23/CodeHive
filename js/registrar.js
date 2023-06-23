// FORMULARIO

let datosJSONregistrar = {
  claveDelObjetoARRAYS: []
};

const agregarUsuario = () => {
  let nombre = document.getElementById('nombre').value;
  let correo = document.getElementById('correo').value;
  let contrasena = document.getElementById('contrasena').value;

  const nuevoUsuario = {
    nombre: nombre,
    correo: correo,
    contrasena: contrasena
  };

  datosJSONregistrar.claveDelObjetoARRAYS.push(nuevoUsuario);

  console.log('Datos JSON convertidos con nuevos usuarios:');
  console.log(datosJSONregistrar);

  document.getElementById('nombre').value = '';
  document.getElementById('correo').value = '';
  document.getElementById('contrasena').value = '';

  mostrarMensaje('¡Felicidades! Has completado tu registro exitosamente.');

  // Guardar los datos actualizados en el Local Storage
  localStorage.setItem('datosJSONregistrar', JSON.stringify(datosJSONregistrar));
};

const mostrarMensaje = (mensaje) => {
  let mensajeElement = document.querySelector('.mensaje');

  if (!mensajeElement) {
    mensajeElement = document.createElement('p');
    mensajeElement.classList.add('mensaje');
    const formulario = document.querySelector('.form');
    formulario.appendChild(mensajeElement);
  }

  mensajeElement.textContent = mensaje;
};

// Obtener los datos del Local Storage al cargar la página
window.addEventListener('DOMContentLoaded', () => {
  const datosGuardados = localStorage.getItem('datosJSONregistrar');
  if (datosGuardados) {
    datosJSONregistrar = JSON.parse(datosGuardados);
  }
});
