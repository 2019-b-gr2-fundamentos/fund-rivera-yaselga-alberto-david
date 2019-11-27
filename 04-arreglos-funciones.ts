//un arreglo tiene tiene elementos del mismo y diferente tipo, indices y longitud.
const arregloNumeros=[1,2,3,4,5,6,7,8,9,10];
//Acceder 
//Necesito:Indice
console.log(arregloNumeros);//7


//Anadir al final
//Necesito: El elemento que vamos a anadir
arregloNumeros.push(11);

//Borrar al final
arregloNumeros.pop();

//Anadir 
//Necesito: el indice y el elemento
arregloNumeros.splice(0,1+1);
console.log(arregloNumeros);
//o borrar
arregloNumeros.splice(6,1);
console.log(arregloNumeros);
/////////TAREA//////////
//PROGRAMAR EL SPLICE PARA ANADIR Y BORRAR


//BUSCAR INDICE DE UN ELEMENTO
arregloNumeros.indexOf(5);
console.log(arregloNumeros.indexOf(6));
arregloNumeros.indexOf(7);
console.log(arregloNumeros.indexOf(1));
//
arregloNumeros[0]=999;
//FUNCIONES
//Eliminan codigo repetido
//TAREA
//Splice 1 elemento Anadir, Splice de 1 elemento borrar
/*Pseudocodigo
Diagrama de flujo
Programa*/
