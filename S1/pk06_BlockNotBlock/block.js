// Modelo bloqueante
// de una lectura de archivos

// Loading
// file stream module
var  fs = require('fs');

// readig the file
var content = fs.readFileSync("\hola.html",'utf-8');

// inprimimos
console.log(content);
// Msj final
console.log("Este programa ha finalizado su ejecucion!!!");
