// FORMULARIO

let datosJSONiniciosesion= {
  claveDelObjetoARRAYS: []
};

const agregarUsuario = () => {
  let correo = document.getElementById('correo').value;
  let contrasena = document.getElementById('contrasena').value;

  const nuevoUsuario = {
    correo: correo,
    contrasena: contrasena
  };

  datosJSONiniciosesion.claveDelObjetoARRAYS.push(nuevoUsuario);

  console.log('Datos JSON iniciosesion con nuevos usuarios:');
  console.log(datosJSONiniciosesion);

  document.getElementById('correo').value = '';
  document.getElementById('contrasena').value = '';

  mostrarMensaje('¡Felicidades! Has iniciado sesión exitosamente.');

  // Guardar los datos actualizados en el Local Storage
  localStorage.setItem('datosJSONiniciosesion', JSON.stringify(datosJSONiniciosesion));
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
  const datosGuardados = localStorage.getItem('datosJSONiniciosesion');
  if (datosGuardados) {
    datosJSONiniciosesion = JSON.parse(datosGuardados);
  }
});
