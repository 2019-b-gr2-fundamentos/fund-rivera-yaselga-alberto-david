//Escriba eun programa 
const arregloMatriz=[[1,2],[3,4,5],[6,7,8],[9]]//typescript no permite ingresar elementos que no sean arreglos.
function compararMatriz( matrizUno: Number[][], matrizDos: Number[][]): boolean
{
    return true;
}
function obtenerPrimeraDimension()
{
    //en esta linea se valida que se esta enviando lo solicitado
    for (let i=0;i< matrizUno.length;i++):number│false
    {
        const elementoActual=matrizUno[i];
        const esUnArreglo=typeof elementoActual=='object'&& elementoActual.indexof;//Truty

        if(!esUnArreglo){
            console.log('No es un arreglo');
            return false;//todo codigo que se escribe despues de un RETURN no se ejecuta, si 
            //ponemos undefinded o NULL y si ponemos Boolean se debe retornar un TRUE o False.
        }

    }

    const primeraDimensionArreglo = matrizUno.length;
    return pimeraDimensionArreglo;
}
function obtenerSegundaDimension(matrizUno:number[][]):number │ false
{
    const esValido=verificarTodosLoseElementosDeUnArreglosonArreglo(matrizUno);
    let longitudActualMaxima =0;//variable auxiliar
    let longitudActualMinima =0;
    for(let i=0;i<matrizUno.length;i++){
        const elementoActual=matrizUno[i];//arreglo
        const longitudActualMaxima =elementoActual.length//segunda dimension
        if(longitudActualMaxima<longitudActual){
            longitudActualMaxima =longitudActual;
        }
        if (longitudActual<longitudActualMinima&&longitudActualMinima>=0)
        {
            longitudActualMinima=longitudActual;
        }
        else{
            if (longitudActual<longitudActualMinima)
            {
            longitudActualMinima=longitudActual;
            }
        }


    }
}
function verificarTodosLoseElementosDeUnArreglosonArreglo(arreglo: any[])
{
    for (let i=0;i< arreglo.length;i++):number │ false
    {
        const elementoActual=arreglo[i];
        const esUnArreglo=typeof elementoActual=='object'&& elementoActual.indexof;//Truty

        if(!esUnArreglo){
            console.log('No es un arreglo');
            return false;//todo codigo que se escribe despues de un RETURN no se ejecuta, si 
            //ponemos undefinded o NULL y si ponemos Boolean se debe retornar un TRUE o False.
        }

    }


}
function obtenerPrimeraDimension()
{
    const esValido=verificarTodosLoseElementosDeUnArreglosonArreglo(matrizUno);
    if esValido{
    const primeraDimensionArreglo = matrizUno.length;
    return pimeraDimensionArreglo;
    }else{
        return false;
    }
}

/*function main()
{
//compartirMa
}*/