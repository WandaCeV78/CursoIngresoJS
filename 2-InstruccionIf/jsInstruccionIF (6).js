function mostrar()
{
//tomo la edad  
 var edad;

edad = parseint(document.getElementById("edad").value);

 if (edad <13){
  alert("Niño");
 }

 else if (edad <=17){
     alert("Adolescente");
 }
 else {
     alert("Adulto");
 }


}//FIN DE LA FUNCIÓN