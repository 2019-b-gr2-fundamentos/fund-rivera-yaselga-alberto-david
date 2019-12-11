#######Ejercicio N°1########
import math
if __name__=="__main__":
    while(True):
        print("*************CALCULADORA**********")
        print("Suma (1)")
        print("Resta (2)")
        print("Multiplicacion (3)")
        print("Division (4)")
        print("Potenciacion (5)")
        print("Radicacion (6)")
        print("MCM (7)")
        print("Seno de un angulo (8)")
        print("El mayor numero (9)")
        print("Porcentaje de un numero (10)")
        num = int(input("Ingrese la operacion \n"))
        if(num==1):
            print("ingrese dos numeros")
            val1=int(input("Valor 1 \n"))
            val2=int(input("Valor 2 \n"))
            print(val1+val2)
        elif(num==2):
            print("ingrese dos numeros")
            val1=int(input("Valor 1 \n"))
            val2=int(input("Valor 2 \n"))
            print(val1-val2)
        elif (num == 3):
            print("ingrese dos numeros")
            val1 = int(input("Valor 1 \n"))
            val2 = int(input("Valor 2 \n"))
            print(val1 * val2)
        elif (num == 4):
            print("ingrese dos numeros")
            val1 = int(input("Valor 1 \n"))
            val2 = int(input("Valor 2 \n"))
            print(val1 / val2)
        elif (num == 5):
            print("ingrese dos numeros")
            val1 = int(input("Valor 1 \n"))
            val2 = int(input("Exponente \n"))
            print(val1**val2)
        elif (num == 6):
            print("Ingrese un numero")
            val1 = int(input("Valor 1 \n"))
            y = math.sqrt(val1)
            print(y)

        elif (num == 7):
            print("Ingrese dos numeros")
            val1 = int(input("Valor 1 \n"))
            val2 = int(input("Valor 2 \n"))
            def mcm(val1,val2):
                z=max(val1,val2)
                while True:
                    if (z%val1==0)and(z%val2==0):
                        return z
                    z=z+1
            print(mcm(val1,val2))

        elif (num == 8):
            print("Calculo del Seno de un angulo")
            val1 = int(input("Ingrese el valor del angulo \n"))
            w = float(val1)
            x = math.radians(w)
            print(math.sin(x))
        elif (num == 9):
            print("ingrese dos numeros")
            val1 = int(input("Valor 1 \n"))
            val2 = int(input("Valor 2 \n"))
            if(val1>val2):
                print('el mayor es',val1)
            else:
                print('el mayor es',val2)
                if(val1==val2):
                    print('los dos son iguales')
        elif (num == 10):
            print("Calculo de porcentaje")
            val1 = int(input("Ingrese un valor \n"))
            val2 = int(input("Ingrese el porcentaje que desea calcular\n"))
            p=(val1*val2)/100
            print('El',val2,'% de',val1,'es:',p)
        elif (num == 11):
            break
        
        
        
        
#######Ejercicio N°2########
if __name__=="__main__":
    telefonos =[]# Se crea un arreglo vacio.

    while(True):
        num = int(input("Ingrese la opcion NUEVO[1], ACTUALIZAR[2],BORRAR[3], MOSTRAR[4]: "))#Muestra las opciones a realizarse
       
        if(num==1):#Dentro de esta sentencia IF se ingresa los elmentos del arreglo
            print("NUEVO TELEFONO")
            tel = input("Ingrese una nueva marca de telefono: ")
            telefonos.append(tel)

        elif (num==2):#Dentro de esta sentencia IF se muestra el arreglo con los elementos ingresados
            print("ACTUALIZAR TELEFONO")
            val = input("Ingrese la MARCA a buscar: ")
            for i in range(len(telefonos)): 
                if telefonos[i]==val:
                    print("La marca es: "+str(telefonos[i]))
                    telefonos.remove(telefonos[i])
                    tel = input("Ingrese la MARCA: ")
                    telefonos.append(tel)
                    break
            else:#Se recorre el arreglo y al no encontrar el elemento
                print("Marca no encontrada")

        elif (num==3):#En esta sentencia IF se borra un elemento del arreglo
            print("BORRAR CONTACTO")
            val = input("Ingrese la MARCA a buscar: ")
            for i in range(len(telefonos)): 
                if telefonos[i]==val:
                    print("La MARCA encontarda es: "+str(telefonos[i]))
                    telefonos.remove(telefonos[i])
                    break
            else:
                print("Marca no encontrado")

        elif (num==4):
            print("MOSTRAR MARCA")
            print(telefonos)
        elif (num==5):
            print("salir")
            break