function mostrar()
{
	
	var seguir;
	var promedio;
	var contador = 0;
	var acumulador = 0;
	var numero;
	

	do{
		numero = parseInt(prompt ("Ingrese un nro"));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Este no es un nro. ingrese un numero"));
		}
	   acumulador = acumulador + numero;
	   contador++;

		seguir=  prompt ("Quiere ingresar otro numero");
		
	} 
	while(seguir == "s") ;

	promedio = acumulador / contador;

	document.getElementById("suma").value = acumulador;
	document.getElementById("promedio").value = promedio;
}

//FIN DE LA FUNCIÓN