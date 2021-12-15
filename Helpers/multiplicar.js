const fs = require('fs');
const colors = require('colors')


const crearArchivo = async (base = 5, listar = false, hasta) => {

    try {
        let salida, consola = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `${colors.yellow(base)} ${colors.red('x')} ${colors.yellow(i)} = ${colors.green(base * i)}\n`
            consola += `${base} x ${i} = ${base * i}\n`
        }


        if (listar) {
            console.log('==================='.green)
            console.log(colors.red('    Tabla del:') , colors.yellow(base) )
            console.log(colors.green('==================='))
            console.log(salida)
        }

        fs.writeFileSync(`./Salida/tabla-${base}.txt`, consola)

        return (`tabla-${base}.txt`).rainbow
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo
}