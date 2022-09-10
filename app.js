const express = require('express');
const app = express();
const {infoCursos} = require('./datos/cursos.js');

//ROUTERS -- criador de rota

const routerProgramacion = require('./routers/programacion.js');
app.use('/cursos/programacion', routerProgramacion);

const routerMatematicas = require('./routers/matematicas.js');
app.use('/cursos/matematicas', routerMatematicas);


//ROUTING - ROTAS: o .get abaixo é o método http e a barra('/') é o caminho 
// aqui é a rota 'localhost:1000'
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos ')
});

//CURSOS
// aqui é a rota 'localhost:1000/cursos'
app.get('/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
});

//const PUERTO = 1000;    ESSA LINHA É QUANDO ATRIBUIMOS UMA PORTA FIXA
//const PUERTO = process.env.PORT;   ESSA LINHA É USADA QUANDO IRÁ HOSPEDAR A APLICAÇÃO EM OUTRO LUGAR
const PUERTO = process.env.PORT || 1000;  //AMBOS

app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
});

