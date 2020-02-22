function mostrar()
{
	var numero;
	//var contador=0;
	var positivo=0;
	var negativo=1;
	var flag = 0;
	var respuesta='s';


	do{
		numero = parseInt(prompt ("Ingrese un nro"));
		while (isNaN(numero)) {
			numero= parseInt(prompt("Este no es un nro. ingrese un numero"));
		}
	//ahora que tengo numero validado 
		if (numero >= 0)
		{ 
			positivo = positivo + numero;
		}else{
			negativo = negativo * numero;
		 //	contador++; 
		 flag = 1;
		}
			respuesta = prompt ( "Quiere ingresar otro numero");
		
		}while (respuesta == "s");

//if (negativo = 1)
    if ( flag == 0){
		negativo = 0;
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}

//FIN DE LA FUNCIÓN