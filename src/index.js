// importa los elementos del archivo app
import app from './app.js'
import {connectDB} from  './db.js'
import { PORT } from './config.js';

//conexion bd
connectDB();

// se define el puerto de escucha y manda un mensaje por consola
app.listen(PORT);
console.log("server on port ", PORT);


