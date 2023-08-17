// se importan las librerias y archivos necesarios
import express from 'express';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

//rutas
import authRoutes from './routes/auth.routes.js';
import taskRoutes from './routes/tasks.routes.js';
 

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
// routes
app.use('/api' , authRoutes);
app.use('/api' , taskRoutes);

// exporta el modulo de express para usarlo en index.js
export default app;

