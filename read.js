
const fs = require('fs')
const fileName = 'vehiculos.json'
fs.readFile(fileName, 'utf-8', (err, content) => {

    if (err) {
        console.log('Error al leer el archivo JSON', err)
        return;
    }
    try {

        const objectJSON = JSON.parse(content)
        console.log('Flota de Vehiculos: ', objectJSON)
    } catch (error) {
        console.log('Error al parsear el JSON', error)
    }
})