// Este codigo ejecuta sin problemas debido a que la function declaration
// es cargada antes de que cualquier otra cosa

saluda("Chava");
 
function saluda(name){
	console.log("Hola " + name);
}

//este codigo marca error debido a que solo podemos usar la 
//fucntion expression despues de haberla creado
// despide("Chava");
// 
// var despide = function(name){
// 	console.log("Adios" + name);
// }