// --------------DESTACADOS--------------

// Obtener referencia al template
const bookTemplate = document.querySelector('#book-template');

// Obtener referencia al contenedor de libros
const librosContainer = document.querySelector('.grid-seccion3');

fetch('https://www.googleapis.com/books/v1/volumes?q=front-end+development')
  .then(response => response.json())
  .then(data => {
    const books = data.items || [];

    const randomIndexes = generateRandomIndexes(books.length, 4);

    randomIndexes.forEach(index => {
      const bookData = books[index].volumeInfo;
      createBookElement(bookData);
    });

    console.log(data); // Mostrar información de 'api' en la consola
  })
  .catch(error => console.log(error));

function generateRandomIndexes(max, count) {
  const indexes = new Set();
  while (indexes.size < count) {
    const randomIndex = Math.floor(Math.random() * max);
    indexes.add(randomIndex);
  }
  return Array.from(indexes);
}

function createBookElement(bookData) {
  // Clonar el template
  const bookElement = bookTemplate.content.cloneNode(true);

  // Obtener referencias a los elementos dentro del template
  const imgElement = bookElement.querySelector('.img-recursos-img');
  const tituloElement = bookElement.querySelector('.titulo');
  const autorElement = bookElement.querySelector('.autor');
  const isbnElement = bookElement.querySelector('.isbn');

  // Asignar valores a los elementos
  imgElement.src = bookData.imageLinks ? bookData.imageLinks.thumbnail : "img/placeholder.jpg";
  imgElement.alt = 'Portada del libro ' + bookData.title;
  tituloElement.textContent = bookData.title;
  autorElement.textContent = bookData.authors ? bookData.authors[0] : "Autor desconocido";
  isbnElement.textContent = 'ISBN: ' + (bookData.industryIdentifiers ? bookData.industryIdentifiers[0].identifier : "N/A");

  // Establecer el enlace al libro en todos los elementos
  const libroLinkElements = bookElement.querySelectorAll('.libro-link');
  libroLinkElements.forEach(element => {
    element.href = bookData.previewLink;
    element.target = "_blank";
  });

  // Agregar el libro al contenedor
  librosContainer.appendChild(bookElement);
}
