/*
7- Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.
*/
 // Función que muestra la tabla de multiplicar del número ingresado
 function mostrarTabla(numero) {
    document.writeln("<h3>Tabla de multiplicar del " + numero + ":</h3>");
    for (let i = 1; i <= 10; i++) {
      let resultado = numero * i;
      document.writeln("<p>" + numero + " x " + i + " = " + resultado + "</p>");
    }
  }

  // Solicitar al usuario el número para la tabla
  let entrada = prompt("Introduce un número para ver su tabla de multiplicar:");
  let numero = parseInt(entrada);

  // Llamar a la función para mostrar la tabla
  mostrarTabla(numero);