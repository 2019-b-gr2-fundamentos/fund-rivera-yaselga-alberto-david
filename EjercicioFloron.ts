const arreglo=[];
for(let numeroElementosCreados = 0;numeroElementosCreados <= 5; numeroElementosCreados++)
{
    const binario=Math.floor(Math.random()*2);//[0,2[
    arreglo.push(binario);
    console.log('arreglo',arreglo);
}

for(let numeroElementosCreados=1;numeroElementosCreados<=5;numeroElementosCreados++)
{
    const binario=Math.floor(Math.random()*2);//[0,2[
    arreglo.push(binario);
    console.log('arreglo',arreglo);
}

//2)cada elemento sera uno o cero
//ejemplo: [0,0,1,1,0]
//3)Exista el menos un elemento "1"
//ejemplo:[0,0,0,0,0]
//ejemplo:[0,0,0,0,1]
