// FORMULARIO

const leerDatos = () => {
  let nombre = document.getElementById('nombre').value
  let correo = document.getElementById('correo').value
  let tema = document.getElementById('tema').value

  const datos = {
      nombre: nombre,
      correo: correo,
      tema: tema
  }

  // Aquí se guarda, se debe usar JSON.stringify porque en localStorage se almacena como texto
  localStorage.setItem('datos', JSON.stringify(datos))

  // Cuando se leen, se pasan nuevamente a JSON con JSON.parse
  const showConsole = JSON.parse(localStorage.getItem('datos'))
  console.log('Estos son los datos:')
  console.log(showConsole)
}

//VENTANA MODAL

// Obtener la referencia a la ventana modal, al botón de cierre y al ícono de cierre
const modal = document.getElementById('modal');
const closeModalButton = document.getElementById('closeModalBtn');
const closeIcon = document.querySelector('.close');

// Mostrar la ventana modal al cargar la página
window.addEventListener('load', function() {
  modal.style.display = 'block';
});

// Cerrar la ventana modal al hacer clic en el botón de cierre o el ícono de cierre
function closeModal() {
  modal.style.display = 'none';
}

closeModalButton.addEventListener('click', closeModal);
closeIcon.addEventListener('click', closeModal);
