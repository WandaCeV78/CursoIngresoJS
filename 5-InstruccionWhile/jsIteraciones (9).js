function mostrar()
{

	// declarar variables
	
	var numero;
	var minimo;
	var maximo;
	var flag=0;
	var respuesta="s";

	do{
		numero = parseInt(prompt ("Ingrese un nro"));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Este no es un nro. ingrese un numero"));
		}

		if (flag == 0 || numero > maximo)
		{ maximo = numero;
		}

		if (flag == 0 || numero < minimo)
		{
			minimo = numero;
			flag = 1;
		}

		respuesta = prompt ("Ud quiere seguir");
	}while (respuesta == "s");
	

	document.getElementById('maximo').value=maximo;
	document.getElementById('minimo').value=minimo;
}
	
	





	//while(respuesta!='no')
	
		
	
	




//FIN DE LA FUNCIÓN