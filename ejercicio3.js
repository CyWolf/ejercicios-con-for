/*
Hemos creado una función que regresa un color basado en un número entero entre 1 
y 4 (Azul = 1, Rojo = 2, Amarillo = 3, Negro = 4). Cualquier número mayor o igual a 4, 
regresará el color negro.

Escenario: Digamos que somos profesor en un aula de 10 estudiantes y quieres 
asignar de forma aleatoria UN color (Azul, Rojo, Amarillo, Negro), a cada 
estudiante.

1.Pintar por consola, el color de cada niño 

2. Cambia la función getAllStudentColors() para que devuelva un listado(array) de 10 
colores aleatorios, con cada item del conjunto representando el color asignado a 
cada estudiante.
💡 Pista:
Tienes 10 estudiantes, necesitas hacer un bucle 10 veces.

Imprime el color en la consola.
*/

function getColor (number) {
    if (number === 1){
        return 'Azul'
    }else{
        if ( number === 2){
            return 'Rojo'
        }else{
            if( number === 3) {
                return 'Amarillo'
            }else {
                return 'Negro'
            }
        }
    }
}

for(let i = 1 ; i <= 10; i++){
    let randomNumber = Math.round((Math.random()*10)+ 1)
    console.log('Numero aleatorio: ', randomNumber)
    console.log(`valor de i es: ${i}`)
    let color = getColor(randomNumber)
    console.log(`El alumno ${i} tiene color ${color}`)
}







