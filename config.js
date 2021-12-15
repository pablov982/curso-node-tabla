const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: 'true',
        describe:'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias:'listar',
        type:'boolean',
        default:false,
        demandOption:'true',
        describe:'Muestra la operación en consola'
    })
    .option('h', {
        alias:'hasta',
        type:'number',
        default:10,
        describe:'Hasta que numero se multiplica'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base tiene que ser un número'
        }
        return true
    })
    .check((argv, options) => {
        if (isNaN(argv.h)) {
            throw 'el hasta tiene que ser un número'
        }
        return true
    })
    .argv

    module.exports = argv;