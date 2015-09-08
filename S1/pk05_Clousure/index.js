// Clousures
function retornaFuncionSaluda(){
	var msj="Hola a todos";
	var funcionSaludo=function(){
		console.log(msj);
	};
	return funcionSaludo;
};
// Guardando en una variable una funcion 
var saludando = retornaFuncionSaluda();
// Ejecutando la funcion saludando
saludando();
