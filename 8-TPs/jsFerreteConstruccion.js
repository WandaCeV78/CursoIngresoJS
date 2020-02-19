/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var rectangulo;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    rectangulo = (largo)* (ancho);

    alert ("ud necesita de cada hilo de alambre " + rectangulo + "mtrs");



}
function Circulo () 
{
	
}
function Materiales () 
{ 
	var largo;
    var ancho;
    var cemento;
    var cal ;
    var mat;

    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    
    cemento = ((largo)* (ancho)) *2;
    cal = ((largo)* (ancho)) *3;

    alert ("Las cantidades necesarias para sus rectangulo es " +cemento+ " bolsas de cemento y "+ cal + " bolsas de cal");

}