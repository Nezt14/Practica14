
const readline = require('readline');

const create = require('./create');
const AddVehicle = require('./add');
const read = require('./read');
const modify = require('./modify');
const deleteVehicle = require('./delete');
const rl = readline.createInterface({
    input: process.stdin, output: process.stdout
});
function showMenu() {
    console.log('\n— Menú —');
    console.log('1. Crear archivo JSON');
    console.log('2. Leer archivo JSON');
    console.log('3. Agregar vehículo');
    console.log(`4. Modificar vehículo`);
    console.log('5. Eliminar vehículo');
     console.log('6. Salir');
}

function handleMenuOption(option) {
    switch (option) {
        case `1`:
            create();
            break;
            case `2`:
            read();
            break;
            case `3`:
            AddVehicle();
            break;
            case `4`:
            modify();
            break;
            case `5`:
            deleteVehicle();
            break;
            case `6`:
                console.log(`Saliendo del programa`)
            rl.close();
            return;
    
        default:
            break;
    }
    setTimeout(promptMenu, 1000);
}
function promptMenu(){
    showMenu();
    rl.question(`seleccione una opcion: `, handleMenuOption);
}

promptMenu();