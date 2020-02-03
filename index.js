var express = require('express');
var bodyParser =  require('body-parser');

var app = express();
//preparo body parser para que transforme las peticiones de texto a json
app.use( bodyParser.urlencoded ( {extended:false}) )
app.use( bodyParser.json() )

app.get('/', (req, res) => {
    res.status(200).send("Hola")
})

app.get('/puntuaciones/', (req, res) => {
    //TODO: leer base de datos SELECT
    let datosJSON = {
        accion: 'get all',
        datos: [
            {nombre: 'pepe', puntuacion:33},
            {nombre: 'bea', puntuacion:23},
            {nombre: 'angel', puntuacion:29}
        ]
    }
    res.status(200).send(datosJSON);
})


app.post('/puntuacion', (req, res) => {
    var datos = req.body;   
    //TODO: insertar base de datos insert
    let datosJsonRespuesta = {
        accion: 'save',
        datos: datos
    }
    res.status(200).send(datosJsonRespuesta);
})


app.delete('/puntuacion/:id', (req, res) => {
    let puntuacionID = req.params.id
    let datosJsonRespuesta = {
        accion: 'delete',
        datos: puntuacionID
    }
    //TODO: borrar de la base de datos el id
    res.status(200).send(datosJsonRespuesta)
})


app.listen(5200, () => {
    console.log("API REST funcionando en el puerto 5200")
})