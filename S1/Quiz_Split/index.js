var numeros = process.argv[2];
var numerosSeparados = numeros.split(",");	
var suma=0;
for(var i=0; i < numerosSeparados.length; i++){	
	suma=suma + parseInt(numerosSeparados[i]);
}
console.log("\nLa suma total es= "+ suma);
