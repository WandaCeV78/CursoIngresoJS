function mostrar()
{
//tomo la edad  

var mes
var mes = document.getElementById("mes").value;

switch (mes){
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    alert ( "Falta para el invierno");
    break;

    case "Julio":
    case "Junio":
    alert ("Estamos en invierno");
    break;

    case "Diciembre":
    alert ( "Ya pasamos el frio");
    break;
}

}





