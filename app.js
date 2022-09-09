const express = require('express');
const app = express();

const {infoCursos} = require('./cursos.js');

//ROTAS: o .get abaixo é o método http e a barra('/') é o caminho 
app.get('/', (req, res) => {
    res.send('Mi primer servidor. Cursos ')
});

//CURSOS
app.get('/cursos', (req, res) => {
    res.send(JSON.stringify(infoCursos))
});

//PROGRAMACION
app.get('/cursos/programacion', (req,res) => {
    res.send(JSON.stringify(infoCursos.programacion));
});

// LINGUAGEM programacion
//aqui o ":lenguaje" é um parametro url porque poderia haver centenas de linguagens cadastradas no curso de programaçao e isso faria com que eu precisasse cadastrar centenas de rotas 
app.get('/cursos/programacion/:lenguaje', (req,res) => {
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
        if (resultados.length === 0){
        return res.status(404).send(`No se encontraram cursos de ${lenguaje}`)
        }
    res.send(JSON.stringify(resultados))
});

// NIVEL programacion
app.get('/cursos/programacion/:lenguaje/:nivel', (req, res) => {
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel)
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraram cursos de ${lenguaje} de nivel ${nivel}`)
        }
    res.send(JSON.stringify(resultados))
});

//MATEMATICAS
app.get('/cursos/matematicas', (req,res) => {
    res.send(JSON.stringify(infoCursos.matematicas));
});

//TEMA matematicas
app.get('/cursos/matematicas/:tema', (req,res) => {
    const tema = req.params.tema;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema);
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraram cursos de ${tema}`)
        }
    res.send(JSON.stringify(resultados))
});

//NIVEL matematicas
app.get('/cursos/matematicas/:tema/:nivel', (req, res) => {
    const tema = req.params.tema;
    const nivel = req.params.nivel;
    const resultados = infoCursos.matematicas.filter(curso => curso.tema === tema && curso.nivel === nivel)
    if (resultados.length === 0){
        return res.status(404).send(`No se encontraram cursos de ${tema} de nivel ${nivel}`)
        }
    res.send(JSON.stringify(resultados))
});


//const PUERTO = 1000;    ESSA LINHA É QUANDO ATRIBUIMOS UMA PORTA FIXA
//const PUERTO = process.env.PORT;   ESSA LINHA É USADA QUANDO IRÁ HOSPEDAR A APLICAÇÃO EM OUTRO LUGAR
const PUERTO = process.env.PORT || 1000;  //AMBOS

app.listen(PUERTO, () => {
    console.log(`El servidor está escuchando en el puerto ${PUERTO}...`)
});

