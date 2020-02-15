function mostrar()
{
//tomo la edad  
var mes
var mes = document.getElementById("mes").value;

switch (mes) {
    case "Enero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
    case "Julio":
    case "Agosto":
    case "Septiembre":
    alert("Este mes tiene mas de 30 dias");
    break;

    case ("Febrero"):
    alert("Este mes tiene no tiene mas de 29 dias");
    break;
}
}
    
//alert (mesDelAño);
	
	


