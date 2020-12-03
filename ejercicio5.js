/*
La ruleta rusa. Desarrollar un script que imite los intentos de disparo (6 disparos) de un revolver
Sera necesario generar un numero aleatorio entre 1 y 6 (Posicion de la recamara) y una variable que almacena
la posicion de la bala

Disparar el arma hasta que la bala sea disparada.

Si la posición de la bala coincide con la posición de la recámara, debe imprimir: estas muerto
Si la posición de la bala no coincide con la posición de la recámara, debe imprimir: Sigue jugando

resultado:
Posicion de la bala: 5

Posicion 3, sigue jugando
Posicion 2, sigue jugando
posicion 4, sigue jugando
posicion 5, estas muerto
*/

const posicionBala = Math.floor((Math.random()*6)+1)
function posicionRecamara(i) {
    if (i === posicionBala) {
        return `posicion ${i}, estas muerto`
    } else {
        return`posicion ${i}, sigue intentando`
    }
}

for (let i = 1; i <= 6; i++) {
    let shoot = posicionRecamara(i)
    if (shoot.includes('muerto')) {
        i = 10
    }
    console.log(shoot)
}
