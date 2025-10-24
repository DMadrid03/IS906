import express from 'express';
import {loadEnvFile} from "node:process"
import todoRoutes from './src/routes/todo.routes';
import { errorHandler } from './src/middlewares/errorHandler';


loadEnvFile('.env');

const app = express();
app.use(express.json()); //middleware para parsear el body a json


app.get('/', (req, res) => {
    res.send('Hello World!');
});


//un middleware para definir las rutas
app.use('/todos',todoRoutes);

app.use(errorHandler); //middleware propio para manejar errores


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});