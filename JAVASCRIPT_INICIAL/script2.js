// Seleccionamos elementos por su id
var container = document.getElementById('container');
// Modificamos el contenido del div con id "container"
container.innerHTML = "<h1>Nuevo Contenido (modificado)</h1>";

// Seleccionamos elementos por su clase
var parrafos = document.getElementsByClassName('parrafo');
// Modificamos el contenido de todos los elementos con clase "parrafo"
Array.from(parrafos).forEach(element => {
  element.innerHTML += "(modificado)";
});

// Seleccionamos elementos por su etiqueta
var listItems = document.getElementsByTagName('li');
// Modificamos el contenido de todos los elementos <li>
for (var i = 0; i < listItems.length; i++) {
  listItems[i].innerHTML += " (modificado)";
}

// Seleccionamos el primer párrafo utilizando document.querySelector()
var primerParrafo = document.querySelector('.parrafo2');
// Modificamos el contenido del primer párrafo
primerParrafo.innerHTML += " (modificado)";

// Seleccionamos todos los párrafos utilizando document.querySelectorAll()
var parrafos = document.querySelectorAll('.parrafo2');
// Modificamos el contenido de todos los párrafos
for (var i = 0; i < parrafos.length; i++) {
  parrafos[i].innerHTML += " (modificado)";
}
