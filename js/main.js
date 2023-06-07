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