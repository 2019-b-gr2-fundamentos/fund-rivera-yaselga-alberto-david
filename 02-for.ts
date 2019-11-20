//for
//1)Declarar una variable
//2)condicion(Expersion)
//3)Incrementar, Disminuir
//Programa
for(let numerodeExdemiCrush=7;numerodeExdemiCrush >0;numerodeExdemiCrush--)
{
    console.log('ES CA DA LO',numerodeExdemiCrush);

}
// creciente
for(let numerodeExdemiCrush=0;numerodeExdemiCrush <7;numerodeExdemiCrush++)
{
    console.log('ES CA DA LO',numerodeExdemiCrush);

}
//
for(let numerodeExdemiCrush=0;numerodeExdemiCrush <=6;numerodeExdemiCrush++)
{
    console.log('ES CA DA LO',numerodeExdemiCrush);

}
for(let numerodeExdemiCrush=6;numerodeExdemiCrush >=0;numerodeExdemiCrush--)
{
    console.log('ES CA DA LO',numerodeExdemiCrush);

}
//ARREGLO
//1 Elemento (variable cosnt numero=1)
//conjunto de Mismos elementos ([1,2,3,4,5,6])
//comjunto de Diferentes elementos([1,"abc",true])
let arregloNumeros=[1,2.,3,4,5];
//Reasignar
//arregloNumero=[1,2,3,4,5]
arregloNumeros.push(6);
console.log('arregloNumeros',arregloNumeros);
arregloNumeros.pop();//elimina la ultima posicion
console.log('arregloNumeros',arregloNumeros);
//Arreglo
//1)Elemento
//2)Indices (0 index based)->POSICION
//Longitud-># Elementos
console.log(arregloNumeros.length);
//Acceder a cada elemento del arreglo pro el INDICE
//Necesitamos el indice
//[1,2,3,4,5]
//0,1,20,3,5
const indiceElementoCinco=4;
console.log(arregloNumeros[indiceElementoCinco]);
//5

//For
//1)let tamanio =arregloNUmeros.length//5
//2)tamanio >0
//3) --
for(let numerodeExdemiCrush=5;numerodeExdemiCrush >0;numerodeExdemiCrush--)
{
    console.log(arregloNumeros.length);

}
//JUEGO EN CLASE
//1)Crear un arrego de 5 elementos
//2)cada elemento sera uno o cero
//ejemplo: [0,0,1,1,0]
//3)Exista el menos un elemento "1"
//ejemplo:[0,0,0,0,0]
//ejemplo:[0,0,0,0,1]
Math.floor(Math.random()*2)//[0,2[
Math.floor(Math.random()*2)//[0,11[