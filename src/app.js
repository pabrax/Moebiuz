// se importan las librerias y archivos necesarios
import express from 'express';
import morgan from 'morgan';
import authRoutes from './routes/auth.routes.js'

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/api' , authRoutes);

// exporta el modulo de express para usarlo en index.js
export default app;

