//repetir las cosas
//Se debe tener algo a lo cual se le aplicara la recursividad.
function imprimirMensajeNveces(mensaje:string,
    numeroVeces:number):void
{
    if(numeroVeces==0){
        console.log('se termino');
    }else{
        console.log('mensaje')
        const nuevoNumeroVeces=numeroVeces-1;
        imprimirMensajeNveces(mensaje,nuevoNumeroVeces-1);
    }
}
function main()
{
    imprimirMensajeNveces('hola',3);
}
main();
//funcion para leer un arreglo
//const arregloNumeros:number[]=[1,2,3];
//const arregloString: string[]=['a','b','c']
//const arregloboolean: boolean[]=[true,false]
const arregloRecursividad[]=[1,2,3,4,5];

function imprimirRecursividad(arreglo:number[]):void
{
    if (arregloRecursividad[]==arregloRecursividad.length-1)
    {
        console.log(arregloRecursividad);
    }else{
        console.log('ya no hay mas que recorrer');
    }


}
function main()
{
    imprimirRecursividad(arregloRecursividad);
}