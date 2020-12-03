/*
Escribe el código necesario para imprimir en la consola todos los números del 
1 al 100.

Para múltiplos de 3, en vez del número, imprime la palabra Fizz.

Para múltiplos de 5, imprime Buzz.

Para números que sean múltiplos de 3 y 5, imprime FizzBuzz.

Ejemplo de resultado:

/ 1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz
16
.... .... 98
Fizz
Buzz
/
*/

for(let i=1; i <= 100; i++){
    let number = i / 3
    let number2 = i / 5
    if (Number.isInteger(number) && Number.isInteger(number2)){
        console.log('fizzBuzz')
    }else{
        if (Number.isInteger(number2)) {
            console.log('Buzz')
        }else {
            if (Number.isInteger(number)){
                console.log('Fizz')
            }else {
                console.log(i)
            }
        }
    }
}
