// Obtener elementos del DOM
var modal = document.getElementById("modal");
var closeModalBtn = document.getElementById("closeModalBtn");
var closeSpan = document.getElementsByClassName("close")[0];

// Cerrar la ventana modal al hacer clic en el botón "Cerrar"
closeModalBtn.onclick = function() {
  modal.style.display = "none";
}

// Cerrar la ventana modal al hacer clic en el botón "X"
closeSpan.onclick = function() {
  modal.style.display = "none";
}

// Cerrar la ventana modal al hacer clic fuera de ella
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}