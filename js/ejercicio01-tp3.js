/*
1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. 
Mostrar por pantalla en forma de lista los doce nombres del arreglo.
*/

const meses =[`Enero`, `Febrero`, `Marzo`, `Abril`, `Mayo`, `Junio`,`julio`, `Agosto`, `Septiembre`, `Octubre`, `Noviembre`, `Diciembre`];
  
//mostrar los meses en consola
  console.log(meses);
  
  //Lista de paises en pantalla
  document.writeln('Lista de meses: ')
  document.writeln(`<ul>`);
  for (let i = 0; i < meses.length; i++) {
    document.writeln(`<li>${meses[i]}</li>`);
  }
  document.writeln(`</ul>`);