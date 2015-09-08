// Modelo no bloqueante

// Loading
// file stream module
var  fs = require('fs');

var manejador= function(err, data){
	if(err){
		console.log("> Error al leer archivos...");
		return;		
	}
	console.log(data);	
};
// Lectura asincrona de archivos
// 1.-Ruta del archivo al leer
// 2.-Codificacion
// 3.-Que funcion quieres que invoque a la hora de terminar la lectura del archivo
fs.readFile("\hola.html",'utf-8',manejador);

// Msj final
console.log("Este programa ha finalizado su ejecucion!!!");


/*
	// Pasar deirectamente al manejador como una funcion
	fs.readFile("\hola.html",'utf-8',function(err, data){
	if(err){
		console.log("> Error al leer archivos...");
		return;		
	}
	console.log(data);	
});	
*/