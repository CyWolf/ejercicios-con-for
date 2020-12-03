/*
script que regrese un string con la letra exacta  
Aquí está el resultado esperado 
en la consola:

'let it be, let it be, let it be, let it be, 
words of wisdom, 
let it be, let it be, let it be, let it be, let it be, 
there will be an answer, 
let it be'

let it be se repite. Otra vez usaremos bucles
*/

let piece1 = 'let it be, '
const piece2 = 'words of wisdom, '
const piece3 = 'there will be an answer, '
const piece4 = 'let it be.'

function repeat (a) {
    let piece1X4 = 'let it be,'
    for(let i=1; i<=a; i++){
        piece1X4 = piece1X4 + piece1
    }
    return piece1X4
}

let fullSong = repeat(3) + piece2 + repeat(4) + piece3  + piece4
console.log(fullSong)


