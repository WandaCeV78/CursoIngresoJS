/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var precio;
    
    var descuento;
    
    var resultado;

    precio = parseInt (document.getElementById ("importe").value);
    descuento = (precio * 0.25);

    resultado = (precio - descuento);

    document.getElementById("resultado").value = resultado;


}
