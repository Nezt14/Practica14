const fs = requiere(`fs`)
const fileName = `vehiculos.json`

fs.readFile(fileName, `utf-8`, (err,content)=>{
    if(err){
        console.log(`error al leer el archivo JSON`, err);
        return;
    }
    const vehiculos = JSON.parse(content);
    console.log(`La flota de vehiculos es de ${vehiculos.length}`)
})