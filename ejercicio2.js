/*
    genenar una escusa aleatoria al cargar el script
    ejemplo: No pude ir al trabajo porque estoy deprimido
*/

let acciones = [
    'ir al trabajo',
    'ir a la iglesia',
    'ir al curso',
    'hacer ejercicio',
    'ir a jugar',
    'ir a comer',
    'ir a gym',
    'ir al mall',
    'ir al cine'
]

let escusas = [
    'me quede dormido',
    'amaneci enfermo',
    'tengo diarrea',
    'la alarma no sono',
    'problemas familiares',
    'tuve un accidente'
]

function encontrarAccion() {
    let number = Math.round(Math.random() * acciones.length - 1) 
    if (number < 0) {
        number = number + 1
    }  
    return acciones[number]
}

function encontrarEscusa() {
    let number = Math.round(Math.random() * escusas.length - 1 ) 
    console.log('antes', number)
    if (number < 0) {
        number = number + 1
    }
    console.log('despues', number)
    return escusas[number]
}

let resp = `No pude ${encontrarAccion()} porque ${encontrarEscusa()}`
console.log(resp)