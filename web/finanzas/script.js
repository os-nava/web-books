// Ejemplo de libros (puedes agregar más)

const libros = [
    { titulo: "Libro 1", imagen: "images/libro01.jpg", precio: "$240" },



    // Agrega más libros aquí
  ];
  


  // Función para generar los elementos de los libros en el álbum
  function generarLibros(albumId, libros) {
    const album = document.getElementById(albumId);
    libros.forEach((libro) => {
      const bookDiv = document.createElement("div");
      bookDiv.className = "book";
      bookDiv.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}">
        <p>Precio: ${libro.precio}</p>
      `;
      album.appendChild(bookDiv);
    });
  }
  
  // Generar los libros en el álbum para cada tema
  
  generarLibros("album-tema", libros);
  
  // Puedes agregar más llamadas a 'generarLibros' para otros temas