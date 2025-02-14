//Cambiamos contenido de #miId1
document.getElementById("miId1").innerHTML = "Nuevo contenido";
//Cambiamos contenido de #miId2
document.getElementById("miId2").textContent = "Nuevo texto";
//Añadimos la clase rojo a #miId3

document.getElementById("miId3").setAttribute("class", "miClase");
//Ponemos de color azul #miId4
document.getElementById("miId4").style.color = "blue";
//Escribimos ¡Hola mundo! en el documento
document.write("¡Hola mundo!");
// Creamos un botón y lo añadimos al final del body
var boton = document.createElement("button");
boton.innerHTML =" Haz clic";
document.body.appendChild(boton);

// Creamos un nuevo atributo y lo establecemos en un elemento
var nuevoAtributo = document.createAttribute("class");
nuevoAtributo.value = "miClase2";
document.getElementById("miId5").setAttributeNode(nuevoAtributo);

// Eliminamos el atributo 'class' de un elemento
document.getElementById("miId6").removeAttribute("class");

//Eliminamos #miId7
document.getElementById("miId7").remove();