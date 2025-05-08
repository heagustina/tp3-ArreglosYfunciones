/*
5- Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, 
sólo por minúsculas o por una mezcla de ambas.

*/

// Función que analiza el tipo de caracteres en una cadena
function analizarCadena(texto) {
    if (texto === texto.toUpperCase()) {
      return "La cadena contiene solo MAYÚSCULAS.";
    } else if (texto === texto.toLowerCase()) {
      return "La cadena contiene solo minúsculas.";
    } else {
      return "La cadena contiene una mezcla de mayúsculas y minúsculas.";
    }
  }

  // Solicitar una cadena al usuario
  let cadena = prompt("Introduce una cadena de texto:");

  // Llamar a la función y guardar el resultado
  let resultado = analizarCadena(cadena);

  // Mostrar el resultado en pantalla
  document.writeln("<p>" + resultado + "</p>");