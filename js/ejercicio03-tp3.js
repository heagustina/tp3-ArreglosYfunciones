/*
Escribir un script que simule el lanzamiento de dos dados.
 Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. 
 Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

*/

// Inicializar array para contar apariciones de cada suma (de 2 a 12)
let apariciones = Array(13).fill(0); // índice 0 y 1 no se usan

// Función para lanzar un dado (1 a 6)
function lanzarDado() {
  return Math.floor(Math.random() * 6) + 1;
}

// Repetir 50 veces el lanzamiento de dos dados
for (let i = 0; i < 50; i++) {
  let dado1 = lanzarDado();
  let dado2 = lanzarDado();
  let suma = dado1 + dado2;
  apariciones[suma]++;
}

// Mostrar resultados en tabla
document.writeln("<table border='1' style='border-collapse:collapse; text-align:center;'>");
document.writeln("<tr><th>Suma 🎲🎲</th><th>Apariciones</th></tr>");
for (let i = 2; i <= 12; i++) {
  document.writeln("<tr><td>" + i + "</td><td>" + apariciones[i] + "</td></tr>");
}
document.writeln("</table>");