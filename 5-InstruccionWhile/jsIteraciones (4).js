function mostrar()
{

    var num;

	num = prompt("Ingrese un número entre 0 y 10");
	num= parseInt (num);
	

/* 
Otra opcion del while, cuando es excluyente la condicion tmb agregar el isNaN
while (num < 0 || num >9 || isNan (numero)) 
*/


	while (!(num >= 0 && num <= 9))
	{ alert ("Numero no validado, ingrese nuevamente");
	num = prompt("Ingrese un número entre 0 y 10");
	num= parseInt (num);
} 
	

	document.getElementById("Numero").value = num;
	

}//FIN DE LA FUNCIÓN