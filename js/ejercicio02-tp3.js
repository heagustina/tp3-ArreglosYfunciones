/*
2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, 
cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

*/

let ciudades = [];

// Pedir al usuario nombres de ciudades
let ciudad;
while (true) {
  ciudad = prompt("Introduce el nombre de una ciudad (Cancelar para terminar):");
  if (ciudad === null) break;
  ciudades.push(ciudad);
}

// Mostrar la longitud del arreglo
console.log(`El arreglo de ciudades tiene ${ciudades.length} elementos.`);

//Mostrar posiciones
if (ciudades.length > 0) {
    document.writeln(`<p>Elemento 1ra posición: ${ciudades[0]}</p>`);
  }
  if (ciudades.length > 2) {
    document.writeln(`<p>Elemento 3ra posición: ${ciudades[2]}</p>`);
  }
  if (ciudades.length > 0) {
    document.writeln(`<p>Elemento última posición: ${ciudades[ciudades.length - 1]}</p>`);
  }

  //Paris
  ciudades.push("París");

  // Mostrar segunda posición (antes de reemplazo)
  if (ciudades.length > 1) {
    document.writeln(`<p>Elemento en la 2da posición: ${ciudades[1]}</p>`);
  }

   // Reemplazar segunda posición por "Barcelona"
   if (ciudades.length > 1) {
    ciudades[1] = "Barcelona";
  }

  // Mostrar el arreglo completo
  document.writeln(`<h3>Arreglo de ciudades actualizado:</h3>`);
  document.writeln(`<ul>`);
  ciudades.forEach(ciudad => {
    document.writeln(`<li>Elemento: ${ciudad}</li>`);
  });
  document.writeln(`</ul>`);