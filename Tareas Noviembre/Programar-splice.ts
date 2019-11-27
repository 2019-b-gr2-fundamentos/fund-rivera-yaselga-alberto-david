const arregloNumeros=[1,2,3,4,5,6,7,8,9,10];
const arregloNuevo=[];
//Acceder 
//Necesito:Indice
let y= arregloNumeros.length;
for(let i=3; i<arregloNumeros.length; i++){

    arregloNuevo.push(arregloNumeros[i]);
    console.log(arregloNuevo);
    
}

for(let i=0; i<y-1; i++){

    arregloNumeros.pop();
    console.log(arregloNumeros);
}

for(let i=0; i<arregloNuevo.length; i++){

    arregloNumeros.push(arregloNuevo[i]);
    console.log(arregloNumeros);


}
/*console.log(arregloNumeros);

arregloNuevo.push(11);//7
arregloNuevo.push(12);
arregloNuevo.push(13);
arregloNuevo.push(14);
console.log(arregloNuevo);
//arregloNumeros.pop();
//console.log(arregloNumeros)
/*arregloNumeros.splice(5);
console.log(arregloNumeros);*/
/*arregloNumeros.splice(6);
console.log(arregloNumeros);*/
//arregloNumeros.indexOf(5);
//console.log(arregloNumeros.indexOf(9));
/*if(arregloNumeros.indexOf(5)<6)
{
    console.log(arregloNumeros);
}*/
