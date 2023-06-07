const leerDatos = () => {
    let nombre = document.getElementById('nombre').value
    let correo = document.getElementById('correo').value
    let mensaje = document.getElementById('mensaje').value
  
    const datos = {
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
    }
  
    // Aquí se guarda, se debe usar JSON.stringify porque en localStorage se almacena como texto
    localStorage.setItem('datos', JSON.stringify(datos))
  
    // Cuando se leen, se pasan nuevamente a JSON con JSON.parse
    const showConsole = JSON.parse(localStorage.getItem('datos'))
    console.log('Equipo:')
    console.log(showConsole)
  }