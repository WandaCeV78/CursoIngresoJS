function mostrar()
{
var numero;
var contadorpares = 0;


 numero= parseInt(prompt("Ingrese un numero"));
 while (isNaN (numero))
 {
 numero = parseInt(prompt("Esto no es un nro , ingrese un numero"));
 }

for (var i = 1; i <= numero; i++)
 {   
     if    ( i% 2 == 0)  
     {
         console.log (i);
          contadorpares++;
     }


console.log("Cantidad de pares enontrados : " + contadorpares  );
}

}//FIN DE LA FUNCIÓN
