// Estructura para almacenar los enlaces
class Enlace {
    constructor(descripcion, url, categoria) {
      this.descripcion = descripcion;
      this.url = url;
      this.categoria = categoria;
    }
  }
  
  // Clase gestor para manejar los enlaces
  class GestorEnlaces {
    constructor() {
      this.enlaces = [
        new Enlace("Curso de JavaScript", "https://www.codecademy.com/learn/introduction-to-javascript", "categoriaRecursosEducativos"),
        new Enlace("React Docs", "https://reactjs.org/docs/getting-started.html", "categoriaHerramientasDeDesarrollo"),
        new Enlace("Twitter", "https://twitter.com", "categoriaRedesSociales"),
        new Enlace("Noticias de Tecnología", "https://www.techcrunch.com", "categoriaNoticiasYBlogs"),
        new Enlace("Canal de Python en YouTube", "https://www.youtube.com/channel/UCX6b17PVsYBQ0ip5gyY1K4Q", "categoriaVideosEducativos"),
        new Enlace("Documentación MDN", "https://developer.mozilla.org", "categoriaReferenciasYDocumentacion")
      ];
    }
  
    // Añadir enlace
    anadirEnlace(enlace) {
      this.enlaces.push(enlace);
    }
  
    // Obtener enlaces filtrados por categoría
    obtenerEnlacesPorCategoria(categoria) {
      return this.enlaces.filter(enlace => enlace.categoria === categoria);
    }
  }
  
  // Instancia del gestor
  const gestor = new GestorEnlaces();
  
  // Función para actualizar las categorías con los enlaces
  function actualizarCategorias() {
    const categorias = [
      'categoriaRecursosEducativos', 
      'categoriaRedesSociales', 
      'categoriaNoticiasYBlogs', 
      'categoriaHerramientasDeDesarrollo', 
      'categoriaVideosEducativos', 
      'categoriaReferenciasYDocumentacion'
    ];
  
    categorias.forEach(categoria => {
      const categoriaList = document.getElementById(`${categoria}List`);
      categoriaList.innerHTML = '';  // Limpiar lista antes de volver a cargar
  
      // Obtener enlaces de la categoría actual
      gestor.obtenerEnlacesPorCategoria(categoria).forEach((enlace, indice) => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div>
            <a href="${enlace.url}" target="_blank">${enlace.descripcion}</a>
          </div>
        `;
        categoriaList.appendChild(li);
      });
    });
  }
  
  // Función para manejar el formulario de adición de enlace
  document.getElementById('formEnlace').addEventListener('submit', function(e) {
    e.preventDefault();
  
    const descripcion = document.getElementById('descripcion').value;
    const url = document.getElementById('url').value;
    const categoria = document.getElementById('categoria').value;
  
    // Crear un nuevo enlace
    const nuevoEnlace = new Enlace(descripcion, url, categoria);
  
    // Añadir el enlace al gestor
    gestor.anadirEnlace(nuevoEnlace);
  
    // Actualizar las categorías
    actualizarCategorias();
  
    // Limpiar formulario
    document.getElementById('formEnlace').reset();
  });
  
  // Inicializar la página con los enlaces iniciales
  actualizarCategorias();
  