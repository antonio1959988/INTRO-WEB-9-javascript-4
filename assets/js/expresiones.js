console.log("Estoy vivo");

/*
Operador

Un elemento que nos permite realizar una operacion entre dos o mas elementos.

    - Operadores aritmeticos (+, -, *, /)
    - Operadores de asignacion (=, ==, ===) / asignacion
    - Operadores de cadenas (toLowerCase, toUpperCase, trim, toString, concat)
    - Operadores logicos (&&, ||, !)
    - Operadores de comparacion (<, >, <=, >=, ==, ===) / igualdad, igualdad estrictamente igual

*/

//Operadores aritmeticos

/*
Son operadores que nos permiten tomar valores numericos como sus operandos y retornar un valor numerico unico. Corresponden a operaciones matematicas

    - Suma
    - Resta
    - Multiplicacion (/)
    - Division (/)
    - Residuo / Modulo (%)
    - Exponenciacion (**)
    - Incremento (++)
    - Decremento (--)
*/

//Ejemplo
//2{5*6(4) + [3-(5 - 76)]};
//operacionCompleja = 10 + 5 / 2(5 - 6);


//Variables
let numeroo1 = 10;
let numeroo2 = 2;
let numeroo3 = "5";


//Operaciones
suma = numeroo1 + numeroo2;//12
resta = numeroo1 - numeroo2; // 8 
multiplicacion = numeroo1 * numeroo2;
residuo = numeroo1 % numeroo2;
exponenciacion = 10 ** 2; //Es obsoleto porque ya hay un metodo para esto


//Impresion del valor con incremento
//console.log("Valor del numero 1 antes del incremento: ", numeroo1);

//Los valores si se pueden reasignar NOTA: Cuando usamos incrementos, el valor se reasigna (suma y reasigna en la misma operacion)
incremento = numeroo1++; // 11
decremento = numeroo2--; // 1

//Forma extensa de un incremento
numeroo1 = numeroo1 + 1;

console.log("Valor del numero 1 despues del incremento: ", numeroo1);

//Incremento de 10 en 10
numeroo1 += 10; //20 suma y reasigna al mismo tiempo
numeroo1 = 10 + 10


//Operaciones en pantalla
console.log("Suma de 10 + 2: " , suma); //Primera forma de mostrar la suma
console.log("Suma de 10 + 2: " , numeroo1 + numeroo2); //Segunda forma
console.log("Suma de 10 + 2: " , 10 + 2); //tercera forma
console.log("Resta de 10 - 2", resta);


/*
Operadores de comparacion

Operadores que nos permiten comparar dos datos y al hacerlo obtendremos un valor booleano, es decir, (true or false)

    - Mayor que (>)
    - Menor que (<)
    - Mayor o igual que (>=)
    - Menor o igual que (<=)
    - igual (==)
    - estrictamente igual (==)
    - Diferente de (!=)
    - estrictamente diferente (!==)


Igual (==)

Sirve para comparar que dos valores sean iguales



*/

let =numeroComparacion1 = 23;
let = numeroComparacion2 = 13;
let = numeroComparacion3 = "13";

//13 == "13" //true
//13 === "13" //false
// 23 > 13 //true
// 23 < 12 //false

let edadFelipe = 20;

if (edadFelipe >= 18){
    console.log("Puedes ir a la fiesta");
} else {
    console.log("Te quedas en casa")
}

//Dos negaciones es una afirmacion
//!vamos a comer (no vamos a comer)
//!no me gusta java (no no me gusta llava)


/*

Operadores de asignacion

Son los operadores que se usan para asignar un valor a una variable
operador =

let edad = 31;
Let saldo = 0;

*/


/*
Operadores logicos

Nos devuelven un resultado a partir de que se cumpla o no una condicion, el resultado es booleano (true or false).

    - and &&: Sirve para determinar si dos expresiones son verdaderas, 
        Si ambas son verdaderas el resultado es verdadera.
        Si alguna de ellas es falsa, todo el resultado es falso. 
        Si ambas son falsas, todo es falso

*/

let tengoUnCrush = false;
let miCrushMeQuiere = true;


if (tengoUnCrush && miCrushMeQuiere){
    console.log("Estoy Feliz :)");
} else {
    console.log("Haganse a un lado que me quiero automorir");
}

/*
    Or ||: Sirve para determinar si dos expresiones son falsas.
        Si cualquiera de las dos afirmaciones es verdadera, todo es verdadero. 
        Si las dos son falsas, todo es falso.

*/

let hayChilaquilesVerdes = true;
let hayCarneEnSuJugo = false;

if (hayChilaquilesVerdes || hayCarneEnSuJugo){
    console.log("Felipe desayuna chido");
}  else {
    console.log("Felipe no desayuna chido");
}

/*
    NOT (!): Regresa lo contrario de lo que evaluamos

*/
let saldoFelipe = 20;
let amigosQueInviten = true;

let escenario1 = edadFelipe >= 18 && saldoFelipe != 0;

let escenario2 = edadFelipe >= 18 && amigosQueInviten == true;

if (escenario1 || escenario2){
    console.log("chido");
} else {
    console.log("nochido");
}
















//Suma (+): Se utiliza para sumar dos numeros
let resultado = 5 + 3;  // resultado contendra el valor 8

//Resta (-): Se utiliza para restar un numero de otro
let resultado1 = 10 - 4; // resultado contendra el valor 6

//Multiplicacion (*): Se utiliza para multiplicar dos numeros
let resultado2 = 6 * 3; // resultado contendra el valor 18

//Division (/): Se utiliza para dividir un numero por otro. La división por cero produce un valor especial llamado "infinity" (infinito)
let resultado3 = 15 / 3; //resultado contendra el valor 5

//Modulo (%) Se utiliza para obtener el resto de una division entre dos numeros
let resultado4 = 10 % 3; //resultado contendra el valor 1 (el resto de 10 dividido por 3)

//Incremento (++): Se utiliza para aumentar en 1 el valor de una variable
let numero;
numero++;
// ahora numero contendra el valor 6

//Decremento (--); Se utiliza para disminuir en 1 el valor de una variable.
let numero1 = 8;
numero--; // ahora numero contendra el valor 7


//Doble igual - igualdad Abstracta
5 == "5" // true, ya que javascript convierte la cadena "5" a un numero antes de la comparacion

//Trimple igual === - igualdad estricta
5 === "5"; // false, porque no son del mismo tipo y los tipos tambien difieren

