import express from 'express';

import path from 'path';

import cors from 'cors';

import 'express-async-errors';  
// não está funcionando

import './database/connection';

import routes from './routes';

import errorHandler from './errors/handler';











const app = express();

app.use(express.json());

app.use(routes); 

app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));

app.use(errorHandler);

app.use(cors());




// rota = conjunto
// recurso = usuario
//métodos HTTP = GRT, POST, PUT, DELETE
    //get = bUSCAR UMA INFORMAÇÃO
    //post =criando uma informação
    //put = editando uma informação
    //delete = deletando uma informação

// Parâmetros

// Query Params: http://localhost:3333/users?search=diego
// Route Params: http://localhost:3333/users/1 (Identificar um recurso)
// Body: http://localhost:3333/users (Identificar um recurso)

app.listen(3333);