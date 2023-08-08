// Ejemplo de libros (puedes agregar más)

  const libros = [
    { titulo: "Libro 3", imagen: "images/libro01.jpg", precio: "$240" },
    { titulo: "Libro 4", imagen: "images/libro02.jpg", precio: "$190" },
    { titulo: "Libro 1", imagen: "images/libro03.jpg", precio: "$200" },
    { titulo: "Libro 2", imagen: "images/libro04.jpg", precio: "$210" },
    { titulo: "Libro 3", imagen: "images/libro05.jpg", precio: "$180" },
    { titulo: "Libro 4", imagen: "images/libro06.jpg", precio: "$190" },
    { titulo: "Libro 1", imagen: "images/libro07.jpg", precio: "$200" },
    { titulo: "Libro 2", imagen: "images/libro08.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro09.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro010.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro011.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro012.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro013.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro014.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro015.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro016.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro017.jpg", precio: "$210" },
    { titulo: "Libro 2", imagen: "images/libro018.jpg", precio: "$210" },
    // Agrega más libros aquí
  ];
  

  const libros2 = [
    { titulo: "Libro 3", imagen: "images/libro1.jpg", precio: "$50" },
    { titulo: "Libro 4", imagen: "images/libro2.jpg", precio: "$50" },
    { titulo: "Libro 1", imagen: "images/libro3.jpg", precio: "$50" },
    { titulo: "Libro 2", imagen: "images/libro4.jpg", precio: "$50" },
    { titulo: "Libro 3", imagen: "images/libro5.jpg", precio: "$50" },
    { titulo: "Libro 4", imagen: "images/libro6.jpg", precio: "$50" },
    { titulo: "Libro 1", imagen: "images/libro7.jpg", precio: "$50" },
    { titulo: "Libro 2", imagen: "images/libro8.jpg", precio: "$50" },
    { titulo: "Libro 2", imagen: "images/libro9.jpg", precio: "$50" },
    { titulo: "Libro 2", imagen: "images/libro10.jpg", precio: "$50" },
    { titulo: "Libro 2", imagen: "images/libro11.jpg", precio: "$50" },
    { titulo: "Libro 2", imagen: "images/libro12.jpg", precio: "$50" },
    { titulo: "Libro 2", imagen: "images/libro13.jpg", precio: "$50" },
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
  generarLibros("album-tema2", libros2);
  // Puedes agregar más llamadas a 'generarLibros' para otros temas
  