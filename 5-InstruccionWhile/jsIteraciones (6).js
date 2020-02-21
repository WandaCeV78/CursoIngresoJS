function mostrar()
{

	var contador= 0;
	var acumulador= 0;
	var promedio; 

while (contador <5)
{

numero = parseInt(prompt("Ingrese un numero: ").value);
while (isNaN (numero))
{
	numero= parseInt (prompt( " Esto no es un numero:"));
}
acumulador = acumulador + contador;

contador ++;

}

promedio = acumulador /5;


document.getElementById("suma").value= acumulador;
document.getElementById("promedio").value= promedio;



}//FIN DE LA FUNCIÓN