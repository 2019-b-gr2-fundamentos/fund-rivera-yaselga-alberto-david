let numeroUno =1;
//NUMEROUNO-> TODO MAYUSCULA(SEPARACION NO)
//NUMERO_UNO->mayuscula guion bajo
//Numerouno->
//numerouno
//numero_uno->Python
const numeroUno=1;//camelcase
let resultado;
//SUMA
resultado=1+2;
//RESTA
resultado=1-2;
//PRODUCTO
resultado=1*2;
//COCIENTE
resultado=1/2;
//EXPONENCIAL
resultado=1^2;
//MOD
resultado=4%2;//0->Residuo
resultado=4%3;//1->Residuo
resultado=4%3;//1->Residuo

console.log("pera"+2);

//STRINGS
const mensaje="\"Hola mundo\"";
const saludo="\"Adios mundo\"";
console.log(mensaje+"1\t\t\ 222\r\r\r 3\n"+saludo);


//teneplate strings
const edad=30;
const saludoEdad = 'Mi edad es: ${edad}';
const SaludoCompleto='${mesaje}\n${saludo}';
console.log(saludoEdad);
console.log(SaludoCompleto);
//contamos los elementos
const nombreLongitud ="David";
console.log(nombreLongitud.length);
console.log(nombreLongitud.trim());
//eliminar espacios al principio y al final
console.log(nombreLongitud.trim());
//cambiar a mayusculas o minusculas
console.log(nombreLongitud.toUpperCase());
console.log(nombreLongitud.toLowerCase());
console.log(nombreLongitud.replace("e","o"));
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud.replace("\n",""));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("x","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.replace("a","o"));
console.log(nombreLongitud);
console.log(nombreLongitud.search("z"));//-1 cuando no encuentra
console.log(nombreLongitud.search("David"));//busca la primera ocurrencia si la encuentra indica la posocion la que se encuentra y sino muestra -1
console.log(nombreLongitud.slice(0,6));// nos devuelve un rango indicado
console.log(nombreLongitud.indexOf("a"));//si no existe devuelve -1
console.log(nombreLongitud.includes(" "));//devuelve un booleano
console.log(nombreLongitud.includes("x"));//devuelve un booleano
console.log(nombreLongitud.endsWith("x"));//finaliza con, devuleve un boolean
console.log(nombreLongitud.startsWith("vice"));//inicia con, devuelve un  boolean
console.log(nombreLongitud.substring(0,6));//realiza lo mismo que el slice.
//CONDICIONALES
//TRUTY
if ("abc"){
    console.log("Truty");//Truty
}else{
    console.log("Fasly");
}
if ("1,3232"){
    console.log("Truty");//Truty
}else{
    console.log("Fasly");
}

if (0){
    console.log("Truty");
}else{
    console.log("Fasly");//Falsy
}

if (undefined){
    console.log("Truty");
}else{
    console.log("Fasly");//Falsy
}

/*const edad=5;//opreciones fundamentales
switch(edad){
    //code block
    case edad>0 && edad <=6://1
    console.log("guagua");
    break;
    case edad>6 && edad <=18://1
    console.log("Guambra");
    break;
    case edad>18 && edad <=65://1
    console.log("longo");
    break;
    case edad>65 && edad <=66://1
    console.log("Ruku");
    break;
    default:
}*/
const edadString=prompt("Ingrese un numero");
const edad=Number(edadString);

if (edad>0 && edad<=6){
    console.log("Guagua");
}else{
    if(edad>6 && edad<=18){
        console.log("Guambra");
    }else{
        if(edad>18 && edad<=65){
            console.log("Longo");
        }else{
            if(edad>65 && edad<=66){
                console.log("ruku");
            }else{
                if(edad<-0){
                console.log("recien nacido");
                }else{
                    console.log("ya murio");
                }
            }
        }
    }
}


//6 Guagua
//18 Guambra
//65 Longo
//66 Ruku
//FALSY