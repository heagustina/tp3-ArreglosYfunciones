/*
4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve 
como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.
*/

// Función que recibe un número entero y devuelve si es par o impar
function esParOImpar(numero) {
    if (numero % 2 === 0) {
      return "El número " + numero + " es par.";
    } else {
      return "El número " + numero + " es impar.";
    }
  }

  // Pedir al usuario un número
  let entrada = prompt("Introduce un número entero:");
  let numero = parseInt(entrada); // Convertir a entero

  // Llamar a la función
  let resultado = esParOImpar(numero);

  // Mostrar el resultado en pantalla
  document.writeln("<p>" + resultado + "</p>");