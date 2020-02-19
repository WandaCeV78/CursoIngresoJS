/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temp;
    var fac;
    var caf;

    temp = parseInt(document.getElementById("Temperatura").value);
    fac = ((temp - 32)* (5/9));
    
    alert (temp + " grados Fahrenheit son " + fac + " grados centigrados");




}

function CentigradosFahrenheit () 
{
	var temp;
    var fac;
    var caf;

    temp = parseInt(document.getElementById("Temperatura").value);
    caf = (temp *(9/5))+ 32;

    alert (temp + " grados centigrados son " + caf + " grados Fahrenheit");
}
