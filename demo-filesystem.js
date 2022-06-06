const fs = require('fs');
//la funcion delega al api os para que cree el archivo, 
//de manera asyncronica node espera a que esto suceda y se informa si genero error o fue exitosa
//funcion writeFile que se encarga de crear un archivo de texto plano 
fs.writeFile('./texto.txt', 'linea uno', function (err) {
    if (err) {
        console.log(err);
    }
    console.log('Archivo texto.txt creado con exito')
});

//funcion readFile que se encarga de leer el archivo de texto plano creado 
fs.readFile('./texto.txt', function (err, data) {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});


console.log('ultima linea de codigo')