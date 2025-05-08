/*
Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
luego crear una función para calcular su perímetro y mostrarlo por pantalla.

*/

// Función para calcular el perímetro de un rectángulo
function calcularPerimetro(a, b) {
    return 2 * (a + b);
  }
  
  // Solicitar los lados al usuario
  let ladoA = parseFloat(prompt("Introduce el valor del lado A:"));
  let ladoB = parseFloat(prompt("Introduce el valor del lado B:"));
  
  // Calcular el perímetro
  let perimetro = calcularPerimetro(ladoA, ladoB);
  
  // Mostrar resultado en pantalla
  document.writeln("<p>Lado A: " + ladoA + "</p>");
  document.writeln("<p>Lado B: " + ladoB + "</p>");
  document.writeln("<p>Perímetro del rectángulo: " + perimetro + "</p>");