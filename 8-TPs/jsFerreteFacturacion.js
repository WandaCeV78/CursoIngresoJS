/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{   var precio1;
    var precio2;
    var precio3;
    var resultadosum;
    
    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);
    resultadosum = (precio1)+(precio2)+(precio3);

    alert ("La suma de los precios es " + resultadosum);
    
    




	
}
function Promedio () 
{

    var precio1;
    var precio2;
    var precio3;
    
    var resultadoprom;



    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);

    resultadoprom= ((precio1)+(precio2)+(precio3)) /3;

    alert ("El promedio de los precios es " + resultadoprom);



}
function PrecioFinal () 
{
    
    
    var precio1;
    var precio2;
    var precio3;
    var resultadosum;
    var iva

    precio1 = parseInt(document.getElementById("PrecioUno").value);
    precio2 = parseInt(document.getElementById("PrecioDos").value);
    precio3 = parseInt(document.getElementById("PrecioTres").value);
    resultadosum = (precio1)+(precio2)+(precio3);
    iva = resultadosum * 1.21;

    alert ("El precio final con IVA es " + iva);

}