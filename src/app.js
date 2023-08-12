// se importa y se instancia la libreria de express
import express from 'express';

const app = express();

// se dfine el puerto de escucha y manda un mensaje por consola
app.listen(3000)
console.log("server on port ", 3000);