function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var maximo;
	var minimo;

	numero = Math.floor (Math.random ()* ((maximo+ 1 )- minimo)+ minimo );

	alert (numero);
	

}//FIN DE LA FUNCIÓN