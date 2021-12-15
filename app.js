
//const { argv } = require('process')
//const { argv } = require('yargs')
const { crearArchivo } = require('./Helpers/multiplicar')

const argv = require('./config')

    

console.clear()

//toma la base de linea de comandos ingresando node app --base=5
// const[, , arg3 = 'base=5'] = argv
// const [ , base = 5] = arg3.split('=')

// console.log(base)


//const base = 9

//Código para crear un archivo con las tablas de multiplicar
crearArchivo(argv.b, argv.listar, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'Creado'))
    .catch(err => console.log(err))