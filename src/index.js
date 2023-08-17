// importa los elementos del archivo app
import app from './app.js'
import {connectDB} from  './db.js'

//conexion bd
connectDB();

// se define el puerto de escucha y manda un mensaje por consola
app.listen(3000);
console.log("server on port ", 3000);


