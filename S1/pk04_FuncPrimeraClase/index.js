// creando 2 function expression
// Funcion de primera clase
// var funcionSaludar=function(name){
// 	console.log("hola %s", name)
// };

var funcionDespide=function(name){
	console.log("adios %s", name)
};
// Creando una function declaration
// Handler = manejador
// Manejador: una funcion que procesa datos
function msj(name, handler){
	name = name.toUpperCase();
	handler(name);
};
// Invocar la funcion msj que a su misam vez se le paso un string y una funcion
//msj("Salvador",funcionSaludar);
msj("Salvador",funcionDespide);