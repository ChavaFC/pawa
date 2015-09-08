var suma=0;
var aux=0;
for(var i=2; i<process.argv.length; i++){
	aux= parseInt(process.argv[i])
	suma=suma+aux;
}
console.log("suma= "+ suma);