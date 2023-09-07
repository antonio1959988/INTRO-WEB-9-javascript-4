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
*/

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

