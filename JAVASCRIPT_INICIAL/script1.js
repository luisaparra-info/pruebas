document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el párrafo y agrega el evento click
    var titulo = document.querySelector("h1");
    titulo.addEventListener("click", function() {
        alert("¡Hola Mundo!");
    });
});

const PI= 3.14;
// Ejemplo de alcance de let y var
function ejemploAlcance() {
    let variableLet;
    if (true) {
        variableLet = "Variable con alcance de bloque";
        variableVar = "Variable con alcance de función";
    }

    //console.log(variableVar); // Salida: "Variable con alcance de función"
    //console.log(variableLet); // Esto causaría un error ya que variableLet está fuera del alcance de bloque
}

ejemploAlcance();
console.log(variableVar);
//console.log(variableLet);

// Solicita al usuario que ingrese un número
let userInput = prompt("Por favor, inserta un número:");
while(isNaN(userInput)){
    userInput = prompt("Inténtelo de nuevo.Por favor, inserta un número:");
}
// Convierte la entrada del usuario en un número entero
let number = parseInt(userInput);

// Verifica si el usuario ingresó un número válido
if (!isNaN(number)) {
    // Si el usuario ingresó un número válido, muestra el resultado en la consola
    console.log("El número insertado es:", number);
} else {
    // Si el usuario no ingresó un número válido, muestra un mensaje de error en la consola
    console.error("Error: Entrada inválida. Por favor, inserta un número válido.");
}