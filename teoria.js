//Teoria de Arreglos y objetos

let array = []
let object = {}

let amigos = ['Juliany', 'juany', 'isaias', 'jeshua']

let isaias = {
    nombre: 'Isaias Gomez',
    fotos: ['url1, url2, url3'],
    informacion: [
        { trabajo: 'Capitalizarme', direccionTrabajo: 'las condes' },
        { estudio: 'urbe', carrera: 'diseño' }
    ],
    datosPersonales: {
        fechaNacimiento: '03/11/1986',
        lugar: 'punto fijo'
    }
}


console.log('Amigos:', amigos)
console.log('amigo:', amigos[2])
console.log('Isaias:', isaias)
console.log('Nombre de isaias:', isaias.nombre)
console.log('Direccionde trabajo de isaias:', isaias.informacion[0].direccionTrabajo)
console.log('fecha de nacimiento de isaias:', isaias.datosPersonales.fechaNacimiento)
